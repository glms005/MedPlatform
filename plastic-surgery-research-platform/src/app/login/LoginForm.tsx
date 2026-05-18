"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { ComingSoonBanner } from "@/components/shared/ComingSoonBanner";
import { useLocale } from "@/components/providers/LocaleProvider";

export function LoginForm() {
  const { t } = useLocale();
  const [step, setStep] = useState<"phone" | "code" | "done">("phone");
  const [phone, setPhone] = useState("+995 ");
  const [code, setCode] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  if (step === "done") {
    return (
      <Card className="border-brand-blue/30 p-8 text-center ring-1 ring-brand-blue/20">
        <p className="text-xl font-semibold text-brand-ink">Verified (mock)</p>
        <p className="mt-2 text-sm text-brand-muted">
          No account was created. Supabase phone OTP will connect in Phase 1.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <ComingSoonBanner feature="Phone OTP authentication" />
      <form
        className="mt-6 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (step === "phone") setStep("code");
          else setStep("done");
        }}
      >
        {step === "phone" ? (
          <label className="block text-sm">
            <span className="mb-1 block font-medium">{t.login.phone}</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-brand-outline bg-white px-3 py-2 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              placeholder="+995 5XX XX XX XX"
            />
          </label>
        ) : (
          <label className="block text-sm">
            <span className="mb-1 block font-medium">{t.login.code}</span>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-xl border border-brand-outline bg-white px-3 py-2 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              placeholder="123456"
            />
            <p className="mt-1 text-xs text-brand-muted">Demo code: any 6 digits</p>
          </label>
        )}
        <label className="flex items-center gap-2 text-sm text-brand-muted">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
            className="rounded border-brand-outline"
          />
          {t.login.anonymous}
        </label>
        <button
          type="submit"
          className="w-full rounded-md bg-brand-ink py-3 text-sm font-semibold text-white hover:bg-brand-accent"
        >
          {step === "phone" ? t.login.sendCode : t.login.verify}
        </button>
      </form>
    </Card>
  );
}
