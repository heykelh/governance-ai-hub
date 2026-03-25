"use client";

import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LearningGamificationPanel } from "@/components/learn/learning-gamification-panel";
import { useLanguage } from "@/providers/language-provider";

export function LearnPage() {
  const { locale, t } = useLanguage();

  const parcours =
    locale === "fr"
      ? [
          {
            titre: "Parcours fondamental : comprendre la gouvernance data",
            niveau: "Débutant",
            duree: "2h30",
            description:
              "Comprendre les rôles, la qualité de données, les politiques, les responsabilités et le pilotage.",
            modules: [
              "Qu’est-ce que la Data Governance ?",
              "Data Owner vs Data Steward",
              "Dimensions de qualité de données",
              "RACI et gouvernance opérationnelle",
            ],
          },
          {
            titre: "Parcours RGPD opérationnel",
            niveau: "Intermédiaire",
            duree: "3h00",
            description:
              "Passer d’une vision théorique du RGPD à une capacité réelle de cadrage, de preuve et de conformité opérationnelle.",
            modules: [
              "Registre de traitements",
              "Bases légales et accountability",
              "Privacy by design",
              "Documentation et contrôles",
            ],
          },
          {
            titre: "Parcours AI Act & gouvernance IA",
            niveau: "Intermédiaire / Avancé",
            duree: "3h30",
            description:
              "Structurer l’inventaire des cas d’usage IA, la préparation documentaire et les logiques de readiness.",
            modules: [
              "Cartographier les usages IA",
              "AI literacy",
              "AI Act readiness",
              "Gouvernance des risques IA",
            ],
          },
        ]
      : [
          {
            titre: "Foundations: understanding data governance",
            niveau: "Beginner",
            duree: "2h30",
            description:
              "Understand roles, data quality, policies, responsibilities and governance steering.",
            modules: [
              "What is Data Governance?",
              "Data Owner vs Data Steward",
              "Data quality dimensions",
              "RACI and operational governance",
            ],
          },
          {
            titre: "Operational GDPR path",
            niveau: "Intermediate",
            duree: "3h00",
            description:
              "Move from a theoretical GDPR understanding to a real operational compliance capability.",
            modules: [
              "Records of processing",
              "Legal bases and accountability",
              "Privacy by design",
              "Documentation and controls",
            ],
          },
          {
            titre: "AI Act & AI Governance path",
            niveau: "Intermediate / Advanced",
            duree: "3h30",
            description:
              "Structure AI use case inventory, documentation readiness and governance logic.",
            modules: [
              "Map AI use cases",
              "AI literacy",
              "AI Act readiness",
              "AI risk governance",
            ],
          },
        ];

  const tutoriels =
    locale === "fr"
      ? [
          {
            titre: "Tutoriel : construire un RACI de gouvernance data",
            type: "Tutoriel pratique",
            resume:
              "Un guide pas à pas pour définir les rôles Data Owner, Steward, Sponsor et équipes support.",
          },
          {
            titre: "Tutoriel : lancer un mini audit RGPD en PME",
            type: "Tutoriel pratique",
            resume:
              "Comment cadrer le périmètre, collecter les preuves, noter les écarts et sortir un plan d’action.",
          },
          {
            titre: "Tutoriel : créer un registre des cas d’usage IA",
            type: "Tutoriel pratique",
            resume:
              "Un modèle de base pour inventorier les systèmes, les finalités, les risques et les responsables.",
          },
          {
            titre: "Tutoriel : bâtir une scorecard qualité de données",
            type: "Tutoriel pratique",
            resume:
              "Définir les dimensions, les contrôles, les seuils et un suivi simple à présenter aux métiers.",
          },
        ]
      : [
          {
            titre: "Tutorial: build a data governance RACI",
            type: "Practical tutorial",
            resume:
              "A step-by-step guide to define Data Owner, Steward, Sponsor and support roles.",
          },
          {
            titre: "Tutorial: run a lightweight GDPR audit in an SME",
            type: "Practical tutorial",
            resume:
              "How to scope, collect evidence, note gaps and produce an action plan.",
          },
          {
            titre: "Tutorial: build an AI use case register",
            type: "Practical tutorial",
            resume:
              "A starter model to inventory systems, purposes, risks and owners.",
          },
          {
            titre: "Tutorial: build a data quality scorecard",
            type: "Practical tutorial",
            resume:
              "Define dimensions, controls, thresholds and a simple business-facing tracker.",
          },
        ];

  const methodes =
    locale === "fr"
      ? [
          {
            titre: "Apprendre les fondamentaux",
            texte:
              "Commence par les concepts structurants : rôles, ownership, qualité de données, obligations RGPD, gouvernance IA.",
            icon: BookOpen,
          },
          {
            titre: "Produire des livrables",
            texte:
              "Transforme chaque apprentissage en preuve concrète : RACI, checklists, scorecards, registres, roadmaps.",
            icon: FileText,
          },
          {
            titre: "Passer en logique audit",
            texte:
              "Apprends à poser les bonnes questions, collecter les éléments de preuve et formuler des recommandations.",
            icon: ShieldCheck,
          },
          {
            titre: "Se rendre vendable",
            texte:
              "Lie toujours les sujets réglementaires à des enjeux métiers, de qualité, de risque et de transformation.",
            icon: Target,
          },
        ]
      : [
          {
            titre: "Learn the fundamentals",
            texte:
              "Start with the structuring concepts: roles, ownership, data quality, GDPR obligations and AI governance.",
            icon: BookOpen,
          },
          {
            titre: "Produce deliverables",
            texte:
              "Turn every lesson into something concrete: RACI, checklists, scorecards, registers and roadmaps.",
            icon: FileText,
          },
          {
            titre: "Think like an auditor",
            texte:
              "Learn to ask the right questions, collect evidence and formulate recommendations.",
            icon: ShieldCheck,
          },
          {
            titre: "Become marketable",
            texte:
              "Always connect regulation to business value, quality, risk and transformation.",
            icon: Target,
          },
        ];

  const tips =
    locale === "fr"
      ? [
          {
            titre: "1. Étudie un domaine à la fois",
            texte:
              "Commence par Data Governance ou RGPD, puis monte progressivement vers l’AI Act et l’audit.",
          },
          {
            titre: "2. Produis un livrable à chaque étape",
            texte:
              "Après un module, crée un RACI, une checklist, un registre ou une mini-roadmap.",
          },
          {
            titre: "3. Réécris avec un angle business",
            texte:
              "Sois toujours capable d’expliquer à quoi sert le contrôle, le document ou la gouvernance.",
          },
        ]
      : [
          {
            titre: "1. Study one domain at a time",
            texte:
              "Start with Data Governance or GDPR, then move gradually toward AI Act and audit.",
          },
          {
            titre: "2. Produce one deliverable at each step",
            texte:
              "After each module, create a RACI, checklist, register or mini-roadmap.",
          },
          {
            titre: "3. Reframe everything in business terms",
            texte:
              "Always be able to explain what the control, document or governance mechanism is for.",
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
              {t.learnPage.badge}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.learnPage.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {t.learnPage.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#parcours"
                className="rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
              >
                {t.learnPage.ctaPaths}
              </Link>
              <Link
                href="#tutoriels"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.learnPage.ctaTutorials}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LearningGamificationPanel />

      <section className="container-shell py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            {t.learnPage.sectionMethod}
          </p>
          <h2 className="section-title mt-4 text-white">
            {t.learnPage.sectionMethodTitle}
          </h2>
          <p className="section-copy mx-auto text-slate-300">
            {t.learnPage.sectionMethodText}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {methodes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.titre}
                className="glass-card rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">
                  <Icon className="h-5 w-5 text-indigo-300" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.titre}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.texte}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="parcours" className="border-y border-white/10 bg-white/[0.03]">
        <div className="container-shell py-20">
          <div className="max-w-3xl">
            <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
              {t.learnPage.sectionPaths}
            </p>
            <h2 className="section-title mt-4 text-white">
              {t.learnPage.sectionPathsTitle}
            </h2>
            <p className="section-copy text-slate-300">
              {t.learnPage.sectionPathsText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {parcours.map((parcours) => (
              <div
                key={parcours.titre}
                className="glass-card rounded-[30px] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="font-ui flex items-center justify-between gap-3 text-sm text-slate-400">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {parcours.niveau}
                  </span>
                  <span>{parcours.duree}</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {parcours.titre}
                </h3>

                <p className="mt-4 text-slate-300">{parcours.description}</p>

                <div className="mt-6">
                  <p className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
                    {locale === "fr" ? "Modules inclus" : "Included modules"}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {parcours.modules.map((module) => (
                      <li
                        key={module}
                        className="font-ui flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="#"
                  className="mt-6 inline-block text-sm font-medium text-indigo-300"
                >
                  {locale === "fr" ? "Ouvrir le parcours →" : "Open path →"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tutoriels" className="container-shell py-20">
        <div className="max-w-3xl">
          <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            {t.learnPage.sectionTutorials}
          </p>
          <h2 className="section-title mt-4 text-white">
            {t.learnPage.sectionTutorialsTitle}
          </h2>
          <p className="section-copy text-slate-300">
            {t.learnPage.sectionTutorialsText}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tutoriels.map((tuto) => (
            <div
              key={tuto.titre}
              className="glass-card rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="font-ui inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                {tuto.type}
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {tuto.titre}
              </h3>
              <p className="mt-4 text-slate-300">{tuto.resume}</p>

              <Link
                href="#"
                className="mt-6 inline-block text-sm font-medium text-indigo-300"
              >
                {locale === "fr" ? "Voir le tutoriel →" : "View tutorial →"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="container-shell py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
              {t.learnPage.sectionTips}
            </p>
            <h2 className="section-title mt-4 text-white">
              {t.learnPage.sectionTipsTitle}
            </h2>
            <p className="section-copy mx-auto text-slate-300">
              {t.learnPage.sectionTipsText}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tips.map((item) => (
              <div key={item.titre} className="glass-card rounded-[28px] p-6">
                <h3 className="text-xl font-semibold text-white">{item.titre}</h3>
                <p className="mt-4 text-slate-300">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}