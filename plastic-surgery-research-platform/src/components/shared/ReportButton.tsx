"use client";

import { useState } from "react";
import { reportReasons } from "@/lib/community-rules";
import { useLocale } from "@/components/providers/LocaleProvider";

type Props = {
  targetType: string;
  targetId: string;
};

export function ReportButton({ targetType, targetId }: Props) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <span className="text-xs text-brand-muted">Report received (mock)</span>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs font-medium text-brand-muted underline-offset-2 hover:text-brand-blue hover:underline"
      >
        {t.common.report}
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-brand-ink/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-sm bg-white p-6 shadow-lift">
            <h3 className="font-display text-lg font-semibold text-brand-ink">
              {t.common.report}
            </h3>
            <p className="mt-1 text-xs text-brand-muted">
              {targetType} · {targetId} — {t.common.mockData}
            </p>
            <ul className="mt-4 space-y-2">
              {reportReasons.map((reason) => (
                <li key={reason}>
                  <button
                    type="button"
                    className="w-full rounded-md border border-brand-outline px-3 py-2 text-left text-sm hover:border-brand-blue/40 hover:bg-brand-blue/5"
                    onClick={() => {
                      setOpen(false);
                      setDone(true);
                    }}
                  >
                    {reason}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-4 w-full text-sm text-brand-muted hover:text-brand-ink"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
