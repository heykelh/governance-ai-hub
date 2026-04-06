"use client";

import Link from "next/link";
import { FileText, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { useLanguage } from "@/providers/language-provider";
import { blogPosts } from "@/data/blog-posts";

export function BlogPage() {
  const { locale } = useLanguage();
  const typedLocale = locale === "en" ? "en" : "fr";

  const featured = blogPosts.filter((post) => post.featured);
  const others = blogPosts.filter((post) => !post.featured);

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
              {typedLocale === "fr" ? "Articles" : "Articles"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {typedLocale === "fr"
                ? "Une sélection d’articles pour suivre les sujets les plus utiles autour de la Data Governance, du RGPD, de l’AI Act et de la gouvernance IA."
                : "A selection of articles to follow the most useful topics around Data Governance, GDPR, the AI Act and AI governance."}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white">
            {typedLocale === "fr" ? "À la une" : "Featured"}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((post) => (
            <article key={post.slug} className="glass-card rounded-[28px] p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                  {post.category[typedLocale]}
                </span>
                <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {post.readTime}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {post.title[typedLocale]}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {post.excerpt[typedLocale]}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-indigo-200"
              >
                <FileText className="h-4 w-4" />
                {typedLocale === "fr" ? "Lire l’article" : "Read article"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white">
            {typedLocale === "fr" ? "Tous les articles" : "All articles"}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {others.map((post) => (
            <article key={post.slug} className="glass-card rounded-[28px] p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                  {post.category[typedLocale]}
                </span>
                <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {post.readTime}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {post.title[typedLocale]}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {post.excerpt[typedLocale]}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:text-indigo-200"
              >
                <FileText className="h-4 w-4" />
                {typedLocale === "fr" ? "Lire l’article" : "Read article"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}