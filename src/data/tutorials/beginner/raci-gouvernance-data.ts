import type { TutorialItem } from "../types";

export const raciGouvernanceData: TutorialItem = {
  slug: "raci-gouvernance-data",
  title: {
    fr: "Construire un RACI de gouvernance data",
    en: "Build a data governance RACI",
  },
  level: {
    fr: "Débutant",
    en: "Beginner",
  },
  category: {
    fr: "Gouvernance Data",
    en: "Data Governance",
  },
  duration: "20 min",
  xp: 120,
  excerpt: {
    fr: "Un tutoriel opérationnel pour clarifier les responsabilités autour des données.",
    en: "An operational tutorial to clarify responsibilities around data.",
  },
  objectives: {
    fr: [
      "Comprendre la logique d’un RACI",
      "Attribuer des rôles clairs",
      "Éviter les conflits de responsabilité",
    ],
    en: [
      "Understand the logic of a RACI",
      "Assign clear roles",
      "Avoid accountability conflicts",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi un RACI est indispensable",
        en: "1. Why a RACI is essential",
      },
      paragraphs: {
        fr: [
          "Dans beaucoup d’organisations, les sujets data échouent non pas faute d’outils, mais faute de clarté sur qui doit faire quoi.",
          "Le RACI clarifie qui exécute, qui décide, qui est consulté et qui doit être informé. Il réduit les zones grises et améliore la coordination entre métiers, data, IT et conformité.",
        ],
        en: [
          "In many organizations, data topics fail not because of tools, but because it is unclear who should do what.",
          "RACI clarifies who executes, who decides, who is consulted and who should be informed. It reduces grey zones and improves coordination between business, data, IT and compliance teams.",
        ],
      },
    },
    {
      title: {
        fr: "2. Comment construire ton premier RACI",
        en: "2. How to build your first RACI",
      },
      paragraphs: {
        fr: [
          "Commence par choisir un périmètre simple : qualité client, accès, dictionnaire, incident ou référentiel.",
          "Liste ensuite les acteurs concernés : métiers, data, IT, sécurité, conformité. Attribue enfin les rôles de manière lisible et limitée, sans multiplier les exceptions.",
        ],
        en: [
          "Start by choosing a simple scope: customer quality, access, dictionary, incident or master data.",
          "Then list the relevant actors: business, data, IT, security, compliance. Finally assign the roles in a clear and limited way, without multiplying exceptions.",
        ],
      },
    },
    {
      title: {
        fr: "3. Les erreurs fréquentes",
        en: "3. Common mistakes",
      },
      paragraphs: {
        fr: [
          "Un RACI avec trop de personnes responsables devient illisible. Un RACI sans owner métier devient rapidement théorique.",
          "L’objectif n’est pas d’être exhaustif, mais de rendre les responsabilités compréhensibles et actionnables.",
        ],
        en: [
          "A RACI with too many responsible parties becomes unreadable. A RACI without a business owner quickly becomes theoretical.",
          "The goal is not to be exhaustive, but to make responsibilities understandable and actionable.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Un tableau RACI simple",
      "Une clarification des rôles clés",
    ],
    en: [
      "A simple RACI table",
      "A clarification of key roles",
    ],
  },
  quickTips: {
    fr: [
      "Garde le RACI lisible.",
      "Commence par un périmètre critique mais simple.",
    ],
    en: [
      "Keep the RACI readable.",
      "Start with a critical but simple scope.",
    ],
  },
  recap: {
    fr: [
      "Le RACI sert à clarifier les responsabilités.",
      "C’est l’un des premiers livrables les plus utiles.",
    ],
    en: [
      "RACI clarifies responsibilities.",
      "It is one of the most useful first deliverables.",
    ],
  },
};