"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  BarChart3,
  BrainCircuit,
  Database,
  Scale,
  FileSpreadsheet,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";

type AnswerValue = 0 | 1 | 2 | 3;
type CategoryKey = "governance" | "quality" | "gdpr" | "ai" | "audit";

type Question = {
  id: string;
  category: CategoryKey;
  title: {
    fr: string;
    en: string;
  };
  help: {
    fr: string;
    en: string;
  };
};

const questions: Question[] = [
  {
    id: "governance_roles",
    category: "governance",
    title: {
      fr: "Les rôles Data Owner / Data Steward sont-ils définis ?",
      en: "Are Data Owner / Data Steward roles clearly defined?",
    },
    help: {
      fr: "L’organisation a-t-elle attribué des responsabilités claires sur les données ?",
      en: "Has the organization assigned clear responsibilities over data ownership and stewardship?",
    },
  },
  {
    id: "governance_policies",
    category: "governance",
    title: {
      fr: "Des politiques de gouvernance des données existent-elles ?",
      en: "Are data governance policies formally established?",
    },
    help: {
      fr: "Existe-t-il des règles, principes ou standards internes formalisés ?",
      en: "Are there formal internal rules, principles or governance standards?",
    },
  },
  {
    id: "governance_raci",
    category: "governance",
    title: {
      fr: "Un RACI ou une matrice de responsabilités est-il utilisé ?",
      en: "Is a RACI or responsibility matrix being used?",
    },
    help: {
      fr: "Peut-on visualiser qui décide, qui exécute et qui contrôle ?",
      en: "Can you clearly visualize who decides, who executes and who controls?",
    },
  },
  {
    id: "data_quality_controls",
    category: "quality",
    title: {
      fr: "Des contrôles de qualité de données sont-ils formalisés ?",
      en: "Are data quality controls formally defined?",
    },
    help: {
      fr: "Exemple : complétude, cohérence, validité, fraîcheur, suivi d’anomalies.",
      en: "Examples: completeness, consistency, validity, freshness, issue tracking.",
    },
  },
  {
    id: "data_quality_kpis",
    category: "quality",
    title: {
      fr: "Des KPI ou scorecards de qualité de données sont-ils suivis ?",
      en: "Are data quality KPIs or scorecards being monitored?",
    },
    help: {
      fr: "Les métiers et équipes disposent-ils d’indicateurs lisibles pour piloter la qualité ?",
      en: "Do teams have clear indicators to monitor and manage data quality?",
    },
  },
  {
    id: "data_issue_management",
    category: "quality",
    title: {
      fr: "Les incidents ou anomalies de données sont-ils tracés ?",
      en: "Are data incidents or quality issues tracked?",
    },
    help: {
      fr: "Existe-t-il un mécanisme pour remonter, suivre et clôturer les anomalies ?",
      en: "Is there a process to report, track and close data quality issues?",
    },
  },
  {
    id: "gdpr_records",
    category: "gdpr",
    title: {
      fr: "Le registre de traitements est-il maintenu et exploitable ?",
      en: "Is the record of processing activities maintained and usable?",
    },
    help: {
      fr: "Le registre est-il à jour, accessible et utile pour piloter la conformité ?",
      en: "Is it up to date, accessible and actually useful for compliance steering?",
    },
  },
  {
    id: "privacy_by_design",
    category: "gdpr",
    title: {
      fr: "Le privacy by design est-il intégré aux projets ?",
      en: "Is privacy by design integrated into projects?",
    },
    help: {
      fr: "Les nouveaux cas d’usage prennent-ils en compte la protection des données dès la conception ?",
      en: "Do new use cases include data protection considerations from the design stage?",
    },
  },
  {
    id: "data_subject_rights",
    category: "gdpr",
    title: {
      fr: "Les demandes de droits (accès, suppression, etc.) sont-elles bien gérées ?",
      en: "Are data subject rights requests properly managed?",
    },
    help: {
      fr: "L’organisation sait-elle traiter, tracer et répondre aux demandes des personnes ?",
      en: "Can the organization process, track and respond to individual rights requests?",
    },
  },
  {
    id: "ai_inventory",
    category: "ai",
    title: {
      fr: "Les cas d’usage IA sont-ils inventoriés ?",
      en: "Are AI use cases inventoried?",
    },
    help: {
      fr: "L’entreprise sait-elle quels outils, modèles ou automatisations IA sont utilisés ?",
      en: "Does the company know which AI tools, models or automations are being used?",
    },
  },
  {
    id: "ai_literacy",
    category: "ai",
    title: {
      fr: "Les équipes sont-elles sensibilisées à l’IA et à ses risques ?",
      en: "Are teams aware of AI risks and basic AI literacy expectations?",
    },
    help: {
      fr: "Il s’agit ici de literacy, d’usages encadrés, de compréhension minimale des impacts.",
      en: "This includes AI literacy, controlled usage and minimum understanding of impacts.",
    },
  },
  {
    id: "ai_risk_assessment",
    category: "ai",
    title: {
      fr: "Les risques des systèmes IA sont-ils évalués ?",
      en: "Are AI system risks being assessed?",
    },
    help: {
      fr: "Les cas d’usage font-ils l’objet d’une analyse de risque ou d’un cadrage de criticité ?",
      en: "Are AI use cases reviewed through some kind of risk assessment or criticality framework?",
    },
  },
  {
    id: "audit_evidence",
    category: "audit",
    title: {
      fr: "Les preuves de contrôle sont-elles collectées et structurées ?",
      en: "Is control evidence collected and structured?",
    },
    help: {
      fr: "Peux-tu démontrer qu’un contrôle existe réellement et qu’il fonctionne ?",
      en: "Can you demonstrate that a control really exists and works in practice?",
    },
  },
  {
    id: "maturity_reviews",
    category: "audit",
    title: {
      fr: "Des revues de maturité ou auto-évaluations sont-elles menées ?",
      en: "Are maturity reviews or self-assessments carried out?",
    },
    help: {
      fr: "L’organisation mesure-t-elle régulièrement ses écarts et priorités ?",
      en: "Does the organization regularly assess its gaps and priorities?",
    },
  },
  {
    id: "roadmap",
    category: "audit",
    title: {
      fr: "Une feuille de route formelle existe-t-elle ?",
      en: "Is there a formal roadmap in place?",
    },
    help: {
      fr: "Y a-t-il un plan d’amélioration, des priorités, des responsables et des échéances ?",
      en: "Is there an improvement plan with priorities, owners and timelines?",
    },
  },
];

