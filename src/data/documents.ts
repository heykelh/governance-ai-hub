export type DocumentCategory =
  | "audit"
  | "roadmap"
  | "raci"
  | "quality"
  | "gdpr"
  | "ai";

export type DocumentItem = {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  category: DocumentCategory;
  type: {
    fr: string;
    en: string;
  };
  level: {
    fr: string;
    en: string;
  };
  summary: {
    fr: string;
    en: string;
  };
  includes: {
    fr: string[];
    en: string[];
  };
  usage: {
    fr: string;
    en: string;
  };
};

export const documentItems: DocumentItem[] = [
  {
    slug: "audit-data-governance",
    title: {
      fr: "Exemple d’audit de gouvernance des données",
      en: "Example of a data governance audit",
    },
    category: "audit",
    type: { fr: "Exemple d’audit", en: "Audit example" },
    level: { fr: "Intermédiaire", en: "Intermediate" },
    summary: {
      fr: "Une structure type pour auditer rôles, politiques, qualité, preuve et pilotage.",
      en: "A typical structure to audit roles, policies, quality, evidence and steering.",
    },
    includes: {
      fr: [
        "Périmètre",
        "Questions d’audit",
        "Constats",
        "Niveau de maturité",
        "Recommandations",
      ],
      en: [
        "Scope",
        "Audit questions",
        "Findings",
        "Maturity level",
        "Recommendations",
      ],
    },
    usage: {
      fr: "À utiliser comme trame pour un mini audit ou une mission de cadrage.",
      en: "Use as a template for a lightweight audit or framing mission.",
    },
  },
  {
    slug: "roadmap-90-jours",
    title: {
      fr: "Feuille de route 90 jours",
      en: "90-day roadmap",
    },
    category: "roadmap",
    type: { fr: "Roadmap", en: "Roadmap" },
    level: { fr: "Débutant / Intermédiaire", en: "Beginner / Intermediate" },
    summary: {
      fr: "Un modèle simple pour transformer un diagnostic en plan d’action priorisé.",
      en: "A simple model to turn a diagnosis into a prioritized action plan.",
    },
    includes: {
      fr: ["Actions 30/60/90", "Responsables", "Quick wins", "Preuves attendues"],
      en: ["30/60/90 actions", "Owners", "Quick wins", "Expected evidence"],
    },
    usage: {
      fr: "À utiliser après un audit ou un diagnostic de maturité.",
      en: "Use after an audit or maturity diagnosis.",
    },
  },
  {
    slug: "raci-template",
    title: {
      fr: "Modèle de RACI Data Governance",
      en: "Data Governance RACI template",
    },
    category: "raci",
    type: { fr: "Template", en: "Template" },
    level: { fr: "Débutant", en: "Beginner" },
    summary: {
      fr: "Une base pour clarifier les responsabilités autour des sujets data critiques.",
      en: "A basis to clarify responsibilities around critical data topics.",
    },
    includes: {
      fr: ["Responsible", "Accountable", "Consulted", "Informed"],
      en: ["Responsible", "Accountable", "Consulted", "Informed"],
    },
    usage: {
      fr: "À adapter par domaine métier ou processus.",
      en: "Adapt by business domain or process.",
    },
  },
  {
    slug: "scorecard-qualite",
    title: {
      fr: "Exemple de scorecard qualité de données",
      en: "Example data quality scorecard",
    },
    category: "quality",
    type: { fr: "Scorecard", en: "Scorecard" },
    level: { fr: "Intermédiaire", en: "Intermediate" },
    summary: {
      fr: "Une structure simple pour piloter complétude, cohérence, validité et actualité.",
      en: "A simple structure to monitor completeness, consistency, validity and timeliness.",
    },
    includes: {
      fr: ["Dimensions", "Règles", "Seuils", "Statuts", "Responsables"],
      en: ["Dimensions", "Rules", "Thresholds", "Statuses", "Owners"],
    },
    usage: {
      fr: "À utiliser dans les revues qualité et comités de gouvernance.",
      en: "Use in quality reviews and governance committees.",
    },
  },
  {
    slug: "mini-audit-rgpd",
    title: {
      fr: "Exemple de mini audit RGPD",
      en: "Example lightweight GDPR audit",
    },
    category: "gdpr",
    type: { fr: "Checklist d’audit", en: "Audit checklist" },
    level: { fr: "Intermédiaire", en: "Intermediate" },
    summary: {
      fr: "Une trame simple pour auditer registre, information, base légale, droits et sécurité.",
      en: "A simple structure to audit records, notices, lawful basis, rights and security.",
    },
    includes: {
      fr: ["Registre", "Information", "Base légale", "Sous-traitants", "Droits"],
      en: ["Records", "Notices", "Lawful basis", "Processors", "Rights"],
    },
    usage: {
      fr: "Parfait pour une PME ou un périmètre limité.",
      en: "Perfect for an SME or a limited scope.",
    },
  },
  {
    slug: "registre-usages-ia-template",
    title: {
      fr: "Modèle de registre des usages IA",
      en: "AI use case register template",
    },
    category: "ai",
    type: { fr: "Template", en: "Template" },
    level: { fr: "Intermédiaire", en: "Intermediate" },
    summary: {
      fr: "Une base pour inventorier les cas d’usage IA, leurs finalités, risques et responsables.",
      en: "A basis to inventory AI use cases, purposes, risks and owners.",
    },
    includes: {
      fr: ["Finalité", "Équipe", "Propriétaire", "Données", "Risque"],
      en: ["Purpose", "Team", "Owner", "Data", "Risk"],
    },
    usage: {
      fr: "Très utile pour la gouvernance IA et l’AI Act readiness.",
      en: "Very useful for AI governance and AI Act readiness.",
    },
  },
  {
    slug: "registre-risques-ia",
    title: {
      fr: "Exemple de registre des risques IA",
      en: "Example AI risk register",
    },
    category: "ai",
    type: { fr: "Registre", en: "Register" },
    level: { fr: "Intermédiaire / Avancé", en: "Intermediate / Advanced" },
    summary: {
      fr: "Une structure de registre pour suivre les risques, mesures, responsables et statuts.",
      en: "A register structure to track risks, measures, owners and statuses.",
    },
    includes: {
      fr: ["Risque", "Impact", "Mesure", "Responsable", "Statut"],
      en: ["Risk", "Impact", "Measure", "Owner", "Status"],
    },
    usage: {
      fr: "À relier au registre des usages IA et aux évaluations de risque.",
      en: "Link with the AI use case register and risk assessments.",
    },
  },
  {
    slug: "preuve-controles",
    title: {
      fr: "Checklist de preuves de contrôle",
      en: "Control evidence checklist",
    },
    category: "audit",
    type: { fr: "Checklist", en: "Checklist" },
    level: { fr: "Intermédiaire", en: "Intermediate" },
    summary: {
      fr: "Une liste de preuves possibles pour démontrer l’existence et l’efficacité d’un contrôle.",
      en: "A list of possible evidence to demonstrate the existence and effectiveness of a control.",
    },
    includes: {
      fr: ["Documents", "Captures", "Exports", "Logs", "Comptes rendus"],
      en: ["Documents", "Screenshots", "Exports", "Logs", "Meeting notes"],
    },
    usage: {
      fr: "Très utile pour audits, auto-évaluations et conformité.",
      en: "Very useful for audits, self-assessments and compliance.",
    },
  },
];

export function getDocumentCategoryLabel(
  category: DocumentCategory,
  locale: "fr" | "en"
) {
  const labels = {
    fr: {
      audit: "Audit",
      roadmap: "Roadmap",
      raci: "RACI",
      quality: "Qualité",
      gdpr: "RGPD",
      ai: "IA",
    },
    en: {
      audit: "Audit",
      roadmap: "Roadmap",
      raci: "RACI",
      quality: "Quality",
      gdpr: "GDPR",
      ai: "AI",
    },
  };

  return labels[locale][category];
}