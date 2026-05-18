export type AuthUser = {
  id: string;
  phone: string;
  displayName: string;
  anonymousName: string | null;
  phoneVerified: boolean;
};

export type OtpChallenge = {
  phone: string;
  codeHash: string;
  exp: number;
  attempts: number;
};

export type SessionPayload = {
  user: AuthUser;
  exp: number;
};