const answerLabels = {
  fr: {
    0: "Non",
    1: "Partiellement",
    2: "En grande partie",
    3: "Oui",
  },
  en: {
    0: "No",
    1: "Partially",
    2: "Mostly",
    3: "Yes",
  },
} as const;

function getMaturity(score: number, locale: "fr" | "en") {
  if (locale === "fr") {
    if (score < 30) {
      return {
        label: "Initial",
        color: "text-red-300",
        description:
          "La gouvernance est encore peu structurée. Les rôles, contrôles et preuves sont insuffisants.",
      };
    }
    if (score < 60) {
      return {
        label: "En construction",
        color: "text-amber-300",
        description:
          "Des éléments existent, mais l’ensemble manque encore de cohérence, de documentation et de pilotage.",
      };
    }
    if (score < 80) {
      return {
        label: "Structuré",
        color: "text-indigo-300",
        description:
          "La gouvernance commence à être crédible, avec une base exploitable pour l’audit et l’amélioration continue.",
      };
    }
    return {
      label: "Avancé",
      color: "text-emerald-300",
      description:
        "L’organisation dispose d’une gouvernance mature, pilotée et démontrable sur plusieurs axes.",
    };
  }

  if (score < 30) {
    return {
      label: "Initial",
      color: "text-red-300",
      description:
        "Governance is still weakly structured. Roles, controls and evidence are insufficient.",
    };
  }
  if (score < 60) {
    return {
      label: "In progress",
      color: "text-amber-300",
      description:
        "Some foundations exist, but the model still lacks coherence, documentation and steering.",
    };
  }
  if (score < 80) {
    return {
      label: "Structured",
      color: "text-indigo-300",
      description:
        "Governance is becoming credible, with a usable base for audit and continuous improvement.",
    };
  }
  return {
    label: "Advanced",
    color: "text-emerald-300",
    description:
      "The organization has a mature governance model with evidence, steering and control maturity.",
  };
}

