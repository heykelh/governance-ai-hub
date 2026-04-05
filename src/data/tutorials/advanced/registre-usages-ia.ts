import type { TutorialItem } from "../types";

export const registreUsagesIa: TutorialItem = {
  slug: "registre-usages-ia",
  title: {
    fr: "Créer un registre des usages IA",
    en: "Build an AI use case register",
  },
  level: {
    fr: "Intermédiaire",
    en: "Intermediate",
  },
  category: {
    fr: "IA",
    en: "AI",
  },
  duration: "18 min",
  xp: 130,
  excerpt: {
    fr: "Un tutoriel pour structurer un inventaire exploitable des usages IA dans une organisation.",
    en: "A tutorial to structure a usable inventory of AI use cases in an organization.",
  },
  objectives: {
    fr: [
      "Inventorier les usages IA",
      "Structurer l’information utile",
      "Préparer une base de gouvernance IA",
    ],
    en: [
      "Inventory AI use cases",
      "Structure useful information",
      "Prepare a foundation for AI governance",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi un registre des usages IA ?",
        en: "1. Why an AI use case register?",
      },
      paragraphs: {
        fr: [
          "Beaucoup d’organisations utilisent déjà de l’IA sans avoir une vision consolidée de ces usages.",
          "Un registre permet d’éviter les angles morts, de prioriser les cas sensibles et de créer une base commune pour la gouvernance.",
        ],
        en: [
          "Many organizations already use AI without having a consolidated view of those uses.",
          "A register helps avoid blind spots, prioritize sensitive cases and build a common foundation for governance.",
        ],
      },
    },
    {
      title: {
        fr: "2. Quelles informations collecter ?",
        en: "2. What information should be collected?",
      },
      paragraphs: {
        fr: [
          "Finalité, équipe utilisatrice, propriétaire métier, données utilisées, niveau de sensibilité, niveau de criticité, documents existants ou attendus.",
          "L’objectif n’est pas de tout documenter dès le départ, mais de poser une base homogène.",
        ],
        en: [
          "Purpose, user team, business owner, data used, sensitivity level, criticality level, existing or expected documents.",
          "The goal is not to document everything from the start, but to create a homogeneous baseline.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Un registre initial des usages IA",
      "Une classification simple",
      "Une base pour l’AI Act readiness",
    ],
    en: [
      "An initial AI register",
      "A simple classification",
      "A basis for AI Act readiness",
    ],
  },
  quickTips: {
    fr: [
      "Garde le registre simple au départ.",
      "Le propriétaire métier doit toujours être identifié.",
    ],
    en: [
      "Keep the register simple at first.",
      "The business owner should always be identified.",
    ],
  },
  recap: {
    fr: [
      "Le registre IA donne de la visibilité.",
      "Il permet de prioriser et de gouverner.",
    ],
    en: [
      "The AI register creates visibility.",
      "It helps prioritize and govern.",
    ],
  },
};