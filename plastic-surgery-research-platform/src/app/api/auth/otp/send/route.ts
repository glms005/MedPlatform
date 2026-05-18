import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isValidGeorgianMobile, maskPhone, normalizePhone } from "@/lib/auth/phone";
import {
  authCookies,
  createOtpChallenge,
  generateOtpCode,
  isDevOtpExposed,
} from "@/lib/auth/tokens";

export async function POST(request: Request) {
  let body: { phone?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const phone = body.phone ? normalizePhone(body.phone) : null;
  if (!phone || !isValidGeorgianMobile(phone)) {
    return NextResponse.json(
      { error: "Enter a valid Georgian mobile number (+995 5XX XX XX XX)" },
      { status: 400 },
    );
  }

  const code = generateOtpCode();
  const { token, exp } = createOtpChallenge(phone, code);

  const jar = await cookies();
  jar.set(authCookies.challenge, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: authCookies.challengeMaxAge,
  });

  // SMS provider (Twilio / Supabase) plugs in here. MVP logs in dev only.
  if (process.env.NODE_ENV !== "production") {
    console.info(`[auth] OTP for ${phone}: ${code}`);
  }

  const response: {
    ok: true;
    maskedPhone: string;
    expiresAt: number;
    message: string;
    devCode?: string;
  } = {
    ok: true,
    maskedPhone: maskPhone(phone),
    expiresAt: exp,
    message: "Verification code sent.",
  };

  if (isDevOtpExposed()) {
    response.devCode = code;
  }

  return NextResponse.json(response);
}
