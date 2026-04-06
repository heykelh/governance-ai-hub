"use client";

import Link from "next/link";
import {
  Eye,
  Download,
  FileText,
  FolderKanban,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { documents } from "@/data/documents";
import { useLanguage } from "@/providers/language-provider";

export function DocumentsPage() {
  const { locale } = useLanguage();
  const typedLocale = locale === "en" ? "en" : "fr";

  const categories =
    typedLocale === "fr"
      ? [
          {
            key: "Audit",
            title: "Audit",
            icon: ShieldCheck,
            description:
              "Des supports pour cadrer un audit, collecter de la preuve et faire ressortir des écarts.",
          },
          {
            key: "Gouvernance",
            title: "Gouvernance",
            icon: FolderKanban,
            description:
              "Des documents pour structurer rôles, principes, comités et cadre de gouvernance.",
          },
          {
            key: "Qualité",
            title: "Qualité",
            icon: SlidersHorizontal,
            description:
              "Des modèles pour formaliser règles, scorecards et suivi des anomalies.",
          },
          {
            key: "IA",
            title: "IA",
            icon: Sparkles,
            description:
              "Des supports pour inventaire des usages IA, risques et préparation documentaire.",
          },
        ]
      : [
          {
            key: "Audit",
            title: "Audit",
            icon: ShieldCheck,
            description:
              "Supports to frame an audit, collect evidence and surface the main gaps.",
          },
          {
            key: "Governance",
            title: "Governance",
            icon: FolderKanban,
            description:
              "Documents to structure roles, principles, committees and the governance framework.",
          },
          {
            key: "Quality",
            title: "Quality",
            icon: SlidersHorizontal,
            description:
              "Templates to formalize rules, scorecards and issue tracking.",
          },
          {
            key: "AI",
            title: "AI",
            icon: Sparkles,
            description:
              "Supports for AI use case inventory, risks and documentation readiness.",
          },
        ];

  const groupedDocs = categories.map((category) => ({
    ...category,
    items: documents.filter((doc) => doc.category[typedLocale] === category.key),
  }));

  return (
    <main className="min-h-screen text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(129,140,248,0.14),transparent_26%)]" />

        <div className="container-shell relative py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="font-ui mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
              <FileText className="h-4 w-4" />
              {typedLocale === "fr" ? "Documents" : "Documents"}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {typedLocale === "fr"
                ? "Documents, modèles et livrables"
                : "Documents, templates and deliverables"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {typedLocale === "fr"
                ? "Une bibliothèque simple pour centraliser les supports les plus utiles en Data Governance, RGPD, qualité des données et gouvernance IA."
                : "A simple library to centralize the most useful supports in Data Governance, GDPR, data quality and AI governance."}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-6 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div key={category.key} className="glass-card rounded-[28px] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="space-y-10">
          {groupedDocs.map((group) => {
            const Icon = group.icon;

            return (
              <section key={group.key}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {group.title}
                    </h2>
                    <p className="text-sm text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {group.items.map((doc) => (
                    <article
                      key={doc.slug}
                      className="glass-card rounded-[28px] p-6"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                          {doc.category[typedLocale]}
                        </span>
                        <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                          {doc.level[typedLocale]}
                        </span>
                        <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                          {doc.format}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold text-white">
                        {doc.title[typedLocale]}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {doc.excerpt[typedLocale]}
                      </p>

                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="font-ui text-xs uppercase tracking-[0.18em] text-slate-400">
                          {typedLocale === "fr" ? "Quand l’utiliser" : "When to use it"}
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {doc.useCase[typedLocale]}
                        </p>
                      </div>

                      <div className="mt-5">
                        <div className="font-ui text-xs uppercase tracking-[0.18em] text-slate-400">
                          {typedLocale === "fr" ? "Contenu" : "Includes"}
                        </div>

                        <ul className="mt-3 space-y-2">
                          {doc.includes[typedLocale].map((item) => (
                            <li key={item} className="text-sm text-slate-300">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          href={`/documents/${doc.slug}`}
                          className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                          {typedLocale === "fr" ? "Détail" : "Details"}
                        </Link>

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
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}