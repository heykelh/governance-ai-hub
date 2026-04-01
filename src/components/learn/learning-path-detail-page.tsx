"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  FileText,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getLearningPathBySlug } from "@/data/learning-paths";
import { useLanguage } from "@/providers/language-provider";

export function LearningPathDetailPage({ slug }: { slug: string }) {
  const { locale } = useLanguage();
  const path = getLearningPathBySlug(slug);

  if (!path) notFound();

  const title = path.title[locale];
  const level = path.level[locale];
  const excerpt = path.excerpt[locale];
  const intro = path.intro[locale];
  const outcomes = path.outcomes[locale];
  const modules = path.modules[locale];
  const deliverables = path.deliverables[locale];
  const keyTakeaways = path.keyTakeaways[locale];

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
              {locale === "fr" ? "Parcours détaillé" : "Detailed learning path"}
            </div>

            <div className="mb-4 flex flex-wrap gap-3">
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                {level}
              </span>
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                {path.duration}
              </span>
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                +{path.xp} XP
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <FileText className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Introduction" : "Introduction"}
                </span>
              </div>

              <div className="space-y-4 text-sm leading-7 text-slate-300">
                {intro.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <Target className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Résultats visés" : "Expected outcomes"}
                </span>
              </div>

              <ul className="space-y-3">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <GraduationCap className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Modules du parcours" : "Path modules"}
                </span>
              </div>

              <div className="space-y-5">
                {modules.map((module, index) => (
                  <Link
                    key={module.title}
                    href={module.href}
                    className="block rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    <div className="font-ui mb-3 text-xs uppercase tracking-[0.18em] text-indigo-300">
                      {locale === "fr" ? "Module" : "Module"} {index + 1}
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {module.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {module.description}
                    </p>

                    <ul className="mt-4 space-y-3">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 text-sm font-medium text-indigo-300">
                      {locale === "fr"
                        ? "Voir le contenu détaillé du module →"
                        : "View full module content →"}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <FileText className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Livrables finaux" : "Final deliverables"}
                </span>
              </div>

              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <Lightbulb className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em] text-indigo-300">
                  {locale === "fr" ? "À retenir" : "Key takeaways"}
                </span>
              </div>

              <ul className="space-y-3">
                {keyTakeaways.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="glass-card rounded-[30px] p-6">
              <div className="font-ui text-sm uppercase tracking-[0.18em] text-indigo-300">
                {locale === "fr" ? "Accès direct aux modules" : "Direct access to modules"}
              </div>

              <div className="mt-4 space-y-3">
                {modules.map((module, index) => (
                  <Link
                    key={module.title}
                    href={module.href}
                    className="block rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <div className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                      {locale === "fr" ? "Module" : "Module"} {index + 1}
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      {module.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[30px] p-6">
              <div className="font-ui text-sm uppercase tracking-[0.18em] text-indigo-300">
                {locale === "fr" ? "Conseil d’apprentissage" : "Learning advice"}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {locale === "fr"
                  ? "Pour vraiment progresser, ouvre chaque module et produis un mini livrable à la fin : définition, schéma, RACI, scorecard ou roadmap."
                  : "To really improve, open each module and produce one mini deliverable at the end: definition, diagram, RACI, scorecard or roadmap."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}