"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { LogoutButton } from "@/components/auth/logout-button";
import { useLanguage } from "@/providers/language-provider";

export function SiteHeader() {
  const { locale, setLocale, t } = useLanguage();

  const navItems = [
    { label: t.common.learn, href: "/learn" },
    { label: t.common.simulator, href: "/audit-simulator" },
    { label: t.common.library, href: "/resources" },
    { label: t.common.templates, href: "/resources" },
    { label: t.common.useCases, href: "/tutorials" },
    { label: t.common.insights, href: "/tutorials" },
    { label: t.common.premium, href: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b14]/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-sm font-semibold text-indigo-200">
              GAH
            </div>

            <div className="leading-tight">
              <div className="text-base font-semibold text-white">GOV-AI-HUB</div>
              <div className="font-ui text-xs text-slate-400">
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
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>

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

          <Button className="rounded-2xl bg-indigo-500 text-white hover:bg-indigo-400">
            {t.common.companies}
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}