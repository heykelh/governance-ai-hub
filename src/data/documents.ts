export type DocumentItem = {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  category: {
    fr: string;
    en: string;
  };
  level: {
    fr: string;
    en: string;
  };
  format: string;
  excerpt: {
    fr: string;
    en: string;
  };
  useCase: {
    fr: string;
    en: string;
  };
  includes: {
    fr: string[];
    en: string[];
  };
  sections: {
    title: {
      fr: string;
      en: string;
    };
    paragraphs: {
      fr: string[];
      en: string[];
    };
  }[];
  viewUrl?: string;
  downloadUrl?: string;
  isFeatured?: boolean;
};

export const documents: DocumentItem[] = [
  {
    slug: "mini-audit-rgpd-pme",
    title: {
      fr: "Mini audit RGPD PME",
      en: "Lightweight GDPR audit for SMEs",
    },
    category: {
      fr: "Audit",
      en: "Audit",
    },
    level: {
      fr: "Beginner",
      en: "Beginner",
    },
    format: "PDF",
    excerpt: {
      fr: "Un support simple pour cadrer un premier audit RGPD sur un périmètre réduit.",
      en: "A simple support to frame a first GDPR audit on a limited scope.",
    },
    useCase: {
      fr: "Utile pour identifier rapidement les écarts principaux dans une petite structure.",
      en: "Useful to quickly identify the main gaps in a small organization.",
    },
    includes: {
      fr: [
        "Questions d’audit essentielles",
        "Points de preuve à collecter",
        "Synthèse des écarts",
      ],
      en: [
        "Key audit questions",
        "Evidence points to collect",
        "Gap summary",
      ],
    },
    sections: [
      {
        title: {
          fr: "Objectif du document",
          en: "Document objective",
        },
        paragraphs: {
          fr: [
            "Ce document sert à lancer un audit RGPD léger sur un périmètre simple, comme un processus RH, un CRM ou une activité marketing.",
            "Il aide à structurer les questions à poser, les preuves à collecter et les écarts à formaliser.",
          ],
          en: [
            "This document is used to launch a lightweight GDPR audit on a simple scope such as an HR process, a CRM or a marketing activity.",
            "It helps structure the questions to ask, the evidence to collect and the gaps to formalize.",
          ],
        },
      },
    ],
    viewUrl: "/documents/mini-audit-rgpd-pme.pdf",
    downloadUrl: "/documents/mini-audit-rgpd-pme.pdf",
    isFeatured: true,
  },
  {
    slug: "registre-traitements",
    title: {
      fr: "Registre des traitements",
      en: "Record of processing activities",
    },
    category: {
      fr: "Audit",
      en: "Audit",
    },
    level: {
      fr: "Beginner",
      en: "Beginner",
    },
    format: "ODS",
    excerpt: {
      fr: "Un support de base pour documenter les traitements de données personnelles.",
      en: "A baseline support to document personal data processing activities.",
    },
    useCase: {
      fr: "À utiliser pour construire une première base de conformité RGPD.",
      en: "Use it to build an initial GDPR compliance foundation.",
    },
    includes: {
      fr: [
        "Finalité du traitement",
        "Base légale",
        "Catégories de données",
      ],
      en: [
        "Processing purpose",
        "Lawful basis",
        "Data categories",
      ],
    },
    sections: [
      {
        title: {
          fr: "Pourquoi ce document est central",
          en: "Why this document is central",
        },
        paragraphs: {
          fr: [
            "Le registre des traitements est l’un des documents structurants de toute démarche RGPD.",
            "Il permet de rendre les traitements lisibles, comparables et auditables.",
          ],
          en: [
            "The record of processing activities is one of the core documents of any GDPR initiative.",
            "It makes processing activities readable, comparable and auditable.",
          ],
        },
      },
    ],
    viewUrl: "/documents/registre-traitements.ods",
    downloadUrl: "/documents/registre-traitements.ods",
    isFeatured: true,
  },
  {
    slug: "aipd-template",
    title: {
      fr: "Modèle AIPD / PIA",
      en: "DPIA / PIA template",
    },
    category: {
      fr: "Audit",
      en: "Audit",
    },
    level: {
      fr: "Intermediate",
      en: "Intermediate",
    },
    format: "PDF",
    excerpt: {
      fr: "Un support pour formaliser une analyse d’impact relative à la protection des données.",
      en: "A support to formalize a data protection impact assessment.",
    },
    useCase: {
      fr: "À utiliser pour les traitements susceptibles d’engendrer un risque élevé.",
      en: "Use it for processing activities likely to create a high risk.",
    },
    includes: {
      fr: [
        "Description du traitement",
        "Étude des risques",
        "Mesures de réduction",
      ],
      en: [
        "Processing description",
        "Risk assessment",
        "Mitigation measures",
      ],
    },
    sections: [
      {
        title: {
          fr: "Quand l’utiliser",
          en: "When to use it",
        },
        paragraphs: {
          fr: [
            "Ce document est utile lorsqu’un traitement présente un risque potentiellement élevé pour les personnes concernées.",
            "Il permet de documenter les risques, les impacts et les mesures de réduction envisagées.",
          ],
          en: [
            "This document is useful when a processing activity may present a high risk for data subjects.",
            "It helps document the risks, impacts and mitigation measures considered.",
          ],
        },
      },
    ],
    viewUrl: "/documents/aipd-template.pdf",
    downloadUrl: "/documents/aipd-template.pdf",
  },
  {
    slug: "raci-data-governance",
    title: {
      fr: "RACI Data Governance",
      en: "Data Governance RACI",
    },
    category: {
      fr: "Gouvernance",
      en: "Governance",
    },
    level: {
      fr: "Beginner",
      en: "Beginner",
    },
    format: "XLSX",
    excerpt: {
      fr: "Une matrice simple pour clarifier les responsabilités data.",
      en: "A simple matrix to clarify data responsibilities.",
    },
    useCase: {
      fr: "Idéal pour une première clarification des rôles entre métiers, data, IT et conformité.",
      en: "Ideal for a first clarification of roles between business, data, IT and compliance.",
    },
    includes: {
      fr: [
        "Data Owner",
        "Data Steward",
        "Validation / exécution / information",
      ],
      en: [
        "Data Owner",
        "Data Steward",
        "Approval / execution / information",
      ],
    },
    sections: [
      {
        title: {
          fr: "Valeur du document",
          en: "Document value",
        },
        paragraphs: {
          fr: [
            "Le RACI est l’un des documents les plus utiles pour rendre une gouvernance crédible dès le départ.",
            "Il permet de clarifier qui décide, qui exécute, qui est consulté et qui est informé.",
          ],
          en: [
            "The RACI is one of the most useful documents to make governance credible from the start.",
            "It clarifies who decides, who executes, who is consulted and who is informed.",
          ],
        },
      },
    ],
    viewUrl: "/documents/raci-data-governance.xlsx",
    downloadUrl: "/documents/raci-data-governance.xlsx",
    isFeatured: true,
  },
  {
    slug: "charte-gouvernance-data",
    title: {
      fr: "Charte de gouvernance data",
      en: "Data governance charter",
    },
    category: {
      fr: "Gouvernance",
      en: "Governance",
    },
    level: {
      fr: "Intermediate",
      en: "Intermediate",
    },
    format: "DOCX",
    excerpt: {
      fr: "Un document cadre pour formaliser les principes de gouvernance dans l’organisation.",
      en: "A framing document to formalize governance principles in the organization.",
    },
    useCase: {
      fr: "Utile pour poser des règles communes et donner une direction claire.",
      en: "Useful to establish shared rules and provide a clear direction.",
    },
    includes: {
      fr: [
        "Objectifs",
        "Principes",
        "Rôles",
      ],
      en: [
        "Objectives",
        "Principles",
        "Roles",
      ],
    },
    sections: [
      {
        title: {
          fr: "Rôle de la charte",
          en: "Role of the charter",
        },
        paragraphs: {
          fr: [
            "La charte formalise les principes communs de gouvernance et donne un cadre partagé à l’organisation.",
            "Elle est particulièrement utile pour poser les bases d’une gouvernance cohérente avant de détailler les procédures.",
          ],
          en: [
            "The charter formalizes shared governance principles and gives the organization a common framework.",
            "It is especially useful to lay the foundation of a coherent governance before detailing procedures.",
          ],
        },
      },
    ],
    viewUrl: "/documents/charte-gouvernance-data.docx",
    downloadUrl: "/documents/charte-gouvernance-data.docx",
  },
  {
    slug: "scorecard-qualite-data",
    title: {
      fr: "Scorecard qualité des données",
      en: "Data quality scorecard",
    },
    category: {
      fr: "Qualité",
      en: "Quality",
    },
    level: {
      fr: "Intermediate",
      en: "Intermediate",
    },
    format: "XLSX",
    excerpt: {
      fr: "Un support de pilotage pour suivre quelques indicateurs qualité essentiels.",
      en: "A steering support to monitor a few essential data quality indicators.",
    },
    useCase: {
      fr: "À utiliser pour piloter complétude, cohérence, validité et anomalies.",
      en: "Use it to monitor completeness, consistency, validity and issues.",
    },
    includes: {
      fr: [
        "Dimensions de qualité",
        "Seuils",
        "Statuts",
      ],
      en: [
        "Quality dimensions",
        "Thresholds",
        "Statuses",
      ],
    },
    sections: [
      {
        title: {
          fr: "À quoi sert cette scorecard",
          en: "What this scorecard is for",
        },
        paragraphs: {
          fr: [
            "Elle permet de transformer la qualité en pilotage visible.",
            "Elle relie dimensions, règles, seuils et statuts dans un support simple à suivre.",
          ],
          en: [
            "It helps turn quality into visible steering.",
            "It connects dimensions, rules, thresholds and statuses in a simple support to monitor.",
          ],
        },
      },
    ],
    viewUrl: "/documents/scorecard-qualite-data.xlsx",
    downloadUrl: "/documents/scorecard-qualite-data.xlsx",
    isFeatured: true,
  },
  {
    slug: "catalogue-regles-controle",
    title: {
      fr: "Catalogue de règles de contrôle",
      en: "Control rules catalog",
    },
    category: {
      fr: "Qualité",
      en: "Quality",
    },
    level: {
      fr: "Intermediate",
      en: "Intermediate",
    },
    format: "XLSX",
    excerpt: {
      fr: "Une base pour formaliser les règles de contrôle qualité sur les données.",
      en: "A basis to formalize data quality control rules.",
    },
    useCase: {
      fr: "Utile pour rendre les exigences qualité observables et auditables.",
      en: "Useful to make quality requirements observable and auditable.",
    },
    includes: {
      fr: [
        "Règle",
        "Champ concerné",
        "Condition de conformité",
      ],
      en: [
        "Rule",
        "Related field",
        "Compliance condition",
      ],
    },
    sections: [
      {
        title: {
          fr: "Ce que structure ce document",
          en: "What this document structures",
        },
        paragraphs: {
          fr: [
            "Ce support aide à transformer des exigences qualité générales en contrôles précis, compréhensibles et suivables.",
          ],
          en: [
            "This support helps turn general quality requirements into precise, understandable and trackable controls.",
          ],
        },
      },
    ],
    viewUrl: "/documents/catalogue-regles-controle.xlsx",
    downloadUrl: "/documents/catalogue-regles-controle.xlsx",
  },
  {
    slug: "registre-usages-ia",
    title: {
      fr: "Registre des usages IA",
      en: "AI use case register",
    },
    category: {
      fr: "IA",
      en: "AI",
    },
    level: {
      fr: "Intermediate",
      en: "Intermediate",
    },
    format: "XLSX",
    excerpt: {
      fr: "Un inventaire structuré des usages IA dans une organisation.",
      en: "A structured inventory of AI use cases in an organization.",
    },
    useCase: {
      fr: "Très utile pour commencer une démarche de gouvernance IA ou AI Act readiness.",
      en: "Very useful to start an AI governance or AI Act readiness initiative.",
    },
    includes: {
      fr: [
        "Finalité",
        "Owner",
        "Données utilisées",
      ],
      en: [
        "Purpose",
        "Owner",
        "Data used",
      ],
    },
    sections: [
      {
        title: {
          fr: "Pourquoi ce registre compte",
          en: "Why this register matters",
        },
        paragraphs: {
          fr: [
            "Le registre des usages IA donne de la visibilité sur les cas d’usage réellement déployés dans l’organisation.",
            "Il constitue souvent la première brique d’une gouvernance IA crédible.",
          ],
          en: [
            "The AI use case register provides visibility over the use cases actually deployed within the organization.",
            "It is often the first building block of a credible AI governance approach.",
          ],
        },
      },
    ],
    viewUrl: "/documents/registre-usages-ia.xlsx",
    downloadUrl: "/documents/registre-usages-ia.xlsx",
    isFeatured: true,
  },
  {
    slug: "registre-risques-ia",
    title: {
      fr: "Registre des risques IA",
      en: "AI risk register",
    },
    category: {
      fr: "IA",
      en: "AI",
    },
    level: {
      fr: "Advanced",
      en: "Advanced",
    },
    format: "XLSX",
    excerpt: {
      fr: "Un support pour documenter les risques, impacts, mesures et responsables liés aux usages IA.",
      en: "A support to document risks, impacts, measures and owners related to AI use cases.",
    },
    useCase: {
      fr: "À utiliser pour structurer un pilotage des risques IA simple mais crédible.",
      en: "Use it to structure a simple but credible AI risk steering approach.",
    },
    includes: {
      fr: [
        "Risque",
        "Impact",
        "Mesures",
      ],
      en: [
        "Risk",
        "Impact",
        "Measures",
      ],
    },
    sections: [
      {
        title: {
          fr: "Utilité du registre",
          en: "Register usefulness",
        },
        paragraphs: {
          fr: [
            "Ce document permet de rendre les risques IA visibles, comparables et pilotables.",
            "Il devient particulièrement utile lorsque plusieurs usages IA existent déjà dans l’organisation.",
          ],
          en: [
            "This document helps make AI risks visible, comparable and manageable.",
            "It becomes especially useful when several AI use cases already exist in the organization.",
          ],
        },
      },
    ],
    viewUrl: "/documents/registre-risques-ia.xlsx",
    downloadUrl: "/documents/registre-risques-ia.xlsx",
  },
  {
    slug: "checklist-ai-act",
    title: {
      fr: "Checklist AI Act readiness",
      en: "AI Act readiness checklist",
    },
    category: {
      fr: "IA",
      en: "AI",
    },
    level: {
      fr: "Advanced",
      en: "Advanced",
    },
    format: "PDF",
    excerpt: {
      fr: "Une checklist simple pour commencer à évaluer la préparation documentaire et organisationnelle autour des usages IA.",
      en: "A simple checklist to start assessing organizational and documentation readiness around AI uses.",
    },
    useCase: {
      fr: "À utiliser pour une première lecture de maturité IA dans l’entreprise.",
      en: "Use it for a first reading of AI maturity in the company.",
    },
    includes: {
      fr: [
        "Inventaire des usages",
        "Documentation",
        "Rôles et contrôles",
      ],
      en: [
        "Use case inventory",
        "Documentation",
        "Roles and controls",
      ],
    },
    sections: [
      {
        title: {
          fr: "Pourquoi cette checklist est utile",
          en: "Why this checklist is useful",
        },
        paragraphs: {
          fr: [
            "Elle sert de point de départ pour évaluer rapidement si les bases de gouvernance IA sont présentes ou non.",
            "Elle aide aussi à structurer un premier échange avec des équipes métier, data, conformité ou IT.",
          ],
          en: [
            "It acts as a starting point to quickly assess whether the basic elements of AI governance are in place.",
            "It also helps structure an initial discussion with business, data, compliance or IT teams.",
          ],
        },
      },
    ],
    viewUrl: "/documents/checklist-ai-act.pdf",
    downloadUrl: "/documents/checklist-ai-act.pdf",
  },
];

export function getFeaturedDocuments() {
  return documents.filter((doc) => doc.isFeatured);
}

export function getDocumentBySlug(slug: string) {
  return documents.find((doc) => doc.slug === slug);
}