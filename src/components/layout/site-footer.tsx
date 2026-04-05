"use client";

import Link from "next/link";
import { Globe, Orbit } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";

export function SiteFooter() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#090b14]">
      <div className="container-shell py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-200">
              <Orbit className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-semibold text-white">
                GOV-AI-HUB
              </div>
              <div className="font-ui truncate text-xs text-slate-400">
                {locale === "fr"
                  ? "Data Governance • RGPD • AI Act"
                  : "Data Governance • GDPR • AI Act"}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <Link href="/learn" className="transition hover:text-white">
              {locale === "fr" ? "Apprendre" : "Learn"}
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="/glossaire" className="transition hover:text-white">
              {locale === "fr" ? "Glossaire" : "Glossary"}
            </Link>
            <Link href="/documents" className="transition hover:text-white">
              {locale === "fr" ? "Documents" : "Documents"}
            </Link>
            <a
              href="https://github.com/heykelh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Globe className="h-4 w-4" />
              heykelh
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-xs text-slate-500">
          {locale === "fr"
            ? "© GOV-AI-HUB — Plateforme simple pour apprendre la Data Governance, le RGPD et l’AI Act."
            : "© GOV-AI-HUB — A simple platform to learn Data Governance, GDPR and the AI Act."}
        </div>
      </div>
    </footer>
  );
}