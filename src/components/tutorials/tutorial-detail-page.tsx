"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getTutorialBySlug } from "@/data/tutorials";
import { getNextModuleByTutorialSlug } from "@/data/learning-paths";
import { TutorialCompleteButton } from "@/components/tutorials/tutorial-complete-button";
import { useLanguage } from "@/providers/language-provider";

export function TutorialDetailPage({ slug }: { slug: string }) {
  const { locale } = useLanguage();
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  const typedLocale = locale === "en" ? "en" : "fr";

  const title = tutorial.title[typedLocale];
  const level = tutorial.level[typedLocale];
  const category = tutorial.category[typedLocale];
  const excerpt = tutorial.excerpt[typedLocale];
  const objectives = tutorial.objectives[typedLocale];
  const deliverables = tutorial.deliverables[typedLocale];
  const quickTips = tutorial.quickTips[typedLocale];
  const recap = tutorial.recap[typedLocale];

  const progression = getNextModuleByTutorialSlug(slug, typedLocale);

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
              {typedLocale === "fr" ? "Tutoriel détaillé" : "Detailed tutorial"}
            </div>

            <div className="mb-4 flex flex-wrap gap-3">
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                {category}
              </span>
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                {level}
              </span>
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                {tutorial.duration}
              </span>
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                +{tutorial.xp} XP
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
                <Target className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {typedLocale === "fr" ? "Objectifs" : "Objectives"}
                </span>
              </div>

              <ul className="space-y-3">
                {objectives.map((item) => (
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

            {tutorial.sections.map((section, index) => (
              <div key={section.title[typedLocale]} className="glass-card rounded-[30px] p-6">
                <div className="mb-4 flex items-center gap-2 text-indigo-300">
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-ui text-sm uppercase tracking-[0.18em]">
                    {typedLocale === "fr" ? "Contenu" : "Content"} {index + 1}
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  {section.title[typedLocale]}
                </h2>

                <div className="mt-4 space-y-4">
                  {section.paragraphs[typedLocale].map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets ? (
                  <ul className="mt-5 space-y-3">
                    {section.bullets[typedLocale].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <FileText className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {typedLocale === "fr"
                    ? "Livrables à produire"
                    : "Deliverables to produce"}
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
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {typedLocale === "fr" ? "Conseils rapides" : "Quick tips"}
                </span>
              </div>

              <ul className="space-y-3">
                {quickTips.map((item) => (
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
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {typedLocale === "fr" ? "À retenir" : "Key takeaways"}
                </span>
              </div>

              <ul className="space-y-3">
                {recap.map((item) => (
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

            {progression?.nextModule ? (
              <div className="glass-card rounded-[30px] p-6">
                <div className="mb-4 flex items-center gap-2 text-indigo-300">
                  <ArrowRight className="h-5 w-5" />
                  <span className="font-ui text-sm uppercase tracking-[0.18em]">
                    {typedLocale === "fr" ? "Module suivant" : "Next module"}
                  </span>
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  {typedLocale === "fr"
                    ? `Tu viens de terminer le module ${progression.currentIndex + 1} sur ${progression.totalModules}. Passe au suivant pour continuer le parcours.`
                    : `You have just completed module ${progression.currentIndex + 1} of ${progression.totalModules}. Move to the next one to continue the learning path.`}
                </p>

                <Link
                  href={progression.nextModule.href}
                  className="mt-5 inline-flex items-center rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
                >
                  {progression.nextModule.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ) : progression ? (
              <div className="glass-card rounded-[30px] p-6">
                <div className="mb-4 flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-ui text-sm uppercase tracking-[0.18em]">
                    {typedLocale === "fr" ? "Fin du parcours" : "End of path"}
                  </span>
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  {typedLocale === "fr"
                    ? "Tu as atteint le dernier module de ce parcours. Tu peux revenir au parcours détaillé ou continuer avec un autre domaine."
                    : "You reached the last module of this path. You can go back to the detailed path or continue with another domain."}
                </p>

                <Link
                  href={`/learning-paths/${progression.path.slug}`}
                  className="mt-5 inline-flex items-center rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
                >
                  {typedLocale === "fr" ? "Revoir le parcours" : "Review the path"}
                </Link>
              </div>
            ) : null}
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <Clock3 className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {typedLocale === "fr" ? "Progression" : "Progress"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="font-ui text-xs uppercase tracking-[0.18em] text-slate-400">
                    {typedLocale === "fr" ? "Durée estimée" : "Estimated duration"}
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    {tutorial.duration}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="font-ui text-xs uppercase tracking-[0.18em] text-slate-400">
                    XP
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">
                    +{tutorial.xp}
                  </div>
                </div>

                {progression ? (
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                    <div className="font-ui text-xs uppercase tracking-[0.18em] text-slate-400">
                      {typedLocale === "fr" ? "Position dans le parcours" : "Path position"}
                    </div>
                    <div className="mt-2 text-2xl font-semibold text-white">
                      {progression.currentIndex + 1} / {progression.totalModules}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-6">
                <TutorialCompleteButton slug={tutorial.slug} xp={tutorial.xp} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}