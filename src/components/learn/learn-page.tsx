"use client";

import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { learningPaths } from "@/data/learning-paths";
import { useLanguage } from "@/providers/language-provider";

export function LearnPage() {
  const { locale } = useLanguage();
  const typedLocale = locale === "en" ? "en" : "fr";

  const quickTutorials =
    typedLocale === "fr"
      ? [
          {
            title: "Construire un RACI de gouvernance data",
            category: "Gouvernance Data",
            duration: "20 min",
            href: "/tutorials/raci-gouvernance-data",
          },
          {
            title: "Lancer un mini audit RGPD en PME",
            category: "RGPD",
            duration: "25 min",
            href: "/tutorials/mini-audit-rgpd-pme",
          },
          {
            title: "Créer un registre des usages IA",
            category: "IA",
            duration: "18 min",
            href: "/tutorials/registre-usages-ia",
          },
        ]
      : [
          {
            title: "Build a data governance RACI",
            category: "Data Governance",
            duration: "20 min",
            href: "/tutorials/raci-gouvernance-data",
          },
          {
            title: "Run a lightweight GDPR audit in an SME",
            category: "GDPR",
            duration: "25 min",
            href: "/tutorials/mini-audit-rgpd-pme",
          },
          {
            title: "Build an AI use case register",
            category: "AI",
            duration: "18 min",
            href: "/tutorials/registre-usages-ia",
          },
        ];

  return (
    <main className="min-h-screen text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(129,140,248,0.14),transparent_26%)]" />

        <div className="container-shell relative py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="font-ui mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
              <Sparkles className="h-4 w-4" />
              {typedLocale === "fr" ? "Apprentissage" : "Learning"}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {typedLocale === "fr"
                ? "Parcours et tutoriels"
                : "Learning paths and tutorials"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {typedLocale === "fr"
                ? "Une page simple pour progresser avec 3 parcours structurés et quelques tutoriels rapides, concrets et utiles."
                : "A simple page to progress through 3 structured learning paths and a few quick, practical and useful tutorials."}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="max-w-3xl">
          <h2 className="section-title text-white">
            {typedLocale === "fr" ? "Les 3 parcours" : "The 3 learning paths"}
          </h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            {typedLocale === "fr"
              ? "Commence par les fondamentaux, puis avance vers l’audit opérationnel et la gouvernance IA."
              : "Start with the fundamentals, then move toward operational audit and AI governance."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {learningPaths.map((path) => {
            const title = path.title[typedLocale];
            const level = path.level[typedLocale];
            const excerpt = path.excerpt[typedLocale];
            const modules = path.modules[typedLocale];
            const deliverables = path.deliverables[typedLocale];

            return (
              <div
                key={path.slug}
                className="glass-card rounded-[30px] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="font-ui flex items-center justify-between gap-3 text-sm text-slate-400">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {level}
                  </span>
                  <span>{path.duration}</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-4 text-slate-300">{excerpt}</p>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-lg font-semibold text-white">
                      {modules.length}
                    </div>
                    <div className="font-ui mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      {typedLocale === "fr" ? "Modules" : "Modules"}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-lg font-semibold text-white">
                      {path.duration}
                    </div>
                    <div className="font-ui mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      {typedLocale === "fr" ? "Durée" : "Duration"}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-lg font-semibold text-white">
                      {level}
                    </div>
                    <div className="font-ui mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      {typedLocale === "fr" ? "Niveau" : "Level"}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                    {typedLocale === "fr" ? "Modules clés" : "Key modules"}
                  </div>

                  <ul className="mt-3 space-y-3">
                    {modules.slice(0, 3).map((item) => (
                      <li
                        key={item.title}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <div className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                    {typedLocale === "fr" ? "Livrables clés" : "Key deliverables"}
                  </div>

                  <ul className="mt-3 space-y-3">
                    {deliverables.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/learning-paths/${path.slug}`}
                  className="mt-6 inline-block text-sm font-medium text-indigo-300"
                >
                  {typedLocale === "fr"
                    ? "Ouvrir le parcours →"
                    : "Open learning path →"}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="container-shell py-20">
          <div className="max-w-3xl">
            <h2 className="section-title text-white">
              {typedLocale === "fr" ? "Tutoriels rapides" : "Quick tutorials"}
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300">
              {typedLocale === "fr"
                ? "Des contenus courts pour apprendre vite et produire des premiers supports utiles."
                : "Short content to learn fast and produce useful first support materials."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {quickTutorials.map((tutorial) => (
              <div
                key={tutorial.title}
                className="glass-card rounded-[28px] p-6"
              >
                <div className="font-ui inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                  {tutorial.category}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {tutorial.title}
                </h3>

                <p className="mt-4 text-sm text-slate-400">
                  {tutorial.duration}
                </p>

                <Link
                  href={tutorial.href}
                  className="mt-6 inline-block text-sm font-medium text-indigo-300"
                >
                  {typedLocale === "fr"
                    ? "Voir le tutoriel →"
                    : "View tutorial →"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}