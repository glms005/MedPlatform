"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { OtpInput } from "@/components/auth/OtpInput";
import { useAuth } from "@/components/providers/AuthProvider";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Card } from "@/components/ui/Card";

type Step = "phone" | "code" | "done";

export function LoginForm() {
  const { t } = useLocale();
  const router = useRouter();
  const { setUser, refresh } = useAuth();

  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("+995 ");
  const [code, setCode] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [nickname, setNickname] = useState("");
  const [maskedPhone, setMaskedPhone] = useState("");
  const [devCode, setDevCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resendIn, setResendIn] = useState(0);

  useEffect(() => {
    if (resendIn <= 0) return;
    const id = window.setInterval(() => setResendIn((s) => Math.max(0, s - 1)), 1000);
    return () => window.clearInterval(id);
  }, [resendIn]);

  const sendCode = useCallback(async () => {
    setError(null);
    setLoading(true);
    setDevCode(null);
    try {
      const res = await fetch("/api/auth/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ phone }),
      });
      const data = (await res.json()) as {
        error?: string;
        maskedPhone?: string;
        devCode?: string;
      };
      if (!res.ok) {
        setError(data.error ?? t.login.errorGeneric);
        return;
      }
      setMaskedPhone(data.maskedPhone ?? "");
      setDevCode(data.devCode ?? null);
      setStep("code");
      setCode("");
      setResendIn(60);
    } catch {
      setError(t.login.errorGeneric);
    } finally {
      setLoading(false);
    }
  }, [phone, t.login.errorGeneric]);

  const verifyCode = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          code,
          anonymous,
          displayName: nickname || undefined,
        }),
      });
      const data = (await res.json()) as { error?: string; user?: import("@/lib/auth/types").AuthUser };
      if (!res.ok) {
        setError(data.error ?? t.login.errorGeneric);
        return;
      }
      if (data.user) {
        setUser(data.user);
        await refresh();
      }
      setStep("done");
    } catch {
      setError(t.login.errorGeneric);
    } finally {
      setLoading(false);
    }
  }, [code, anonymous, nickname, setUser, refresh, t.login.errorGeneric]);

  if (step === "done") {
    return (
      <Card className="border-brand-teal/30 p-8 text-center ring-1 ring-brand-teal/20">
        <p className="font-display text-2xl font-medium text-brand-ink">{t.login.successTitle}</p>
        <p className="mt-2 text-sm text-brand-muted">{t.login.successBody}</p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/forum"
            className="inline-flex min-h-[3rem] items-center justify-center rounded-lg bg-brand-teal px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-teal-dark"
          >
            {t.login.goCommunity}
          </Link>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-sm font-semibold text-brand-blue hover:underline"
          >
            {t.login.goHome}
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (step === "phone") void sendCode();
          else void verifyCode();
        }}
      >
        {step === "phone" ? (
          <>
            <p className="text-sm leading-relaxed text-brand-muted">{t.login.phoneHint}</p>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-brand-ink">{t.login.phone}</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                disabled={loading}
                className="w-full min-h-[3rem] rounded-xl border border-brand-outline bg-white px-3 py-2.5 outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 disabled:opacity-60"
                placeholder="+995 5XX XX XX XX"
              />
            </label>
          </>
        ) : (
          <>
            <p className="text-sm text-brand-muted">
              {t.login.codeSentTo}{" "}
              <span className="font-medium text-brand-ink">{maskedPhone}</span>
            </p>
            <div>
              <span className="mb-2 block text-sm font-medium text-brand-ink">{t.login.code}</span>
              <OtpInput value={code} onChange={setCode} disabled={loading} />
            </div>
            {devCode ? (
              <p className="sw-caution rounded-lg px-3 py-2 text-center text-sm">
                {t.login.devCodeLabel}: <strong className="font-mono">{devCode}</strong>
              </p>
            ) : null}
            <button
              type="button"
              disabled={loading || resendIn > 0}
              onClick={() => void sendCode()}
              className="text-sm font-semibold text-brand-blue hover:underline disabled:cursor-not-allowed disabled:text-brand-muted"
            >
              {resendIn > 0 ? t.login.resendIn.replace("{s}", String(resendIn)) : t.login.resend}
            </button>
            <button
              type="button"
              onClick={() => {
                setStep("phone");
                setCode("");
                setError(null);
              }}
              className="block text-xs text-brand-muted hover:text-brand-ink"
            >
              {t.login.changePhone}
            </button>
          </>
        )}

        {step === "code" ? (
          <>
            <label className="flex items-start gap-2.5 text-sm text-brand-muted">
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="mt-1 rounded border-brand-outline"
              />
              <span>{t.login.anonymous}</span>
            </label>
            {anonymous ? (
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-brand-ink">{t.login.nickname}</span>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  maxLength={32}
                  placeholder={t.login.nicknamePlaceholder}
                  className="w-full rounded-xl border border-brand-outline bg-white px-3 py-2.5 outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                />
              </label>
            ) : null}
          </>
        ) : null}

        {error ? (
          <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-900 ring-1 ring-rose-100" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading || (step === "code" && code.length !== 6)}
          className="flex min-h-[3rem] w-full items-center justify-center rounded-lg bg-brand-teal text-sm font-semibold text-white transition-colors hover:bg-brand-teal-dark disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? t.login.loading
            : step === "phone"
              ? t.login.sendCode
              : t.login.verify}
        </button>
      </form>
    </Card>
  );
}
