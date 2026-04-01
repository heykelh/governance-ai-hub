"use client";

import { FileText, FolderOpen, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  documentItems,
  getDocumentCategoryLabel,
} from "@/data/documents";
import { useLanguage } from "@/providers/language-provider";

export function DocumentsPage() {
  const { locale } = useLanguage();
  const typedLocale = locale === "en" ? "en" : "fr";

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
              {typedLocale === "fr" ? "Documents" : "Documents"}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {typedLocale === "fr"
                ? "Exemples de livrables, audits et supports de travail"
                : "Examples of deliverables, audits and working documents"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {typedLocale === "fr"
                ? "Une base de documents pour t’aider à produire de vrais livrables : audits, roadmaps, matrices RACI, scorecards qualité, registres IA et supports de preuve."
                : "A base of documents to help you produce real deliverables: audits, roadmaps, RACI matrices, quality scorecards, AI registers and evidence supports."}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {documentItems.map((item) => (
            <article key={item.slug} className="glass-card rounded-[30px] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                  {item.type[typedLocale]}
                </div>
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {getDocumentCategoryLabel(item.category, typedLocale)}
                </div>
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {item.level[typedLocale]}
                </div>
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                {item.title[typedLocale]}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.summary[typedLocale]}
              </p>

              <div className="mt-6">
                <h3 className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                  {typedLocale === "fr" ? "Contient" : "Includes"}
                </h3>

                <ul className="mt-3 space-y-2">
                  {item.includes[typedLocale].map((include) => (
                    <li
                      key={include}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <FileText className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                      <span>{include}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                  {typedLocale === "fr" ? "Quand l’utiliser" : "When to use it"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.usage[typedLocale]}
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-300">
                <FolderOpen className="h-4 w-4" />
                {typedLocale === "fr"
                  ? "Document d’exemple prêt à exploiter"
                  : "Example document ready to use"}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}