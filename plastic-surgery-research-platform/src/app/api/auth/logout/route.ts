import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { authCookies } from "@/lib/auth/tokens";

export async function POST() {
  const jar = await cookies();
  jar.delete(authCookies.session);
  jar.delete(authCookies.challenge);
  return NextResponse.json({ ok: true });
}
