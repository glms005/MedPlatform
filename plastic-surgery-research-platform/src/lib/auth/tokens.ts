import { createHmac, randomInt, randomUUID, timingSafeEqual } from "crypto";
import type { OtpChallenge, SessionPayload } from "./types";

const CHALLENGE_COOKIE = "mp_otp_challenge";
const SESSION_COOKIE = "mp_session";

const OTP_TTL_MS = 10 * 60 * 1000;
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function secret(): string {
  const s = process.env.AUTH_SECRET;
  if (s && s.length >= 16) return s;
  if (process.env.NODE_ENV === "production") {
    console.warn("[auth] AUTH_SECRET missing or short; using insecure fallback");
  }
  return "medplatform-dev-secret-change-me";
}

function sign(data: string): string {
  return createHmac("sha256", secret()).update(data).digest("base64url");
}

function pack<T extends object>(payload: T): string {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = sign(body);
  return `${body}.${sig}`;
}

function unpack<T extends object>(token: string): T | null {
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = sign(body);
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }
  try {
    return JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as T;
  } catch {
    return null;
  }
}

export function generateOtpCode(): string {
  return String(randomInt(100000, 999999));
}

export function hashOtpCode(phone: string, code: string): string {
  return createHmac("sha256", secret()).update(`otp:${phone}:${code}`).digest("hex");
}

export function packOtpChallenge(challenge: OtpChallenge): string {
  return pack(challenge);
}

export function createOtpChallenge(phone: string, code: string): { token: string; exp: number } {
  const exp = Date.now() + OTP_TTL_MS;
  const challenge: OtpChallenge = {
    phone,
    codeHash: hashOtpCode(phone, code),
    exp,
    attempts: 0,
  };
  return { token: packOtpChallenge(challenge), exp };
}

export function parseOtpChallenge(token: string | undefined): OtpChallenge | null {
  if (!token) return null;
  const c = unpack<OtpChallenge>(token);
  if (!c || c.exp < Date.now()) return null;
  return c;
}

export function verifyOtpChallenge(
  challenge: OtpChallenge,
  code: string,
): { ok: true } | { ok: false; reason: "invalid" | "expired" | "max_attempts" } {
  if (challenge.exp < Date.now()) return { ok: false, reason: "expired" };
  if (challenge.attempts >= MAX_ATTEMPTS) return { ok: false, reason: "max_attempts" };
  const hash = hashOtpCode(challenge.phone, code);
  if (hash !== challenge.codeHash) return { ok: false, reason: "invalid" };
  return { ok: true };
}

export function bumpChallengeAttempts(challenge: OtpChallenge): OtpChallenge {
  return { ...challenge, attempts: challenge.attempts + 1 };
}

export function createSessionToken(user: SessionPayload["user"]): { token: string; exp: number } {
  const exp = Date.now() + SESSION_TTL_MS;
  const session: SessionPayload = { user, exp };
  return { token: pack(session), exp };
}

export function parseSessionToken(token: string | undefined): SessionPayload | null {
  if (!token) return null;
  const s = unpack<SessionPayload>(token);
  if (!s || s.exp < Date.now()) return null;
  return s;
}

export function createUserId(): string {
  return randomUUID();
}

export const authCookies = {
  challenge: CHALLENGE_COOKIE,
  session: SESSION_COOKIE,
  challengeMaxAge: OTP_TTL_MS / 1000,
  sessionMaxAge: SESSION_TTL_MS / 1000,
} as const;

export function isDevOtpExposed(): boolean {
  return process.env.NODE_ENV !== "production" || process.env.EXPOSE_DEV_OTP === "true";
}