function getCategoryLabel(category: CategoryKey, locale: "fr" | "en") {
  const labels = {
    fr: {
      governance: "Gouvernance",
      quality: "Qualité des données",
      gdpr: "RGPD",
      ai: "IA",
      audit: "Audit / Pilotage",
    },
    en: {
      governance: "Governance",
      quality: "Data Quality",
      gdpr: "GDPR",
      ai: "AI",
      audit: "Audit / Steering",
    },
  };

  return labels[locale][category];
}

function getRecommendations(
  answers: Record<string, AnswerValue>,
  locale: "fr" | "en"
) {
  const recos: string[] = [];

  if ((answers.governance_roles ?? 0) <= 1) {
    recos.push(
      locale === "fr"
        ? "Formaliser un RACI Data Governance avec Data Owner, Data Steward et sponsor métier."
        : "Formalize a Data Governance RACI with Data Owner, Data Steward and business sponsor roles."
    );
  }

  if ((answers.governance_policies ?? 0) <= 1) {
    recos.push(
      locale === "fr"
        ? "Créer une politique de gouvernance des données simple, lisible et réellement utilisée."
        : "Create a simple, readable and actually used data governance policy."
    );
  }

  if ((answers.data_quality_controls ?? 0) <= 1 || (answers.data_quality_kpis ?? 0) <= 1) {
    recos.push(
      locale === "fr"
        ? "Définir une scorecard qualité de données avec dimensions, seuils, responsables et suivi."
        : "Define a data quality scorecard with dimensions, thresholds, owners and monitoring."
    );
  }

  if ((answers.gdpr_records ?? 0) <= 1) {
    recos.push(
      locale === "fr"
        ? "Mettre à jour le registre de traitements pour en faire un véritable outil de pilotage."
        : "Update the record of processing activities so it becomes a real steering tool."
    );
  }

  if ((answers.privacy_by_design ?? 0) <= 1) {
    recos.push(
      locale === "fr"
        ? "Créer une checklist privacy by design intégrée aux projets et nouveaux usages."
        : "Create a privacy by design checklist integrated into projects and new use cases."
    );
  }

  if ((answers.ai_inventory ?? 0) <= 1) {
    recos.push(
      locale === "fr"
        ? "Construire un registre des cas d’usage IA avec finalités, responsables et risques."
        : "Build an AI use case register with purposes, owners and risks."
    );
  }

  if ((answers.ai_literacy ?? 0) <= 1 || (answers.ai_risk_assessment ?? 0) <= 1) {
    recos.push(
      locale === "fr"
        ? "Lancer une sensibilisation IA ciblée et une évaluation minimale des risques par cas d’usage."
        : "Launch targeted AI literacy training and minimal risk assessment per use case."
    );
  }

  if ((answers.audit_evidence ?? 0) <= 1 || (answers.maturity_reviews ?? 0) <= 1) {
    recos.push(
      locale === "fr"
        ? "Mettre en place un evidence tracker et une auto-évaluation régulière de maturité."
        : "Set up an evidence tracker and a regular maturity self-assessment routine."
    );
  }

  if ((answers.roadmap ?? 0) <= 1) {
    recos.push(
      locale === "fr"
        ? "Construire une roadmap 90 jours avec priorités, responsables, quick wins et preuves attendues."
        : "Build a 90-day roadmap with priorities, owners, quick wins and expected evidence."
    );
  }

  if (recos.length === 0) {
    recos.push(
      locale === "fr"
        ? "Maintenir les acquis et renforcer la logique de preuve, de suivi et d’amélioration continue."
        : "Maintain current strengths and reinforce evidence collection, tracking and continuous improvement."
    );
  }

  return recos;
}

function getCategoryScores(answers: Record<string, AnswerValue>) {
  const categories: CategoryKey[] = ["governance", "quality", "gdpr", "ai", "audit"];

  return categories.map((category) => {
    const categoryQuestions = questions.filter((q) => q.category === category);
    const total = categoryQuestions.reduce(
      (sum, q) => sum + (answers[q.id] ?? 0),
      0
    );
    const max = categoryQuestions.length * 3;
    const score = Math.round((total / max) * 100);

    return {
      category,
      score,
      count: categoryQuestions.length,
    };
  });
}

