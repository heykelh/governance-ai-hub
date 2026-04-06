"use client";

import Link from "next/link";
import { Sparkles, CheckCircle2, BarChart3 } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { useLearningStats } from "@/hooks/use-learning-stats";

export function HomeHero() {
  const { locale, t } = useLanguage();
  const stats = useLearningStats();

  const score = stats.xp ?? 0;

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(129,140,248,0.14),transparent_26%)]" />

      <div className="container-shell relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="font-ui mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
              <Sparkles className="h-4 w-4" />
              {t.common.brandLine}
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {locale === "fr"
                ? "Apprends la Data Governance, le RGPD et l’AI Act simplement."
                : "Learn Data Governance, GDPR and the AI Act simply."}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {locale === "fr"
                ? "Une plateforme simple et efficace pour comprendre les concepts, accéder à des ressources utiles et développer des compétences concrètes en gouvernance des données."
                : "A simple and effective platform to understand key concepts, access useful resources and build real skills in data governance."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/learn"
                className="inline-flex rounded-2xl bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
              >
                {locale === "fr" ? "Commencer" : "Start learning"}
              </Link>

              <Link
                href="/documents"
                className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                {locale === "fr" ? "Voir les documents" : "View documents"}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(locale === "fr"
                ? [
                    "Parcours structurés",
                    "Tutoriels concrets",
                    "Documents prêts à l’usage",
                    "Compréhension claire et rapide",
                  ]
                : [
                    "Structured learning paths",
                    "Practical tutorials",
                    "Ready-to-use documents",
                    "Clear and fast understanding",
                  ]
              ).map((item) => (
                <div
                  key={item}
                  className="font-ui flex items-center gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-indigo-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[32px] p-6 lg:p-7">
            <div className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
              {locale === "fr" ? "Score" : "Score"}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-indigo-300" />
              <h3 className="text-2xl font-semibold text-white">
                {locale === "fr" ? "Ton score actuel" : "Your current score"}
              </h3>
            </div>

            <div className="mt-6 text-6xl font-semibold leading-none text-white">
              {score}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="font-ui text-xs uppercase tracking-[0.16em] text-slate-400">
                  {locale === "fr" ? "Tutoriels complétés" : "Completed tutorials"}
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  {stats.completedTutorials ?? 0}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="font-ui text-xs uppercase tracking-[0.16em] text-slate-400">
                  {locale === "fr" ? "Parcours disponibles" : "Available paths"}
                </div>
                <div className="mt-2 text-2xl font-semibold text-white">3</div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/learn"
                className="inline-flex rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
              >
                {locale === "fr"
                  ? "Continuer l’apprentissage"
                  : "Continue learning"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}