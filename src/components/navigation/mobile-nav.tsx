"use client";

import Link from "next/link";
import { Award, CheckCircle2, Menu, Orbit, X, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import { useLearningStats } from "@/hooks/use-learning-stats";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const stats = useLearningStats();

  const navItems = [
    { label: t.common.learn, href: "/learn" },
    { label: t.common.simulator, href: "/audit-simulator" },
    { label: t.common.glossary, href: "/glossaire" },
    { label: t.common.documents, href: "/documents" },
    { label: t.common.insights, href: "/tutorials" },
    { label: t.common.premium, href: "/resources" },
    { label: t.common.companies, href: "#" },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-sm border-l border-white/10 bg-[#090b14] p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-200">
                  <Orbit className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <div className="truncate text-lg font-semibold text-white">
                    GOV-AI-HUB
                  </div>
                  <div className="font-ui truncate text-xs text-slate-400">
                    {t.common.brandLine}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                <div className="flex items-center justify-center gap-1 text-indigo-300">
                  <Zap className="h-4 w-4" />
                  <span className="font-ui text-[10px] uppercase tracking-[0.18em]">
                    XP
                  </span>
                </div>
                <div className="mt-2 text-lg font-semibold text-white">{stats.xp}</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                <div className="flex items-center justify-center gap-1 text-indigo-300">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-ui text-[10px] uppercase tracking-[0.18em]">
                    {locale === "fr" ? "Tutos" : "Tutorials"}
                  </span>
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  {stats.completedTutorials}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                <div className="flex items-center justify-center gap-1 text-indigo-300">
                  <Award className="h-4 w-4" />
                  <span className="font-ui text-[10px] uppercase tracking-[0.18em]">
                    {locale === "fr" ? "Badges" : "Badges"}
                  </span>
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  {stats.badgesUnlocked}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5">
                <button
                  type="button"
                  onClick={() => setLocale("fr")}
                  className={`font-ui px-3 py-2 text-sm transition ${
                    locale === "fr" ? "bg-indigo-500 text-white" : "text-slate-300"
                  }`}
                >
                  FR
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`font-ui px-3 py-2 text-sm transition ${
                    locale === "en" ? "bg-indigo-500 text-white" : "text-slate-300"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <nav className="mt-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 grid gap-3">
              <Button
                asChild
                className="rounded-2xl bg-indigo-500 text-white hover:bg-indigo-400"
              >
                <Link href="/learn" onClick={() => setOpen(false)}>
                  {t.common.start}
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/login" onClick={() => setOpen(false)}>
                  {t.common.signIn}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}