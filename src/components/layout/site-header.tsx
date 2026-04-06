"use client";

import Link from "next/link";
import { Orbit, BarChart3 } from "lucide-react";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { LogoutButton } from "@/components/auth/logout-button";
import { useLanguage } from "@/providers/language-provider";
import { useLearningStats } from "@/hooks/use-learning-stats";

export function SiteHeader() {
  const { locale, setLocale, t } = useLanguage();
  const stats = useLearningStats();

  const score = stats.xp ?? 0;

  const navItems = [
    { label: t.common.learn, href: "/learn" },
    { label: locale === "fr" ? "Blog" : "Blog", href: "/blog" },
    { label: t.common.glossary, href: "/glossaire" },
    { label: t.common.documents, href: "/documents" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b14]/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-200">
              <Orbit className="h-5 w-5" />
            </div>

            <div className="min-w-0 leading-tight">
              <div className="truncate text-base font-semibold text-white">
                GOV-AI-HUB
              </div>
              <div className="font-ui truncate text-xs text-slate-400">
                {t.common.brandLine}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-ui text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <BarChart3 className="h-4 w-4 text-indigo-300" />
            <span className="font-ui text-xs uppercase tracking-[0.18em] text-slate-400">
              {locale === "fr" ? "Score" : "Score"}
            </span>
            <span className="text-sm font-semibold text-white">{score}</span>
          </div>

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

          <LogoutButton />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}