import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  authCookies,
  bumpChallengeAttempts,
  createSessionToken,
  createUserId,
  packOtpChallenge,
  parseOtpChallenge,
  verifyOtpChallenge,
} from "@/lib/auth/tokens";
import type { AuthUser } from "@/lib/auth/types";

export async function POST(request: Request) {
  let body: { code?: string; anonymous?: boolean; displayName?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const code = body.code?.replace(/\D/g, "") ?? "";
  if (code.length !== 6) {
    return NextResponse.json({ error: "Enter the 6-digit code" }, { status: 400 });
  }

  const jar = await cookies();
  const challengeToken = jar.get(authCookies.challenge)?.value;
  const challenge = parseOtpChallenge(challengeToken);

  if (!challenge) {
    return NextResponse.json(
      { error: "Code expired. Request a new one." },
      { status: 400 },
    );
  }

  const result = verifyOtpChallenge(challenge, code);
  if (!result.ok) {
    if (result.reason === "max_attempts") {
      jar.delete(authCookies.challenge);
      return NextResponse.json(
        { error: "Too many attempts. Request a new code." },
        { status: 429 },
      );
    }
    const bumped = bumpChallengeAttempts(challenge);
    jar.set(authCookies.challenge, packOtpChallenge(bumped), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: authCookies.challengeMaxAge,
    });
    return NextResponse.json({ error: "Incorrect code. Try again." }, { status: 400 });
  }

  const useAnonymous = Boolean(body.anonymous);
  const customName = body.displayName?.trim();
  const lastDigits = challenge.phone.slice(-4);

  const user: AuthUser = {
    id: createUserId(),
    phone: challenge.phone,
    displayName: useAnonymous
      ? "Anonymous"
      : customName && customName.length >= 2
        ? customName
        : `Member_${lastDigits}`,
    anonymousName: useAnonymous
      ? customName && customName.length >= 2
        ? customName
        : `Researcher_${lastDigits}`
      : null,
    phoneVerified: true,
  };

  const { token: sessionToken } = createSessionToken(user);

  jar.delete(authCookies.challenge);
  jar.set(authCookies.session, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: authCookies.sessionMaxAge,
  });

  return NextResponse.json({ ok: true, user });
}
