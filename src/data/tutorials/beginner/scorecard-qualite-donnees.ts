import type { TutorialItem } from "../types";

export const scorecardQualiteDonnees: TutorialItem = {
  slug: "scorecard-qualite-donnees",
  title: {
    fr: "Bâtir une scorecard qualité de données",
    en: "Build a data quality scorecard",
  },
  level: {
    fr: "Intermédiaire",
    en: "Intermediate",
  },
  category: {
    fr: "Qualité des données",
    en: "Data Quality",
  },
  duration: "22 min",
  xp: 140,
  excerpt: {
    fr: "Un tutoriel détaillé pour transformer les problèmes de qualité en indicateurs pilotables.",
    en: "A detailed tutorial to turn data quality issues into manageable indicators.",
  },
  objectives: {
    fr: [
      "Choisir les bonnes dimensions de qualité",
      "Définir des contrôles et des seuils",
      "Construire un support de pilotage simple",
    ],
    en: [
      "Choose the right quality dimensions",
      "Define controls and thresholds",
      "Build a simple steering support",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi une scorecard",
        en: "1. Why a scorecard",
      },
      paragraphs: {
        fr: [
          "La qualité reste souvent un sujet flou tant qu’elle n’est pas traduite en indicateurs visibles.",
          "Une scorecard permet de passer d’une impression générale à un suivi précis par règle, dimension et responsable.",
        ],
        en: [
          "Quality often remains vague until it is translated into visible indicators.",
          "A scorecard moves you from a general impression to precise tracking by rule, dimension and owner.",
        ],
      },
    },
    {
      title: {
        fr: "2. Les éléments clés",
        en: "2. Key elements",
      },
      paragraphs: {
        fr: [
          "Une bonne scorecard contient des dimensions de qualité, des règles observables, des seuils, des statuts, des responsables et une fréquence de revue.",
          "Elle doit rester simple, lisible et directement exploitable par les métiers.",
        ],
        en: [
          "A good scorecard includes quality dimensions, observable rules, thresholds, statuses, owners and a review frequency.",
          "It must remain simple, readable and directly usable by business teams.",
        ],
      },
    },
    {
      title: {
        fr: "3. Comment la faire vivre",
        en: "3. How to keep it alive",
      },
      paragraphs: {
        fr: [
          "La scorecard doit être revue régulièrement et reliée à des actions. Sinon, elle devient un simple tableau oublié.",
          "Elle devient vraiment utile lorsqu’elle sert à arbitrer les priorités, suivre les anomalies et montrer les progrès.",
        ],
        en: [
          "The scorecard must be reviewed regularly and linked to actions. Otherwise, it becomes just another forgotten table.",
          "It becomes truly useful when it helps prioritize, track issues and show progress.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Une scorecard qualité",
      "Une liste de règles de contrôle",
      "Un support de pilotage simple",
    ],
    en: [
      "A quality scorecard",
      "A list of control rules",
      "A simple steering support",
    ],
  },
  quickTips: {
    fr: [
      "Privilégie peu d’indicateurs bien suivis.",
      "Lie toujours un indicateur à un responsable.",
    ],
    en: [
      "Prefer a small number of well-monitored indicators.",
      "Always link an indicator to an owner.",
    ],
  },
  recap: {
    fr: [
      "La scorecard transforme la qualité en pilotage visible.",
      "Elle doit être simple, actionnable et revue régulièrement.",
    ],
    en: [
      "A scorecard turns quality into visible steering.",
      "It must be simple, actionable and reviewed regularly.",
    ],
  },
};