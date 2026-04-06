"use client";

import { BookOpen, Search } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { useLanguage } from "@/providers/language-provider";

type GlossaryItem = {
  term: { fr: string; en: string };
  definition: { fr: string; en: string };
  category: "Data" | "Governance" | "Privacy" | "AI";
};

const glossaryItems: GlossaryItem[] = [
  {
    term: { fr: "Data Governance", en: "Data Governance" },
    definition: {
      fr: "Ensemble des règles, rôles, processus et mécanismes de pilotage permettant de gérer les données de manière fiable, cohérente, sécurisée et utile.",
      en: "The set of rules, roles, processes and steering mechanisms used to manage data in a reliable, consistent, secure and useful way.",
    },
    category: "Governance",
  },
  {
    term: { fr: "Data Quality", en: "Data Quality" },
    definition: {
      fr: "Niveau de fiabilité, de cohérence, de complétude, de validité et d’utilité des données pour un usage donné.",
      en: "The degree to which data is reliable, consistent, complete, valid and useful for a given purpose.",
    },
    category: "Data",
  },
  {
    term: { fr: "Data Steward", en: "Data Steward" },
    definition: {
      fr: "Acteur opérationnel chargé d’animer la qualité, la documentation et les bonnes pratiques autour des données.",
      en: "An operational role responsible for data quality, documentation and good practices around data.",
    },
    category: "Governance",
  },
  {
    term: { fr: "Data Owner", en: "Data Owner" },
    definition: {
      fr: "Responsable métier qui porte la responsabilité d’un périmètre de données et arbitre les usages, règles et priorités.",
      en: "The business owner responsible for a data domain and for deciding on usage, rules and priorities.",
    },
    category: "Governance",
  },
  {
    term: { fr: "Metadata", en: "Metadata" },
    definition: {
      fr: "Informations décrivant d’autres données, par exemple leur définition, leur source, leur format ou leur propriétaire.",
      en: "Information describing other data, such as its definition, source, format or owner.",
    },
    category: "Data",
  },
  {
    term: { fr: "Data Lineage", en: "Data Lineage" },
    definition: {
      fr: "Traçabilité du parcours d’une donnée depuis sa source jusqu’à son usage final, en passant par les transformations éventuelles.",
      en: "Traceability of a piece of data from its source to its final use, including any transformations.",
    },
    category: "Data",
  },
  {
    term: { fr: "Master Data", en: "Master Data" },
    definition: {
      fr: "Données de référence utilisées de manière transversale dans l’organisation, comme les clients, produits ou fournisseurs.",
      en: "Reference data used across the organization, such as customers, products or suppliers.",
    },
    category: "Data",
  },
  {
    term: { fr: "Data Catalog", en: "Data Catalog" },
    definition: {
      fr: "Outil ou référentiel permettant d’inventorier, décrire et rendre trouvables les jeux de données et leurs métadonnées.",
      en: "A tool or repository used to inventory, describe and make datasets and their metadata discoverable.",
    },
    category: "Data",
  },
  {
    term: { fr: "RACI", en: "RACI" },
    definition: {
      fr: "Matrice de responsabilités qui précise qui est Responsible, Accountable, Consulted et Informed pour une activité donnée.",
      en: "A responsibility matrix that clarifies who is Responsible, Accountable, Consulted and Informed for a given activity.",
    },
    category: "Governance",
  },
  {
    term: { fr: "Registre des traitements", en: "Record of Processing Activities" },
    definition: {
      fr: "Document qui recense les traitements de données personnelles, leurs finalités, bases légales, catégories de données, destinataires et mesures clés.",
      en: "A document listing personal data processing activities, their purposes, lawful bases, data categories, recipients and key measures.",
    },
    category: "Privacy",
  },
  {
    term: { fr: "AIPD / PIA", en: "DPIA / PIA" },
    definition: {
      fr: "Analyse d’impact relative à la protection des données destinée à évaluer les risques élevés pour les personnes et les mesures de réduction associées.",
      en: "A data protection impact assessment used to evaluate high risks for individuals and define mitigation measures.",
    },
    category: "Privacy",
  },
  {
    term: { fr: "Accountability", en: "Accountability" },
    definition: {
      fr: "Principe selon lequel une organisation doit être capable de démontrer sa conformité, ses choix et ses mesures de gouvernance.",
      en: "The principle that an organization must be able to demonstrate its compliance, choices and governance measures.",
    },
    category: "Privacy",
  },
  {
    term: { fr: "Data Minimization", en: "Data Minimization" },
    definition: {
      fr: "Principe consistant à ne collecter et utiliser que les données strictement nécessaires à une finalité donnée.",
      en: "The principle of collecting and using only the data strictly necessary for a given purpose.",
    },
    category: "Privacy",
  },
  {
    term: { fr: "Regulatory Compliance", en: "Regulatory Compliance" },
    definition: {
      fr: "Respect des lois, règlements et normes applicables à une organisation, notamment en matière de données et d’IA.",
      en: "Adherence to laws, regulations and standards applicable to an organization, especially regarding data and AI.",
    },
    category: "Privacy",
  },
  {
    term: { fr: "Model Governance", en: "Model Governance" },
    definition: {
      fr: "Ensemble des processus et contrôles permettant de superviser la conception, le déploiement, l’utilisation et la performance des modèles de données ou d’IA.",
      en: "A set of processes and controls to oversee the design, deployment, usage and performance of data or AI models.",
    },
    category: "AI",
  },
  {
    term: { fr: "AI Risk Management", en: "AI Risk Management" },
    definition: {
      fr: "Approche structurée visant à identifier, évaluer et atténuer les risques liés aux systèmes d’intelligence artificielle.",
      en: "A structured approach to identify, assess and mitigate risks associated with AI systems.",
    },
    category: "AI",
  },
  {
    term: { fr: "Explainability (XAI)", en: "Explainability (XAI)" },
    definition: {
      fr: "Capacité à comprendre et expliquer le fonctionnement et les décisions d’un modèle d’intelligence artificielle.",
      en: "The ability to understand and explain how an AI model works and makes decisions.",
    },
    category: "AI",
  },
  {
    term: { fr: "AI Accountability", en: "AI Accountability" },
    definition: {
      fr: "Principe selon lequel une organisation reste responsable des décisions et impacts produits par ses systèmes d’IA.",
      en: "The principle that an organization remains responsible for the decisions and impacts produced by its AI systems.",
    },
    category: "AI",
  },
  {
    term: { fr: "AI Monitoring", en: "AI Monitoring" },
    definition: {
      fr: "Surveillance continue des performances, dérives et risques d’un système d’IA en production.",
      en: "Continuous monitoring of the performance, drift and risks of an AI system in production.",
    },
    category: "AI",
  },
  {
    term: { fr: "Bias Detection", en: "Bias Detection" },
    definition: {
      fr: "Processus visant à identifier les biais potentiels dans les données ou les modèles d’IA pouvant entraîner des décisions injustes.",
      en: "The process of identifying potential biases in data or AI models that may lead to unfair decisions.",
    },
    category: "AI",
  },
  {
    term: { fr: "AI Documentation", en: "AI Documentation" },
    definition: {
      fr: "Ensemble des documents décrivant un système d’IA : finalité, données utilisées, modèle, risques et contrôles.",
      en: "A set of documents describing an AI system: purpose, data used, model, risks and controls.",
    },
    category: "AI",
  },
  {
    term: { fr: "Human-in-the-loop", en: "Human-in-the-loop" },
    definition: {
      fr: "Approche dans laquelle un humain intervient dans le processus décisionnel d’un système d’IA pour valider ou corriger les résultats.",
      en: "An approach where a human intervenes in the decision-making process of an AI system to validate or correct outputs.",
    },
    category: "AI",
  },
  {
    term: { fr: "AI Lifecycle Management", en: "AI Lifecycle Management" },
    definition: {
      fr: "Gestion de l’ensemble des étapes du cycle de vie d’un système d’IA : conception, développement, déploiement, suivi et retrait.",
      en: "Management of all stages of an AI system lifecycle: design, development, deployment, monitoring and decommissioning.",
    },
    category: "AI",
  },
  {
    term: { fr: "High-risk AI System", en: "High-risk AI System" },
    definition: {
      fr: "Système d’IA relevant d’une catégorie à risque élevé au sens de l’AI Act, nécessitant des obligations renforcées de documentation, contrôle et gouvernance.",
      en: "An AI system falling into a high-risk category under the AI Act, requiring stronger obligations around documentation, controls and governance.",
    },
    category: "AI",
  },
  {
    term: { fr: "AI Literacy", en: "AI Literacy" },
    definition: {
      fr: "Capacité des personnes au sein d’une organisation à comprendre les enjeux, limites, risques et usages appropriés de l’IA.",
      en: "The ability of people within an organization to understand the implications, limitations, risks and appropriate uses of AI.",
    },
    category: "AI",
  },
];

