"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Eye, FileText, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getDocumentBySlug } from "@/data/documents";
import { useLanguage } from "@/providers/language-provider";

export function DocumentDetailPage({ slug }: { slug: string }) {
  const { locale } = useLanguage();
  const typedLocale = locale === "en" ? "en" : "fr";

  const doc = getDocumentBySlug(slug);

  if (!doc) {
    notFound();
  }

  const title = doc.title[typedLocale];
  const category = doc.category[typedLocale];
  const level = doc.level[typedLocale];
  const excerpt = doc.excerpt[typedLocale];
  const useCase = doc.useCase[typedLocale];
  const includes = doc.includes[typedLocale];

  return (
    <main className="min-h-screen text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(129,140,248,0.14),transparent_26%)]" />

        <div className="container-shell relative py-20 lg:py-24">
          <div className="max-w-4xl">
            <Link
              href="/documents"
              className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {typedLocale === "fr" ? "Retour aux documents" : "Back to documents"}
            </Link>

            <div className="font-ui mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
              <Sparkles className="h-4 w-4" />
              {typedLocale === "fr" ? "Document détaillé" : "Detailed document"}
            </div>

            <div className="mb-4 flex flex-wrap gap-3">
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                {category}
              </span>
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                {level}
              </span>
              <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                {doc.format}
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {doc.viewUrl ? (
                <a
                  href={doc.viewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <Eye className="h-4 w-4" />
                  {typedLocale === "fr" ? "Voir le document" : "View document"}
                </a>
              ) : null}

              {doc.downloadUrl ? (
                <a
                  href={doc.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
                >
                  <Download className="h-4 w-4" />
                  {typedLocale === "fr" ? "Télécharger" : "Download"}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            {doc.sections.map((section) => (
              <div key={section.title[typedLocale]} className="glass-card rounded-[30px] p-6">
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
              </div>
            ))}
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <FileText className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {typedLocale === "fr" ? "Résumé" : "Summary"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="font-ui text-xs uppercase tracking-[0.18em] text-slate-400">
                    {typedLocale === "fr" ? "Usage" : "Use case"}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {useCase}
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="font-ui text-xs uppercase tracking-[0.18em] text-slate-400">
                    {typedLocale === "fr" ? "Contenu" : "Includes"}
                  </div>

                  <ul className="mt-3 space-y-2">
                    {includes.map((item) => (
                      <li key={item} className="text-sm text-slate-300">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {doc.viewUrl ? (
                  <a
                    href={doc.viewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    <Eye className="h-4 w-4" />
                    {typedLocale === "fr" ? "Voir" : "View"}
                  </a>
                ) : null}

                {doc.downloadUrl ? (
                  <a
                    href={doc.downloadUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
                  >
                    <Download className="h-4 w-4" />
                    {typedLocale === "fr" ? "Télécharger" : "Download"}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}