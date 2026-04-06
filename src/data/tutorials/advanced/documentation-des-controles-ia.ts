import type { TutorialItem } from "../types";

export const documentationDesControlesIa: TutorialItem = {
  slug: "documentation-des-controles-ia",
  title: {
    fr: "Documentation des contrôles IA",
    en: "AI control documentation",
  },
  level: {
    fr: "Avancé",
    en: "Advanced",
  },
  category: {
    fr: "Contrôles & documentation",
    en: "Controls & documentation",
  },
  duration: "23 min",
  xp: 175,
  excerpt: {
    fr: "Décris les contrôles organisationnels, documentaires et de validation qui encadrent les usages IA.",
    en: "Describe the organizational, documentary and validation controls framing AI uses.",
  },
  objectives: {
    fr: [
      "Identifier les principaux types de contrôles IA",
      "Comprendre la logique de preuve",
      "Formaliser une documentation simple mais crédible",
    ],
    en: [
      "Identify main types of AI controls",
      "Understand the evidence logic",
      "Formalize simple but credible documentation",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi documenter les contrôles",
        en: "1. Why document controls",
      },
      paragraphs: {
        fr: [
          "Une organisation peut affirmer qu’elle cadre ses usages IA. Mais sans documentation, cette affirmation reste fragile.",
          "Documenter les contrôles permet de montrer qu’il existe une gouvernance réelle : règles, validations, revues, restrictions et suivis.",
        ],
        en: [
          "An organization may claim that it frames its AI uses. But without documentation, that claim remains fragile.",
          "Documenting controls shows that real governance exists: rules, validations, reviews, restrictions and follow-up.",
        ],
      },
    },
    {
      title: {
        fr: "2. Les familles de contrôles",
        en: "2. Control families",
      },
      paragraphs: {
        fr: [
          "On peut distinguer les contrôles organisationnels, documentaires, d’accès, de validation des usages et de revue périodique.",
          "L’intérêt est de relier chaque contrôle à une preuve ou à un support visible.",
        ],
        en: [
          "You can distinguish organizational, documentary, access, use validation and periodic review controls.",
          "The key is to connect each control to visible evidence or a visible support.",
        ],
      },
    },
    {
      title: {
        fr: "3. Rendre les contrôles auditables",
        en: "3. Making controls auditable",
      },
      paragraphs: {
        fr: [
          "Un contrôle bien documenté est un contrôle que l’on peut expliquer, montrer et relier à un owner.",
          "Cette logique est essentielle dès qu’un audit, une revue interne ou une évaluation de maturité est lancée.",
        ],
        en: [
          "A well-documented control is a control that can be explained, shown and linked to an owner.",
          "This logic is essential whenever an audit, internal review or maturity assessment is launched.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Une matrice de contrôles IA",
      "Une logique de preuve associée",
      "Une base de revue des contrôles",
    ],
    en: [
      "An AI controls matrix",
      "An associated evidence logic",
      "A basis for control review",
    ],
  },
  quickTips: {
    fr: [
      "Un contrôle doit pouvoir être montré.",
      "Privilégie des contrôles compréhensibles et suivis.",
    ],
    en: [
      "A control must be demonstrable.",
      "Prefer understandable and monitored controls.",
    ],
  },
  recap: {
    fr: [
      "La documentation donne de la crédibilité aux contrôles.",
      "Les preuves rendent la gouvernance visible.",
    ],
    en: [
      "Documentation gives credibility to controls.",
      "Evidence makes governance visible.",
    ],
  },
};