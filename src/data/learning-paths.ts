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
      fr: "Parcours Beginner — Fondamentaux de la Data Governance",
      en: "Beginner Path — Data Governance Fundamentals",
    },
    level: {
      fr: "Beginner",
      en: "Beginner",
    },
    duration: "3h15",
    xp: 450,
    excerpt: {
      fr: "Un parcours pour comprendre les bases de la gouvernance des données, les rôles clés, les risques, les premiers livrables et la logique de pilotage.",
      en: "A path to understand the foundations of data governance, key roles, risks, first deliverables and steering logic.",
    },
    intro: {
      fr: `Ce parcours est la meilleure porte d’entrée pour comprendre la Data Governance de manière simple, sérieuse et exploitable. Il t’aide à passer de définitions générales à une logique concrète de structuration, de responsabilité et de pilotage.

L’objectif n’est pas seulement de connaître des concepts. L’objectif est de pouvoir expliquer ce qu’est la gouvernance des données, pourquoi elle est importante, quels problèmes elle résout, et comment commencer à mettre en place des premiers livrables crédibles dans un contexte professionnel.`,
      en: `This path is the best entry point to understand Data Governance in a simple, serious and usable way. It helps you move from general definitions to a concrete logic of structure, accountability and steering.

The goal is not only to know concepts. The goal is to be able to explain what data governance is, why it matters, which problems it solves, and how to start building credible first deliverables in a professional context.`,
    },
    outcomes: {
      fr: [
        "Comprendre ce qu’est la Data Governance et ce qu’elle n’est pas",
        "Identifier les enjeux business, qualité, conformité et sécurité",
        "Connaître les 4 piliers d’une gouvernance efficace",
        "Distinguer les rôles Data Owner, Data Steward et Data Architect",
        "Savoir construire un premier RACI",
        "Savoir formaliser une première roadmap de gouvernance",
      ],
      en: [
        "Understand what Data Governance is and what it is not",
        "Identify business, quality, compliance and security challenges",
        "Know the 4 pillars of effective governance",
        "Differentiate Data Owner, Data Steward and Data Architect roles",
        "Build a first RACI",
        "Formalize a first governance roadmap",
      ],
    },
    modules: {
      fr: [
        {
          title: "Module 1 — Définir la Data Governance",
          description:
            "Comprendre la définition, le périmètre et la valeur de la gouvernance des données.",
          lessons: [
            "Définition simple et claire",
            "Différence entre gouvernance, qualité et BI",
            "Pourquoi la donnée sans gouvernance perd de sa valeur",
            "Exemples concrets d’usage",
          ],
          href: "/tutorials/comprendre-data-governance",
        },
        {
          title: "Module 2 — Comprendre les enjeux et les risques",
          description:
            "Relier la gouvernance aux problèmes réels de qualité, reporting, conformité et sécurité.",
          lessons: [
            "Risques de données dispersées",
            "Impact sur les KPI et décisions",
            "Lien avec RGPD et contrôle",
            "Lien avec la confiance métier",
          ],
          href: "/tutorials/enjeux-risques-data-governance",
        },
        {
          title: "Module 3 — Les 4 piliers d’une gouvernance efficace",
          description:
            "Assimiler qualité, conformité, rôles et valorisation comme piliers d’une démarche sérieuse.",
          lessons: [
            "Pilier qualité",
            "Pilier sécurité / conformité",
            "Pilier rôles / responsabilités",
            "Pilier valorisation",
          ],
          href: "/tutorials/4-piliers-data-governance",
        },
        {
          title: "Module 4 — Les rôles et responsabilités",
          description:
            "Clarifier qui décide, qui exécute, qui documente et qui pilote.",
          lessons: [
            "Data Owner",
            "Data Steward",
            "Data Architect",
            "Logique RACI",
          ],
          href: "/tutorials/raci-gouvernance-data",
        },
        {
          title: "Module 5 — Qualité de données et pilotage",
          description:
            "Comprendre comment suivre la qualité avec des dimensions, règles et scorecards.",
          lessons: [
            "Complétude, validité, cohérence",
            "Règles de contrôle",
            "Seuils et statuts",
            "Scorecard qualité",
          ],
          href: "/tutorials/scorecard-qualite-donnees",
        },
        {
          title: "Module 6 — Construire une feuille de route 90 jours",
          description:
            "Transformer un diagnostic en plan d’action crédible et lisible.",
          lessons: [
            "Priorisation",
            "Quick wins",
            "Responsables",
            "Roadmap 30/60/90",
          ],
          href: "/tutorials/feuille-route-data-governance-90-jours",
        },
      ],
      en: [
        {
          title: "Module 1 — Define Data Governance",
          description:
            "Understand the definition, scope and value of data governance.",
          lessons: [
            "Simple and clear definition",
            "Difference between governance, quality and BI",
            "Why data without governance loses value",
            "Concrete use cases",
          ],
          href: "/tutorials/comprendre-data-governance",
        },
        {
          title: "Module 2 — Understand challenges and risks",
          description:
            "Connect governance to real issues in quality, reporting, compliance and security.",
          lessons: [
            "Risks of fragmented data",
            "Impact on KPIs and decisions",
            "Connection with GDPR and control",
            "Connection with business trust",
          ],
          href: "/tutorials/enjeux-risques-data-governance",
        },
        {
          title: "Module 3 — The 4 pillars of effective governance",
          description:
            "Understand quality, compliance, roles and value creation as the pillars of a serious governance initiative.",
          lessons: [
            "Quality pillar",
            "Security / compliance pillar",
            "Roles / responsibilities pillar",
            "Value creation pillar",
          ],
          href: "/tutorials/4-piliers-data-governance",
        },
        {
          title: "Module 4 — Roles and responsibilities",
          description:
            "Clarify who decides, executes, documents and steers.",
          lessons: [
            "Data Owner",
            "Data Steward",
            "Data Architect",
            "RACI logic",
          ],
          href: "/tutorials/raci-gouvernance-data",
        },
        {
          title: "Module 5 — Data quality and steering",
          description:
            "Understand how to monitor quality through dimensions, rules and scorecards.",
          lessons: [
            "Completeness, validity, consistency",
            "Control rules",
            "Thresholds and statuses",
            "Quality scorecard",
          ],
          href: "/tutorials/scorecard-qualite-donnees",
        },
        {
          title: "Module 6 — Build a 90-day roadmap",
          description:
            "Turn a diagnosis into a credible and readable action plan.",
          lessons: [
            "Prioritization",
            "Quick wins",
            "Owners",
            "30/60/90 roadmap",
          ],
          href: "/tutorials/feuille-route-data-governance-90-jours",
        },
      ],
    },
    deliverables: {
      fr: [
        "Définition réutilisable de la Data Governance",
        "Mini RACI de gouvernance",
        "Scorecard qualité simple",
        "Roadmap 30/60/90 jours",
      ],
      en: [
        "Reusable definition of Data Governance",
        "Mini governance RACI",
        "Simple quality scorecard",
        "30/60/90 roadmap",
      ],
    },
    keyTakeaways: {
      fr: [
        "La gouvernance data relie métier, qualité, conformité et pilotage.",
        "Une donnée utile est une donnée fiable, comprise et gouvernée.",
        "Commencer petit avec des livrables clairs est la meilleure approche.",
      ],
      en: [
        "Data governance connects business, quality, compliance and steering.",
        "Useful data is reliable, understood and governed data.",
        "Starting small with clear deliverables is the best approach.",
      ],
    },
  },

  {
    slug: "rgpd-qualite-audit-operationnel",
    title: {
      fr: "Parcours Intermediate — RGPD, qualité & audit opérationnel",
      en: "Intermediate Path — GDPR, Quality & Operational Audit",
    },
    level: {
      fr: "Intermediate",
      en: "Intermediate",
    },
    duration: "4h10",
    xp: 650,
    excerpt: {
      fr: "Un parcours pour passer à un niveau opérationnel : audit, preuve, documentation, classification et logique de conformité pilotable.",
      en: "A path to move to an operational level: audit, evidence, documentation, classification and manageable compliance.",
    },
    intro: {
      fr: `Ce parcours intermédiaire t’aide à sortir des concepts généraux pour entrer dans une logique d’exécution. Ici, tu apprends à auditer un périmètre, à collecter des preuves, à formaliser des contrôles, à documenter des traitements et à structurer un plan d’action crédible.

Le but est de te rapprocher du niveau attendu dans une mission réelle, où il faut savoir lire un contexte, faire émerger des écarts, prioriser les actions et produire des supports compréhensibles par les métiers, la conformité et la direction.`,
      en: `This intermediate path helps you move beyond general concepts into execution logic. Here, you learn how to audit a scope, collect evidence, formalize controls, document processing activities and structure a credible action plan.

The goal is to get closer to the level expected in a real assignment, where you need to understand a context, surface gaps, prioritize actions and produce materials understandable by business, compliance and leadership teams.`,
    },
    outcomes: {
      fr: [
        "Savoir lancer un mini audit RGPD",
        "Comprendre la logique de preuve et d’accountability",
        "Formaliser une classification de données",
        "Relier qualité, documentation et contrôle",
        "Construire un plan d’action priorisé",
        "Produire des supports crédibles pour une PME ou un périmètre ciblé",
      ],
      en: [
        "Run a lightweight GDPR audit",
        "Understand evidence and accountability logic",
        "Formalize data classification",
        "Connect quality, documentation and control",
        "Build a prioritized action plan",
        "Produce credible materials for an SME or a targeted scope",
      ],
    },
    modules: {
      fr: [
        {
          title: "Module 1 — Lancer un mini audit RGPD",
          description:
            "Cadrer un audit simple, utile et réaliste sur un périmètre réduit.",
          lessons: [
            "Choisir un périmètre",
            "Structurer une grille d’audit",
            "Interroger les parties prenantes",
            "Faire ressortir les écarts",
          ],
          href: "/tutorials/mini-audit-rgpd-pme",
        },
        {
          title: "Module 2 — Registre de traitements et logique de preuve",
          description:
            "Comprendre comment documenter les traitements et constituer une base de preuve crédible.",
          lessons: [
            "Finalité et base légale",
            "Catégories de données",
            "Durées et destinataires",
            "Logique d’accountability",
          ],
          href: "/tutorials/registre-traitements-et-preuve",
        },
        {
          title: "Module 3 — Classification des données et accès",
          description:
            "Mettre en place une logique simple de classification et de maîtrise des accès.",
          lessons: [
            "Public / interne / confidentiel",
            "Données personnelles et sensibles",
            "Principes d’accès",
            "Règles de revue",
          ],
          href: "/tutorials/classification-donnees-et-acces",
        },
        {
          title: "Module 4 — Contrôles qualité et indicateurs",
          description:
            "Relier les dimensions de qualité à une logique de contrôle et de suivi.",
          lessons: [
            "Contrôles observables",
            "Indicateurs utiles",
            "Suivi des anomalies",
            "Pilotage qualité",
          ],
          href: "/tutorials/controles-qualite-et-indicateurs",
        },
        {
          title: "Module 5 — Gouvernance documentaire",
          description:
            "Structurer les documents clés pour rendre la conformité et la gouvernance lisibles.",
          lessons: [
            "Politiques",
            "Procédures",
            "Supports de preuve",
            "Documentation réutilisable",
          ],
          href: "/tutorials/gouvernance-documentaire",
        },
        {
          title: "Module 6 — Plan d’action et priorisation",
          description:
            "Transformer constats et écarts en plan d’action simple, crédible et pilotable.",
          lessons: [
            "Écarts majeurs",
            "Priorisation",
            "Responsables",
            "Suivi des actions",
          ],
          href: "/tutorials/plan-action-et-priorisation",
        },
      ],
      en: [
        {
          title: "Module 1 — Run a lightweight GDPR audit",
          description:
            "Frame a simple, useful and realistic audit on a limited scope.",
          lessons: [
            "Choose a scope",
            "Structure an audit checklist",
            "Interview stakeholders",
            "Surface the main gaps",
          ],
          href: "/tutorials/mini-audit-rgpd-pme",
        },
        {
          title: "Module 2 — Record of processing and evidence logic",
          description:
            "Understand how to document processing activities and build a credible evidence base.",
          lessons: [
            "Purpose and lawful basis",
            "Data categories",
            "Retention and recipients",
            "Accountability logic",
          ],
          href: "/tutorials/registre-traitements-et-preuve",
        },
        {
          title: "Module 3 — Data classification and access",
          description:
            "Set up a simple logic for data classification and access control.",
          lessons: [
            "Public / internal / confidential",
            "Personal and sensitive data",
            "Access principles",
            "Review rules",
          ],
          href: "/tutorials/classification-donnees-et-acces",
        },
        {
          title: "Module 4 — Quality controls and indicators",
          description:
            "Connect quality dimensions to control and monitoring logic.",
          lessons: [
            "Observable controls",
            "Useful indicators",
            "Issue tracking",
            "Quality steering",
          ],
          href: "/tutorials/controles-qualite-et-indicateurs",
        },
        {
          title: "Module 5 — Documentation governance",
          description:
            "Structure the key documents that make governance and compliance readable.",
          lessons: [
            "Policies",
            "Procedures",
            "Evidence supports",
            "Reusable documentation",
          ],
          href: "/tutorials/gouvernance-documentaire",
        },
        {
          title: "Module 6 — Action plan and prioritization",
          description:
            "Turn findings and gaps into a simple, credible and manageable action plan.",
          lessons: [
            "Major gaps",
            "Prioritization",
            "Owners",
            "Action follow-up",
          ],
          href: "/tutorials/plan-action-et-priorisation",
        },
      ],
    },
    deliverables: {
      fr: [
        "Checklist d’audit RGPD simplifiée",
        "Support de registre des traitements",
        "Matrice de classification des données",
        "Plan d’action priorisé",
      ],
      en: [
        "Simplified GDPR audit checklist",
        "Processing register support",
        "Data classification matrix",
        "Prioritized action plan",
      ],
    },
    keyTakeaways: {
      fr: [
        "La conformité utile repose sur une logique de preuve et de documentation.",
        "Un audit léger mais bien exécuté vaut mieux qu’un audit théorique trop large.",
        "Les bons supports rendent les écarts visibles et actionnables.",
      ],
      en: [
        "Useful compliance relies on evidence and documentation logic.",
        "A lightweight well-executed audit is better than an overly broad theoretical audit.",
        "Good supports make gaps visible and actionable.",
      ],
    },
  },

  {
    slug: "ai-governance-operating-model",
    title: {
      fr: "Parcours Advanced — Gouvernance IA, AI Act & operating model",
      en: "Advanced Path — AI Governance, AI Act & Operating Model",
    },
    level: {
      fr: "Advanced",
      en: "Advanced",
    },
    duration: "4h45",
    xp: 850,
    excerpt: {
      fr: "Un parcours avancé pour structurer la gouvernance des usages IA, documenter les risques, bâtir un modèle de maturité et concevoir une gouvernance cible crédible.",
      en: "An advanced path to structure AI governance, document risks, build a maturity model and design a credible target governance model.",
    },
    intro: {
      fr: `Ce parcours avancé vise un positionnement plus senior. Il ne s’agit plus seulement de comprendre ou d’auditer, mais de concevoir un cadre de gouvernance capable d’absorber l’essor des usages IA dans une organisation.

Tu y travailles les registres IA, la documentation des risques, les logiques de contrôle, les attentes de l’AI Act et la manière de formaliser un operating model cible. C’est le parcours qui fait passer d’un niveau “je comprends” à un niveau “je peux structurer et piloter”.`,
      en: `This advanced path targets a more senior positioning. It is no longer only about understanding or auditing, but about designing a governance framework able to absorb the rise of AI use cases in an organization.

You will work on AI registers, risk documentation, control logic, AI Act expectations and the way to formalize a target operating model. This is the path that moves you from “I understand” to “I can structure and steer.”`,
    },
    outcomes: {
      fr: [
        "Structurer un registre des usages IA",
        "Construire un registre des risques IA",
        "Comprendre les attentes de documentation liées à l’AI Act",
        "Évaluer un niveau de maturité IA",
        "Concevoir une gouvernance cible",
        "Formaliser un operating model crédible",
      ],
      en: [
        "Structure an AI use case register",
        "Build an AI risk register",
        "Understand AI Act-related documentation expectations",
        "Assess AI maturity",
        "Design target governance",
        "Formalize a credible operating model",
      ],
    },
    modules: {
      fr: [
        {
          title: "Module 1 — Gouvernance de l’IA et AI Act",
          description:
            "Poser le cadre : inventaire, risques, documentation, rôles et pilotage.",
          lessons: [
            "Pourquoi gouverner les usages IA",
            "Rôle de l’AI Act",
            "Logique de documentation",
            "Vision d’ensemble",
          ],
          href: "/tutorials/gouvernance-ia-et-ai-act",
        },
        {
          title: "Module 2 — Registre des usages IA",
          description:
            "Construire un inventaire exploitable des cas d’usage IA dans une organisation.",
          lessons: [
            "Finalité",
            "Owner",
            "Données utilisées",
            "Niveau de risque",
          ],
          href: "/tutorials/registre-usages-ia",
        },
        {
          title: "Module 3 — Registre des risques IA",
          description:
            "Documenter les risques, mesures et responsables de manière pilotable.",
          lessons: [
            "Risque",
            "Impact",
            "Mesure",
            "Statut",
          ],
          href: "/tutorials/registre-risques-ia",
        },
        {
          title: "Module 4 — Documentation des contrôles",
          description:
            "Décrire les mécanismes de gouvernance, de revue, d’accès et de validation.",
          lessons: [
            "Contrôles organisationnels",
            "Contrôles documentaires",
            "Preuves",
            "Suivi",
          ],
          href: "/tutorials/documentation-des-controles-ia",
        },
        {
          title: "Module 5 — Modèle de maturité IA",
          description:
            "Évaluer le niveau d’avancement d’une organisation sur ses usages IA.",
          lessons: [
            "Critères d’évaluation",
            "Niveaux de maturité",
            "Lecture des écarts",
            "Priorités",
          ],
          href: "/tutorials/modele-maturite-ia",
        },
        {
          title: "Module 6 — Gouvernance cible et operating model",
          description:
            "Formaliser une gouvernance cible crédible avec rôles, instances et responsabilités.",
          lessons: [
            "Operating model",
            "Rôles clés",
            "Comités",
            "Gouvernance cible",
          ],
          href: "/tutorials/operating-model-gouvernance-ia",
        },
      ],
      en: [
        {
          title: "Module 1 — AI governance and AI Act",
          description:
            "Set the framework: inventory, risks, documentation, roles and steering.",
          lessons: [
            "Why govern AI uses",
            "Role of the AI Act",
            "Documentation logic",
            "Overall view",
          ],
          href: "/tutorials/gouvernance-ia-et-ai-act",
        },
        {
          title: "Module 2 — AI use case register",
          description:
            "Build a usable inventory of AI use cases in an organization.",
          lessons: [
            "Purpose",
            "Owner",
            "Data used",
            "Risk level",
          ],
          href: "/tutorials/registre-usages-ia",
        },
        {
          title: "Module 3 — AI risk register",
          description:
            "Document risks, measures and owners in a manageable way.",
          lessons: [
            "Risk",
            "Impact",
            "Measure",
            "Status",
          ],
          href: "/tutorials/registre-risques-ia",
        },
        {
          title: "Module 4 — Control documentation",
          description:
            "Describe governance, review, access and validation mechanisms.",
          lessons: [
            "Organizational controls",
            "Documentation controls",
            "Evidence",
            "Follow-up",
          ],
          href: "/tutorials/documentation-des-controles-ia",
        },
        {
          title: "Module 5 — AI maturity model",
          description:
            "Assess the advancement level of an organization regarding AI uses.",
          lessons: [
            "Assessment criteria",
            "Maturity levels",
            "Gap reading",
            "Priorities",
          ],
          href: "/tutorials/modele-maturite-ia",
        },
        {
          title: "Module 6 — Target governance and operating model",
          description:
            "Formalize a credible target governance model with roles, bodies and responsibilities.",
          lessons: [
            "Operating model",
            "Key roles",
            "Committees",
            "Target governance",
          ],
          href: "/tutorials/operating-model-gouvernance-ia",
        },
      ],
    },
    deliverables: {
      fr: [
        "Registre des usages IA",
        "Registre des risques IA",
        "Grille de maturité IA",
        "Operating model cible",
      ],
      en: [
        "AI use case register",
        "AI risk register",
        "AI maturity grid",
        "Target operating model",
      ],
    },
    keyTakeaways: {
      fr: [
        "La gouvernance IA nécessite inventaire, documentation, risques et pilotage.",
        "L’AI Act pousse à mieux formaliser les usages et les contrôles.",
        "Le niveau senior vient de la capacité à structurer une gouvernance cible claire.",
      ],
      en: [
        "AI governance requires inventory, documentation, risk logic and steering.",
        "The AI Act pushes organizations to formalize uses and controls more clearly.",
        "Senior-level value comes from the ability to structure a clear target governance model.",
      ],
    },
  },
];

export function getLearningPathBySlug(slug: string) {
  return learningPaths.find((item) => item.slug === slug);
}

export function getNextModuleByTutorialSlug(
  tutorialSlug: string,
  locale: "fr" | "en"
) {
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