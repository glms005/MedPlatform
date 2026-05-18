import { cookies } from "next/headers";
import { authCookies, parseSessionToken } from "./tokens";
import type { AuthUser } from "./types";

export async function getSessionUser(): Promise<AuthUser | null> {
  const jar = await cookies();
  const token = jar.get(authCookies.session)?.value;
  const session = parseSessionToken(token);
  return session?.user ?? null;
}