function getCategoryIcon(category: CategoryKey) {
  switch (category) {
    case "governance":
      return Database;
    case "quality":
      return FileSpreadsheet;
    case "gdpr":
      return Scale;
    case "ai":
      return BrainCircuit;
    case "audit":
      return BarChart3;
    default:
      return BarChart3;
  }
}

export function AuditSimulatorPage() {
  const { t, locale } = useLanguage();
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});

  const typedLocale = locale === "en" ? "en" : "fr";
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = questions.length;

  const score = useMemo(() => {
    const total = questions.reduce((sum, question) => sum + (answers[question.id] ?? 0), 0);
    const max = questions.length * 3;
    return Math.round((total / max) * 100);
  }, [answers]);

  const maturity = getMaturity(score, typedLocale);
  const recommendations = getRecommendations(answers, typedLocale);
  const categoryScores = getCategoryScores(answers);

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
              {t.auditSimulator.badge}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.auditSimulator.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {t.auditSimulator.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={question.id} className="glass-card rounded-[28px] p-6">
                <div className="font-ui mb-3 text-xs uppercase tracking-[0.18em] text-indigo-300">
                  {getCategoryLabel(question.category, typedLocale)} •{" "}
                  {typedLocale === "fr" ? "Question" : "Question"} {index + 1}
                </div>

                <h2 className="text-xl font-semibold text-white">
                  {question.title[typedLocale]}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {question.help[typedLocale]}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[0, 1, 2, 3].map((value) => {
                    const typedValue = value as AnswerValue;
                    const selected = answers[question.id] === typedValue;

                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() =>
                          setAnswers((prev) => ({
                            ...prev,
                            [question.id]: typedValue,
                          }))
                        }
                        className={[
                          "font-ui rounded-2xl border px-4 py-3 text-sm transition",
                          selected
                            ? "border-indigo-400/40 bg-indigo-500/20 text-white"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10",
                        ].join(" ")}
                      >
                        {answerLabels[typedLocale][typedValue]}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="glass-card rounded-[28px] p-6">
              <div className="flex items-center gap-2 text-indigo-300">
                <TrendingUp className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {t.auditSimulator.result}
                </span>
              </div>

              <div className="mt-6">
                <p className="font-ui text-sm text-slate-400">
                  {t.auditSimulator.progress}
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {answeredCount} / {totalQuestions}
                </p>
              </div>

              <div className="mt-6">
                <p className="font-ui text-sm text-slate-400">
                  {t.auditSimulator.globalScore}
                </p>
                <p className="mt-2 text-5xl font-semibold text-white">{score}%</p>
              </div>

              <div className="mt-6">
                <p className="font-ui text-sm text-slate-400">
                  {t.auditSimulator.maturity}
                </p>
                <p className={`mt-2 text-2xl font-semibold ${maturity.color}`}>
                  {maturity.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {maturity.description}
                </p>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-6">
              <div className="flex items-center gap-2 text-indigo-300">
                <BarChart3 className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {typedLocale === "fr" ? "Scores par domaine" : "Scores by domain"}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {categoryScores.map((item) => {
                  const Icon = getCategoryIcon(item.category);

                  return (
                    <div key={item.category}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Icon className="h-4 w-4 text-indigo-300" />
                          <span className="font-ui text-sm">
                            {getCategoryLabel(item.category, typedLocale)}
                          </span>
                        </div>
                        <span className="font-ui text-sm text-slate-400">
                          {item.score}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-6">
              <div className="flex items-center gap-2 text-indigo-300">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {t.auditSimulator.recommendations}
                </span>
              </div>

              <ul className="mt-6 space-y-4">
                {recommendations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-[28px] p-6">
              <div className="flex items-center gap-2 text-indigo-300">
                <Target className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {t.auditSimulator.nextStep}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {typedLocale === "fr"
                  ? "Cette V1 peut évoluer vers un mini produit SaaS avec historique, scoring détaillé, export PDF, profils d’évaluation et plan d’action téléchargeable."
                  : "This V1 can evolve into a mini SaaS product with history, detailed scoring, PDF export, assessment profiles and downloadable action plans."}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button className="rounded-2xl bg-indigo-500 text-white hover:bg-indigo-400">
                  {t.auditSimulator.generatePlan}
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  {t.auditSimulator.relatedTemplates}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}