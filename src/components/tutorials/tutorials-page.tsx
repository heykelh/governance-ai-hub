"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { tutorials } from "@/data/tutorials";
import { useLanguage } from "@/providers/language-provider";

export function TutorialsPage() {
  const { locale } = useLanguage();

  return (
    <main className="min-h-screen text-foreground">
      <SiteHeader />

      <section className="container-shell py-20">
        <div className="max-w-3xl">
          <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            {locale === "fr" ? "Tutoriels" : "Tutorials"}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white">
            {locale === "fr"
              ? "Tutoriels réservés aux membres"
              : "Member-only tutorials"}
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            {locale === "fr"
              ? "Des guides pratiques pour progresser vite, produire des livrables et devenir plus crédible en gouvernance data, RGPD et IA."
              : "Practical guides to progress faster, produce deliverables and become more credible in data, GDPR and AI governance."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.slug}
              href={`/tutorials/${tutorial.slug}`}
              className="glass-card rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="font-ui inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                {tutorial.level[locale]}
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                {tutorial.title[locale]}
              </h2>
              <p className="mt-4 text-slate-300">{tutorial.excerpt[locale]}</p>
              <div className="mt-4 text-sm text-slate-400">
                {tutorial.duration} • +{tutorial.xp} XP
              </div>
              <div className="mt-6 text-sm font-medium text-indigo-300">
                {locale === "fr" ? "Voir le tutoriel →" : "View tutorial →"}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}