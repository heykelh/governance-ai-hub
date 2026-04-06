import type { TutorialItem } from "../types";

export const modeleMaturiteIa: TutorialItem = {
  slug: "modele-maturite-ia",
  title: {
    fr: "Construire un modèle de maturité IA",
    en: "Build an AI maturity model",
  },
  level: {
    fr: "Avancé",
    en: "Advanced",
  },
  category: {
    fr: "Pilotage IA",
    en: "AI Steering",
  },
  duration: "25 min",
  xp: 180,
  excerpt: {
    fr: "Évalue le niveau d’avancement d’une organisation sur la gouvernance de ses usages IA.",
    en: "Assess the advancement level of an organization regarding governance of its AI uses.",
  },
  objectives: {
    fr: [
      "Comprendre l’intérêt d’un modèle de maturité",
      "Définir des critères simples",
      "Relier la maturité à une roadmap",
    ],
    en: [
      "Understand the value of a maturity model",
      "Define simple criteria",
      "Connect maturity to a roadmap",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi un modèle de maturité",
        en: "1. Why a maturity model",
      },
      paragraphs: {
        fr: [
          "Une organisation peut difficilement progresser si elle ne sait pas où elle en est.",
          "Le modèle de maturité donne un langage commun pour évaluer, comparer et prioriser les actions.",
        ],
        en: [
          "An organization can hardly progress if it does not know where it stands.",
          "A maturity model provides a common language to assess, compare and prioritize actions.",
        ],
      },
    },
    {
      title: {
        fr: "2. Les critères à observer",
        en: "2. Criteria to observe",
      },
      paragraphs: {
        fr: [
          "Parmi les critères utiles : inventaire des usages, documentation, rôles, risques, contrôles, revue périodique, sensibilisation, logique de preuve.",
          "L’idée n’est pas de créer un modèle immense, mais un support lisible et actionnable.",
        ],
        en: [
          "Useful criteria include use case inventory, documentation, roles, risks, controls, periodic review, awareness and evidence logic.",
          "The idea is not to create a huge model, but a readable and actionable support.",
        ],
      },
    },
    {
      title: {
        fr: "3. Utiliser le modèle pour progresser",
        en: "3. Using the model to improve",
      },
      paragraphs: {
        fr: [
          "Le modèle n’a de valeur que s’il conduit à des décisions. Il doit faire apparaître les écarts les plus utiles à traiter.",
          "Il devient alors une base naturelle pour la roadmap et pour la communication aux sponsors.",
        ],
        en: [
          "The model only has value if it leads to decisions. It must make the most useful gaps visible.",
          "It then becomes a natural basis for the roadmap and for communication with sponsors.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Une grille de maturité IA",
      "Une lecture des écarts",
      "Une base pour la roadmap",
    ],
    en: [
      "An AI maturity grid",
      "A reading of the gaps",
      "A basis for the roadmap",
    ],
  },
  quickTips: {
    fr: [
      "Commence avec peu de niveaux.",
      "Relie toujours la maturité à des actions concrètes.",
    ],
    en: [
      "Start with a small number of levels.",
      "Always connect maturity to concrete actions.",
    ],
  },
  recap: {
    fr: [
      "Le modèle de maturité aide à évaluer et prioriser.",
      "Il doit rester simple et utile.",
    ],
    en: [
      "A maturity model helps assess and prioritize.",
      "It must remain simple and useful.",
    ],
  },
};