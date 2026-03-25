"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navItems = [
    { label: t.common.learn, href: "/learn" },
    { label: t.common.simulator, href: "/audit-simulator" },
    { label: t.common.library, href: "/resources" },
    { label: t.common.auditKits, href: "/audit-simulator" },
    { label: t.common.templates, href: "/resources" },
    { label: t.common.useCases, href: "/tutorials" },
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
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold text-white">GOV-AI-HUB</div>
                <div className="font-ui text-xs text-slate-400">
                  {t.common.brandLine}
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

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300"
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