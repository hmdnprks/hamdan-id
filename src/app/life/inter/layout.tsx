"use client";
import type { ReactNode } from "react";
import { useEffect } from "react";
import clsx from "clsx";

export default function InterLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.classList.add("inter-theme");
    return () => document.body.classList.remove("inter-theme");
  }, []);

  return (
    <div
      className={clsx(
        "min-h-screen bg-[var(--inter-bg)] text-[var(--inter-text)] transition-colors"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 py-10">{children}</div>
    </div>
  );
}