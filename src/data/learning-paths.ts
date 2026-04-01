export type LearningPathModule = {
  title: string;
  description: string;
  lessons: string[];
  href: string;
};

export type LearningPath = {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  level: {
    fr: string;
    en: string;
  };
  duration: string;
  xp: number;
  excerpt: {
    fr: string;
    en: string;
  };
  intro: {
    fr: string;
    en: string;
  };
  outcomes: {
    fr: string[];
    en: string[];
  };
  modules: {
    fr: LearningPathModule[];
    en: LearningPathModule[];
  };
  deliverables: {
    fr: string[];
    en: string[];
  };
  keyTakeaways: {
    fr: string[];
    en: string[];
  };
};

export const learningPaths: LearningPath[] = [
  {
    slug: "fondamentaux-data-governance",
    title: {
      fr: "Parcours débutant : Fondamentaux de la Data Governance",
      en: "Beginner path: Data Governance Fundamentals",
    },
    level: {
      fr: "Débutant",
      en: "Beginner",
    },
    duration: "3h15",
    xp: 450,
    excerpt: {
      fr: "Un parcours structuré pour comprendre ce qu’est réellement la Data Governance, pourquoi elle est devenue essentielle, quels rôles elle implique et comment commencer à la mettre en œuvre concrètement.",
      en: "A structured path to understand what Data Governance really is, why it has become essential, which roles it requires and how to start implementing it concretely.",
    },
    intro: {
      fr: `Aujourd’hui, la donnée n’est plus simplement un sous-produit des systèmes d’information : elle est devenue un actif stratégique. Reporting, pilotage, conformité, intelligence artificielle, qualité de service, analyse métier ou cybersécurité dépendent tous de la fiabilité des données.

Mais dans beaucoup d’organisations, les données restent dispersées, mal documentées, incohérentes ou insuffisamment protégées. Résultat : les décisions perdent en fiabilité, les contrôles deviennent difficiles, les obligations réglementaires sont plus complexes à respecter, et les métiers passent du temps à corriger des erreurs au lieu de produire de la valeur.

La Data Governance apporte un cadre pour répondre à ces difficultés. Elle permet d’organiser les responsabilités, de définir des règles communes, d’améliorer la qualité, de renforcer la sécurité, et de rendre les données plus utilisables pour les équipes métier, data, conformité et direction.

Ce parcours débutant a été conçu pour te donner une vision claire, structurée et directement exploitable de la gouvernance des données. L’objectif n’est pas seulement de comprendre les concepts, mais de commencer à raisonner comme quelqu’un capable de cadrer un sujet de gouvernance, d’identifier les rôles clés, de repérer les principaux risques et de produire des premiers livrables crédibles.`,
      en: `Today, data is no longer just a by-product of information systems: it has become a strategic asset. Reporting, steering, compliance, artificial intelligence, service quality, business analysis and cybersecurity all depend on reliable data.

Yet in many organizations, data remains fragmented, poorly documented, inconsistent or insufficiently protected. As a result, decisions become less reliable, controls are harder to perform, regulatory obligations become more difficult to meet, and business teams spend time fixing errors instead of creating value.

Data Governance provides a framework to address these issues. It helps organize responsibilities, define common rules, improve quality, strengthen security and make data more usable for business, data, compliance and leadership teams.

This beginner path was designed to give you a clear, structured and directly usable understanding of data governance. The goal is not only to understand the concepts, but also to start thinking like someone who can frame a governance topic, identify key roles, spot major risks and produce credible first deliverables.`,
    },
    outcomes: {
      fr: [
        "Comprendre ce qu’est la Data Governance et ce qu’elle n’est pas",
        "Identifier les principaux enjeux : qualité, conformité, sécurité, exploitation",
        "Connaître les 4 piliers d’une gouvernance des données efficace",
        "Comprendre les grands processus : collecte, gouvernance, exploitation",
        "Distinguer les rôles Data Owner, Data Steward et Data Architect",
        "Savoir structurer les premières étapes d’une démarche de gouvernance",
      ],
      en: [
        "Understand what Data Governance is and what it is not",
        "Identify the main challenges: quality, compliance, security and usage",
        "Know the 4 pillars of effective data governance",
        "Understand the major processes: collection, governance, exploitation",
        "Differentiate Data Owner, Data Steward and Data Architect roles",
        "Structure the first steps of a governance initiative",
      ],
    },
    modules: {
      fr: [
        {
          title: "Module 1 — Définir la Data Governance",
          description:
            "Comprendre la définition, le périmètre et la place de la gouvernance des données dans une entreprise moderne.",
          lessons: [
            "Pourquoi la donnée est devenue un actif stratégique",
            "Différence entre gouvernance, qualité de données, BI et exploitation technique",
            "Définition simple de la Data Governance",
            "Pourquoi une donnée sans gouvernance perd de sa valeur",
          ],
          href: "/tutorials/comprendre-data-governance",
        },
        {
          title: "Module 2 — Comprendre les enjeux business et risques",
          description:
            "Relier la gouvernance des données à des problématiques concrètes : qualité, conformité, sécurité et performance décisionnelle.",
          lessons: [
            "Risques liés aux données dispersées ou incohérentes",
            "Conséquences sur le reporting, les KPI et la prise de décision",
            "Lien avec le RGPD, la CNIL et les exigences de conformité",
            "Lien avec la cybersécurité, la confiance et l’auditabilité",
          ],
          href: "/tutorials/enjeux-risques-data-governance",
        },
        {
          title: "Module 3 — Les 4 piliers d’une gouvernance efficace",
          description:
            "Assimiler les grands piliers qui structurent une démarche crédible de Data Governance.",
          lessons: [
            "Pilier 1 : qualité des données",
            "Pilier 2 : sécurité et conformité",
            "Pilier 3 : rôles et responsabilités",
            "Pilier 4 : valorisation et exploitation décisionnelle",
          ],
          href: "/tutorials/4-piliers-data-governance",
        },
        {
          title: "Module 4 — Les rôles et responsabilités",
          description:
            "Comprendre qui fait quoi dans une organisation orientée gouvernance des données.",
          lessons: [
            "Le Data Owner : vision métier, arbitrage, responsabilité",
            "Le Data Steward : qualité, documentation, support, animation",
            "Le Data Architect : architecture, modélisation, intégration",
            "Pourquoi le RACI est indispensable",
          ],
          href: "/tutorials/raci-gouvernance-data",
        },
        {
          title: "Module 5 — Qualité de données et pilotage",
          description:
            "Comprendre comment piloter la qualité à travers des dimensions, contrôles et scorecards.",
          lessons: [
            "Dimensions de qualité",
            "Règles de contrôle",
            "Seuils et scorecards",
            "Suivi dans le temps",
          ],
          href: "/tutorials/scorecard-qualite-donnees",
        },
        {
          title: "Module 6 — Construire une feuille de route 90 jours",
          description:
            "Transformer le diagnostic en plan d’action avec quick wins, priorités et responsables.",
          lessons: [
            "Prioriser les écarts",
            "Identifier les quick wins",
            "Définir responsables et échéances",
            "Structurer la roadmap 30/60/90 jours",
          ],
          href: "/tutorials/feuille-route-data-governance-90-jours",
        },
      ],
      en: [
        {
          title: "Module 1 — Define Data Governance",
          description:
            "Understand the definition, scope and role of data governance in a modern company.",
          lessons: [
            "Why data has become a strategic asset",
            "Difference between governance, data quality, BI and technical operations",
            "A simple definition of Data Governance",
            "Why data without governance loses value",
          ],
          href: "/tutorials/comprendre-data-governance",
        },
        {
          title: "Module 2 — Understand business challenges and risks",
          description:
            "Connect data governance to real-world issues: quality, compliance, security and decision performance.",
          lessons: [
            "Risks linked to fragmented or inconsistent data",
            "Impact on reporting, KPIs and decision-making",
            "Connection with GDPR and compliance expectations",
            "Connection with cybersecurity, trust and auditability",
          ],
          href: "/tutorials/enjeux-risques-data-governance",
        },
        {
          title: "Module 3 — The 4 pillars of effective governance",
          description:
            "Understand the major pillars that structure a credible data governance initiative.",
          lessons: [
            "Pillar 1: data quality",
            "Pillar 2: security and compliance",
            "Pillar 3: roles and responsibilities",
            "Pillar 4: value creation and analytical use",
          ],
          href: "/tutorials/4-piliers-data-governance",
        },
        {
          title: "Module 4 — Roles and responsibilities",
          description:
            "Understand who does what in a data governance-oriented organization.",
          lessons: [
            "The Data Owner: business vision, arbitration, accountability",
            "The Data Steward: quality, documentation, support, enablement",
            "The Data Architect: architecture, modeling, integration",
            "Why a RACI is essential",
          ],
          href: "/tutorials/raci-gouvernance-data",
        },
        {
          title: "Module 5 — Data quality and steering",
          description:
            "Understand how to steer quality through dimensions, controls and scorecards.",
          lessons: [
            "Quality dimensions",
            "Control rules",
            "Thresholds and scorecards",
            "Long-term monitoring",
          ],
          href: "/tutorials/scorecard-qualite-donnees",
        },
        {
          title: "Module 6 — Build a 90-day roadmap",
          description:
            "Turn the diagnosis into an action plan with quick wins, priorities and owners.",
          lessons: [
            "Prioritize gaps",
            "Identify quick wins",
            "Define owners and timelines",
            "Structure the 30/60/90 roadmap",
          ],
          href: "/tutorials/feuille-route-data-governance-90-jours",
        },
      ],
    },
    deliverables: {
      fr: [
        "Une définition claire de la Data Governance réutilisable en entretien ou en mission",
        "Un schéma simple des 4 piliers de gouvernance",
        "Une première cartographie des rôles Data Owner / Steward / Architect",
        "Une mini feuille de route débutant pour lancer une démarche de gouvernance",
      ],
      en: [
        "A clear definition of Data Governance reusable in interviews or consulting work",
        "A simple 4-pillar governance diagram",
        "A first mapping of Data Owner / Steward / Architect roles",
        "A beginner mini roadmap to start a governance initiative",
      ],
    },
    keyTakeaways: {
      fr: [
        "La Data Governance ne se limite pas à la technique : elle relie métier, qualité, conformité et pilotage.",
        "Une donnée utile est une donnée fiable, accessible, protégée et correctement gouvernée.",
        "Sans rôles clairs, la responsabilité se dilue et les problèmes persistent.",
        "La gouvernance efficace commence petit : cas d’usage, rôles, règles, KPI, roadmap.",
      ],
      en: [
        "Data Governance is not just technical: it connects business, quality, compliance and steering.",
        "Useful data is data that is reliable, accessible, protected and properly governed.",
        "Without clear roles, accountability becomes diluted and issues persist.",
        "Effective governance starts small: use cases, roles, rules, KPIs and roadmap.",
      ],
    },
  },
];

export function getLearningPathBySlug(slug: string) {
  return learningPaths.find((item) => item.slug === slug);
}

export function getNextModuleByTutorialSlug(tutorialSlug: string, locale: "fr" | "en") {
  const tutorialPath = `/tutorials/${tutorialSlug}`;

  for (const path of learningPaths) {
    const modules = path.modules[locale];
    const currentIndex = modules.findIndex((module) => module.href === tutorialPath);

    if (currentIndex !== -1) {
      const nextModule = modules[currentIndex + 1];

      return {
        path,
        currentModule: modules[currentIndex],
        nextModule: nextModule ?? null,
        currentIndex,
        totalModules: modules.length,
      };
    }
  }

  return null;
}