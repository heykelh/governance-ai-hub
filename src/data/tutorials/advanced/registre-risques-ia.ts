import type { TutorialItem } from "../types";

export const registreRisquesIa: TutorialItem = {
  slug: "registre-risques-ia",
  title: {
    fr: "Construire un registre des risques IA",
    en: "Build an AI risk register",
  },
  level: {
    fr: "Avancé",
    en: "Advanced",
  },
  category: {
    fr: "Gouvernance IA",
    en: "AI Governance",
  },
  duration: "24 min",
  xp: 180,
  excerpt: {
    fr: "Documente les risques liés aux usages IA, leurs impacts, leurs mesures et leurs responsables.",
    en: "Document the risks linked to AI uses, their impacts, measures and owners.",
  },
  objectives: {
    fr: [
      "Identifier les grands types de risques IA",
      "Structurer un registre simple et pilotable",
      "Associer chaque risque à une mesure et un owner",
    ],
    en: [
      "Identify major AI risk types",
      "Structure a simple and manageable register",
      "Link each risk to a measure and an owner",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi un registre des risques IA",
        en: "1. Why an AI risk register",
      },
      paragraphs: {
        fr: [
          "Les usages IA génèrent des risques variés : erreurs, biais, manque de transparence, usage de données sensibles, dépendance à un fournisseur, défaut de validation ou de contrôle.",
          "Sans registre, ces risques restent diffus et difficiles à piloter.",
        ],
        en: [
          "AI uses generate various risks: errors, bias, lack of transparency, use of sensitive data, vendor dependency, lack of validation or control.",
          "Without a register, these risks remain diffuse and hard to steer.",
        ],
      },
    },
    {
      title: {
        fr: "2. Les colonnes utiles",
        en: "2. Useful columns",
      },
      paragraphs: {
        fr: [
          "Un registre simple peut déjà contenir : risque, description, impact, mesure existante, mesure attendue, owner, niveau, statut.",
          "Le but est de rendre les risques visibles et actionnables, pas de complexifier inutilement.",
        ],
        en: [
          "A simple register can already include: risk, description, impact, existing measure, expected measure, owner, level, status.",
          "The goal is to make risks visible and actionable, not unnecessarily complex.",
        ],
      },
    },
    {
      title: {
        fr: "3. Prioriser les risques",
        en: "3. Prioritizing risks",
      },
      paragraphs: {
        fr: [
          "Tous les risques ne doivent pas être traités avec la même intensité. Il faut prendre en compte la criticité, la probabilité, la sensibilité des données et le contexte métier.",
          "La priorisation donne au registre sa valeur de pilotage.",
        ],
        en: [
          "Not all risks should be handled with the same intensity. You need to consider criticality, likelihood, data sensitivity and business context.",
          "Prioritization is what gives the register its steering value.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Un registre des risques IA",
      "Une logique de priorisation des risques",
      "Une base de suivi",
    ],
    en: [
      "An AI risk register",
      "A risk prioritization logic",
      "A follow-up basis",
    ],
  },
  quickTips: {
    fr: [
      "Un risque sans owner reste théorique.",
      "Garde le registre lisible pour les métiers.",
    ],
    en: [
      "A risk without an owner remains theoretical.",
      "Keep the register readable for business teams.",
    ],
  },
  recap: {
    fr: [
      "Le registre rend les risques visibles.",
      "Il soutient la priorisation et le pilotage.",
    ],
    en: [
      "The register makes risks visible.",
      "It supports prioritization and steering.",
    ],
  },
};