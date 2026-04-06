"use client";

import Link from "next/link";
import { Globe, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HomeHero } from "@/components/home/home-hero";
import { useLanguage } from "@/providers/language-provider";

export function HomePage() {
  const { locale } = useLanguage();

  return (
    <main className="min-h-screen text-foreground">
      <SiteHeader />

      <HomeHero />

      <section className="container-shell py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="font-ui inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
            <Sparkles className="h-4 w-4" />
            {locale === "fr" ? "Pourquoi GOV-AI-HUB" : "Why GOV-AI-HUB"}
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {locale === "fr"
              ? "Un site simple pour apprendre la Data Governance, le RGPD et l’IA"
              : "A simple site to learn Data Governance, GDPR and AI"}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {locale === "fr"
              ? "GOV-AI-HUB a été conçu comme une plateforme claire et efficace pour apprendre les fondamentaux de la gouvernance des données, du RGPD et de l’AI Act. L’objectif est d’aller à l’essentiel : comprendre les concepts, suivre des parcours structurés, consulter des documents utiles et progresser avec une logique concrète."
              : "GOV-AI-HUB was designed as a clear and effective platform to learn the fundamentals of Data Governance, GDPR and the AI Act. The goal is to focus on what matters: understanding concepts, following structured learning paths, using helpful documents and progressing through practical learning."}
          </p>
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="glass-card mx-auto max-w-5xl rounded-[32px] p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
                About the founder
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Heykel HACHICHE
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/heykelh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-300 transition hover:bg-white/10 hover:text-indigo-200"
                >
                  <Globe className="h-4 w-4" />
                  github.com/heykelh
                </a>

                <a
                  href="https://www.linkedin.com/in/heykel-hachiche/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-300 transition hover:bg-white/10 hover:text-indigo-200"
                >
                  <Globe className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-5 text-slate-300">
              <p className="leading-7">
                {locale === "fr"
                  ? "Je m’appelle Heykel et j’ai créé GOV-AI-HUB pour construire une plateforme simple, sérieuse et utile autour de la Data Governance, du RGPD et de l’AI Act. Mon objectif est de rendre ces sujets plus accessibles, plus concrets et plus orientés livrables."
                  : "My name is Heykel and I created GOV-AI-HUB to build a simple, serious and useful platform around Data Governance, GDPR and the AI Act. My goal is to make these topics more accessible, more concrete and more deliverable-oriented."}
              </p>

              <p className="leading-7">
                {locale === "fr"
                  ? "À travers ce projet, je veux réunir l’apprentissage, la structuration des concepts, les documents utiles et une vraie logique de progression. L’idée n’est pas seulement de lire des définitions, mais de développer une compréhension crédible et directement exploitable dans un contexte professionnel."
                  : "Through this project, I want to bring together learning, structured concepts, useful documents and a real sense of progression. The idea is not only to read definitions, but to build a credible understanding that can be used directly in a professional environment."}
              </p>

              <p className="leading-7">
                {locale === "fr"
                  ? "Ce site reflète mon parcours, mon intérêt pour la gouvernance des données, la conformité et l’IA, ainsi que ma volonté de construire des ressources réellement utiles pour apprendre, pratiquer et démontrer des compétences solides."
                  : "This site reflects my journey, my interest in data governance, compliance and AI, and my desire to build resources that are genuinely useful for learning, practicing and demonstrating strong skills."}
              </p>

              <div className="pt-2">
                <Link
                  href="/learn"
                  className="inline-flex rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
                >
                  {locale === "fr" ? "Commencer à apprendre" : "Start learning"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}