const categoryLabels = {
  fr: {
    Data: "Data",
    Governance: "Gouvernance",
    Privacy: "RGPD & conformité",
    AI: "IA",
  },
  en: {
    Data: "Data",
    Governance: "Governance",
    Privacy: "Privacy & compliance",
    AI: "AI",
  },
};

export function GlossaryPage() {
  const { locale } = useLanguage();
  const typedLocale = locale === "en" ? "en" : "fr";

  const grouped = ["Data", "Governance", "Privacy", "AI"].map((category) => ({
    category,
    label:
      categoryLabels[typedLocale][
        category as keyof (typeof categoryLabels)[typeof typedLocale]
      ],
    items: glossaryItems.filter((item) => item.category === category),
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
              <BookOpen className="h-4 w-4" />
              {typedLocale === "fr" ? "Glossaire" : "Glossary"}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {typedLocale === "fr"
                ? "Glossaire Data, Gouvernance, RGPD et IA"
                : "Data, Governance, GDPR and AI Glossary"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {typedLocale === "fr"
                ? "Un glossaire simple et utile pour comprendre les principaux concepts du domaine et progresser plus vite dans la Data Governance et l’AI Governance."
                : "A simple and useful glossary to understand the main concepts of the field and progress faster in Data Governance and AI Governance."}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-12">
        <div className="glass-card rounded-[28px] p-5">
          <div className="flex items-center gap-3 text-slate-300">
            <Search className="h-4 w-4 text-indigo-300" />
            <p className="text-sm leading-7">
              {typedLocale === "fr"
                ? "Astuce : utilise cette page comme base de révision pour tes parcours, tes tutoriels et tes futurs articles."
                : "Tip: use this page as a reference base for your paths, tutorials and future articles."}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="space-y-10">
          {grouped.map((group) => (
            <section key={group.category}>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white">{group.label}</h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {group.items.map((item) => (
                  <article key={item.term.en} className="glass-card rounded-[28px] p-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {item.term[typedLocale]}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.definition[typedLocale]}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}