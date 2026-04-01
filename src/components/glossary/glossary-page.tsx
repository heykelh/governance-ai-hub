"use client";

import { useMemo, useState } from "react";
import { BookOpen, Search, Sparkles, Tag } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  getCategoryLabel,
  glossaryEntries,
  type GlossaryCategory,
} from "@/data/glossary";
import { useLanguage } from "@/providers/language-provider";

const categories: GlossaryCategory[] = [
  "data-governance",
  "data-management",
  "data-quality",
  "bi-analytics",
  "privacy-gdpr",
  "ai-governance",
];

export function GlossaryPage() {
  const { locale } = useLanguage();
  const typedLocale = locale === "en" ? "en" : "fr";

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<GlossaryCategory | "all">("all");

  const filteredEntries = useMemo(() => {
    return glossaryEntries.filter((entry) => {
      const matchesCategory =
        selectedCategory === "all" || entry.category === selectedCategory;

      const searchableText = [
        entry.term[typedLocale],
        entry.shortDefinition[typedLocale],
        entry.detailedDefinition[typedLocale],
        entry.whyItMatters[typedLocale],
        entry.example[typedLocale],
        ...entry.relatedTerms,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = searchableText.includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory, typedLocale]);

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
              {typedLocale === "fr" ? "Glossaire" : "Glossary"}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {typedLocale === "fr"
                ? "Le glossaire expert Data, Gouvernance, RGPD & IA"
                : "The expert glossary for Data, Governance, GDPR & AI"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {typedLocale === "fr"
                ? "Un référentiel bilingue pour comprendre les concepts, acronymes, définitions et termes clés du milieu data, de la gouvernance, de la conformité et de l’IA."
                : "A bilingual reference to understand key concepts, acronyms, definitions and terminology across data, governance, compliance and AI."}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-12">
        <div className="glass-card rounded-[30px] p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  typedLocale === "fr"
                    ? "Rechercher un terme, une définition, un acronyme..."
                    : "Search for a term, definition, acronym..."
                }
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 pl-11 pr-4 text-white outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`rounded-full px-4 py-2 text-sm ${
                  selectedCategory === "all"
                    ? "bg-indigo-500 text-white"
                    : "border border-white/10 bg-white/5 text-slate-300"
                }`}
              >
                {typedLocale === "fr" ? "Tout" : "All"}
              </button>

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm ${
                    selectedCategory === category
                      ? "bg-indigo-500 text-white"
                      : "border border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  {getCategoryLabel(category, typedLocale)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {filteredEntries.map((entry) => (
            <article key={entry.slug} className="glass-card rounded-[30px] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                  <Tag className="h-3.5 w-3.5" />
                  {getCategoryLabel(entry.category, typedLocale)}
                </div>
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                {entry.term[typedLocale]}
              </h2>

              <p className="mt-3 text-base text-slate-200">
                {entry.shortDefinition[typedLocale]}
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                    {typedLocale === "fr" ? "Définition détaillée" : "Detailed definition"}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {entry.detailedDefinition[typedLocale]}
                  </p>
                </div>

                <div>
                  <h3 className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                    {typedLocale === "fr" ? "Pourquoi c’est important" : "Why it matters"}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {entry.whyItMatters[typedLocale]}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                  {typedLocale === "fr" ? "Exemple concret" : "Concrete example"}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {entry.example[typedLocale]}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                  {typedLocale === "fr" ? "Termes liés" : "Related terms"}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.relatedTerms.map((term) => (
                    <span
                      key={term}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredEntries.length === 0 ? (
          <div className="mt-10 glass-card rounded-[30px] p-10 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-indigo-300" />
            <p className="mt-4 text-slate-300">
              {typedLocale === "fr"
                ? "Aucun terme ne correspond à cette recherche."
                : "No glossary term matches this search."}
            </p>
          </div>
        ) : null}
      </section>

      <SiteFooter />
    </main>
  );
}