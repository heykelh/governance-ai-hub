import type { TutorialItem } from "../types";

export const controlesQualiteEtIndicateurs: TutorialItem = {
  slug: "controles-qualite-et-indicateurs",
  title: {
    fr: "Contrôles qualité et indicateurs",
    en: "Quality controls and indicators",
  },
  level: {
    fr: "Intermédiaire",
    en: "Intermediate",
  },
  category: {
    fr: "Qualité des données",
    en: "Data Quality",
  },
  duration: "23 min",
  xp: 160,
  excerpt: {
    fr: "Relie les dimensions de qualité à des contrôles observables et à des indicateurs utiles au pilotage.",
    en: "Connect quality dimensions to observable controls and useful steering indicators.",
  },
  objectives: {
    fr: [
      "Passer de la théorie qualité à des contrôles concrets",
      "Définir des indicateurs utiles",
      "Structurer un suivi simple des anomalies",
    ],
    en: [
      "Move from quality theory to concrete controls",
      "Define useful indicators",
      "Structure a simple issue tracking process",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Du principe au contrôle",
        en: "1. From principle to control",
      },
      paragraphs: {
        fr: [
          "Dire qu’une donnée doit être de qualité ne suffit pas. Il faut être capable d’écrire comment cette qualité est vérifiée.",
          "Un contrôle observable traduit une attente en règle mesurable.",
        ],
        en: [
          "Saying that data should be of good quality is not enough. You need to be able to describe how this quality is verified.",
          "An observable control translates an expectation into a measurable rule.",
        ],
      },
    },
    {
      title: {
        fr: "2. Les bons indicateurs",
        en: "2. The right indicators",
      },
      paragraphs: {
        fr: [
          "Un bon indicateur doit aider à décider, pas seulement à constater.",
          "Il doit être lié à une règle, un seuil, un responsable et une fréquence de revue.",
        ],
        en: [
          "A good indicator should help make decisions, not just observe.",
          "It must be linked to a rule, a threshold, an owner and a review frequency.",
        ],
      },
    },
    {
      title: {
        fr: "3. Suivre les anomalies",
        en: "3. Tracking issues",
      },
      paragraphs: {
        fr: [
          "Un pilotage qualité crédible suppose de suivre les anomalies dans le temps : détection, qualification, traitement, récurrence.",
          "C’est ce suivi qui transforme un problème ponctuel en amélioration continue.",
        ],
        en: [
          "Credible quality steering requires tracking issues over time: detection, qualification, remediation and recurrence.",
          "This tracking is what turns a one-off problem into continuous improvement.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Un tableau de contrôles qualité",
      "Une liste d’indicateurs utiles",
      "Un suivi simple des anomalies",
    ],
    en: [
      "A quality controls table",
      "A list of useful indicators",
      "A simple issue tracking support",
    ],
  },
  quickTips: {
    fr: [
      "Un indicateur sans seuil aide peu.",
      "Les anomalies doivent être suivies dans la durée.",
    ],
    en: [
      "An indicator without a threshold is of little help.",
      "Issues must be tracked over time.",
    ],
  },
  recap: {
    fr: [
      "La qualité devient crédible lorsqu’elle se voit.",
      "Contrôles, seuils et suivi sont les bases du pilotage.",
    ],
    en: [
      "Quality becomes credible when it becomes visible.",
      "Controls, thresholds and follow-up are the basis of steering.",
    ],
  },
};