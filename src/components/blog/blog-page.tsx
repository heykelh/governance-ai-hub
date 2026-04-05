"use client";

import { FileText, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { useLanguage } from "@/providers/language-provider";

export function BlogPage() {
  const { locale } = useLanguage();

  const posts =
    locale === "fr"
      ? [
          {
            title: "Pourquoi la Data Governance devient stratégique",
            excerpt:
              "Un angle simple pour expliquer pourquoi la gouvernance des données devient centrale dans les entreprises.",
          },
          {
            title: "RGPD, gouvernance et preuve",
            excerpt:
              "Comment relier conformité, documentation et logique de pilotage dans une organisation.",
          },
          {
            title: "L’AI Act et les nouveaux enjeux de gouvernance",
            excerpt:
              "Une première lecture des impacts de l’AI Act sur les entreprises et leurs usages IA.",
          },
        ]
      : [
          {
            title: "Why Data Governance is becoming strategic",
            excerpt:
              "A simple angle to explain why data governance is becoming central in companies.",
          },
          {
            title: "GDPR, governance and evidence",
            excerpt:
              "How to connect compliance, documentation and steering logic in an organization.",
          },
          {
            title: "The AI Act and new governance challenges",
            excerpt:
              "A first reading of how the AI Act impacts companies and their AI use cases.",
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
              Blog
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {locale === "fr" ? "Blog" : "Blog"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {locale === "fr"
                ? "Articles autour de la Data Governance, du RGPD et de l’IA."
                : "Articles about Data Governance, GDPR and AI."}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="glass-card rounded-[28px] p-6">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                Blog
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                {post.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {post.excerpt}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-300">
                <FileText className="h-4 w-4" />
                {locale === "fr"
                  ? "Tu pourras ajouter ici tes futurs articles"
                  : "You can add your future articles here"}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}