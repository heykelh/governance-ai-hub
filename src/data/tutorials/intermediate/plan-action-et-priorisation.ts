import type { TutorialItem } from "../types";

export const planActionEtPriorisation: TutorialItem = {
  slug: "plan-action-et-priorisation",
  title: {
    fr: "Plan d’action et priorisation",
    en: "Action plan and prioritization",
  },
  level: {
    fr: "Intermédiaire",
    en: "Intermediate",
  },
  category: {
    fr: "Pilotage",
    en: "Steering",
  },
  duration: "22 min",
  xp: 160,
  excerpt: {
    fr: "Transforme les constats d’audit ou de diagnostic en plan d’action lisible, crédible et pilotable.",
    en: "Turn audit or diagnostic findings into a readable, credible and manageable action plan.",
  },
  objectives: {
    fr: [
      "Structurer les écarts",
      "Définir des priorités",
      "Traduire les constats en actions réalistes",
    ],
    en: [
      "Structure the gaps",
      "Define priorities",
      "Turn findings into realistic actions",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi prioriser",
        en: "1. Why prioritize",
      },
      paragraphs: {
        fr: [
          "Toutes les actions n’ont pas le même impact. Une bonne priorisation évite l’effet catalogue d’idées sans exécution réelle.",
          "La priorisation aide à concentrer les efforts sur les risques, les quick wins et les points structurants.",
        ],
        en: [
          "Not all actions have the same impact. Good prioritization avoids the catalog effect of ideas without real execution.",
          "Prioritization helps focus efforts on risks, quick wins and structural topics.",
        ],
      },
    },
    {
      title: {
        fr: "2. Comment construire un plan crédible",
        en: "2. How to build a credible plan",
      },
      paragraphs: {
        fr: [
          "Chaque action doit partir d’un constat clair, avoir un responsable, une échéance, une preuve attendue et une logique de suivi.",
          "Un plan trop long ou trop abstrait perd vite sa valeur. Mieux vaut peu d’actions bien définies qu’une liste irréaliste.",
        ],
        en: [
          "Each action should start from a clear finding, have an owner, a deadline, expected evidence and a follow-up logic.",
          "A plan that is too long or too abstract quickly loses its value. A small number of well-defined actions is better than an unrealistic list.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Un plan d’action priorisé",
      "Une matrice simple impact / effort / risque",
      "Une logique de suivi",
    ],
    en: [
      "A prioritized action plan",
      "A simple impact / effort / risk matrix",
      "A follow-up logic",
    ],
  },
  quickTips: {
    fr: [
      "Prévois peu d’actions, mais bien définies.",
      "Relie toujours action et preuve attendue.",
    ],
    en: [
      "Plan fewer actions, but define them well.",
      "Always connect actions and expected evidence.",
    ],
  },
  recap: {
    fr: [
      "Un bon plan d’action est concret et pilotable.",
      "La priorisation donne de la crédibilité à la démarche.",
    ],
    en: [
      "A good action plan is concrete and manageable.",
      "Prioritization gives credibility to the initiative.",
    ],
  },
};