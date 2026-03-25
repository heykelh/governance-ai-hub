"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  BarChart3,
  BookOpen,
  Layers3,
  PlayCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/providers/language-provider";

const metricsFr = [
  { label: "Gouvernance Data", value: "72%" },
  { label: "Maturité RGPD", value: "68%" },
  { label: "Préparation AI Act", value: "41%" },
  { label: "Qualité des données", value: "59%" },
];

const metricsEn = [
  { label: "Data Governance", value: "72%" },
  { label: "GDPR Maturity", value: "68%" },
  { label: "AI Act Readiness", value: "41%" },
  { label: "Data Quality", value: "59%" },
];

const resourcesFr = [
  "RACI Gouvernance",
  "Registre des usages IA",
  "Scorecard Data Quality",
];

const resourcesEn = [
  "Governance RACI",
  "AI Use Case Register",
  "Data Quality Scorecard",
];

export function HomeHero() {
  const { locale, t } = useLanguage();

  const metrics = locale === "fr" ? metricsFr : metricsEn;
  const resources = locale === "fr" ? resourcesFr : resourcesEn;

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(129,140,248,0.14),transparent_26%)]" />

      <div className="container-shell relative grid gap-14 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="font-ui mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
            <Sparkles className="h-4 w-4" />
            {t.home.badge}
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.home.titleA}{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-white to-indigo-200 bg-clip-text text-transparent">
              {t.home.titleB}
            </span>{" "}
            {t.home.titleC}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {t.home.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-2xl bg-indigo-500 text-white hover:bg-indigo-400"
            >
              <Link href="/learn">
                {t.home.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="#">{t.home.ctaSecondary}</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.home.valuePoints.map((item) => (
              <div key={item} className="font-ui flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-indigo-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {t.home.quickLinks.map((item) => (
              <span
                key={item}
                className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex items-center">
          <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl lg:block" />
          <div className="absolute bottom-0 right-0 hidden h-40 w-40 rounded-full bg-violet-500/10 blur-3xl lg:block" />

          <div className="relative grid w-full gap-4">
            <Card className="glass-card rounded-[30px] text-white indigo-ring">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base text-white">
                  {locale === "fr" ? "Snapshot de maturité" : "Maturity snapshot"}
                </CardTitle>
                <ShieldCheck className="h-5 w-5 text-indigo-300" />
              </CardHeader>

              <CardContent className="grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="font-ui text-sm text-slate-400">{metric.label}</p>
                    <p className="mt-2 text-3xl font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card rounded-[30px] text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base text-white">
                  <PlayCircle className="h-4 w-4 text-indigo-300" />
                  {locale === "fr" ? "Parcours recommandé" : "Recommended path"}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-indigo-500/20 via-white/5 to-transparent p-5">
                  <div className="font-ui mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-indigo-200">
                    <span>{locale === "fr" ? "Parcours" : "Path"}</span>
                    <span>{locale === "fr" ? "Avancé" : "Advanced"}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {locale === "fr"
                      ? "Réaliser un audit Data & IA"
                      : "Run a Data & AI Audit"}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {locale === "fr"
                      ? "Apprends à cadrer un audit, collecter des preuves, évaluer la maturité et construire une roadmap."
                      : "Learn how to scope an audit, collect evidence, assess maturity and build a roadmap."}
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {(locale === "fr"
                      ? [
                          ["8", "Modules"],
                          ["3h", "Durée"],
                          ["Pro", "Niveau"],
                        ]
                      : [
                          ["8", "Modules"],
                          ["3h", "Study"],
                          ["Pro", "Level"],
                        ]
                    ).map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
                      >
                        <div className="text-lg font-semibold text-white">{value}</div>
                        <div className="font-ui text-xs text-slate-400">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card rounded-[30px] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-white">
                  <Layers3 className="h-4 w-4 text-indigo-300" />
                  {locale === "fr" ? "Livrables clés" : "Key deliverables"}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 text-sm text-slate-300">
                {resources.map((item) => (
                  <div
                    key={item}
                    className="font-ui flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <FileCheck2 className="h-4 w-4 text-indigo-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card rounded-[30px] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-white">
                  <BarChart3 className="h-4 w-4 text-indigo-300" />
                  {locale === "fr" ? "Analyse récente" : "Recent insight"}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/8 to-indigo-500/10 p-4">
                  <div className="mb-2 flex items-center gap-1 text-amber-300">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>

                  <p className="font-ui text-sm text-slate-400">
                    {locale === "fr" ? "Article recommandé" : "Featured article"}
                  </p>

                  <p className="mt-2 text-base font-medium text-white">
                    {locale === "fr"
                      ? "Ce que les entreprises ratent sur la gouvernance IA"
                      : "What companies get wrong about AI governance"}
                  </p>

                  <p className="mt-2 text-sm text-slate-300">
                    {locale === "fr"
                      ? "Une analyse des écarts fréquents entre usage réel de l’IA et structuration des contrôles et responsabilités."
                      : "A practical view on the gap between real AI usage and structured controls and responsibilities."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}