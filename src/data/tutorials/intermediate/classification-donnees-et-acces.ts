import type { TutorialItem } from "../types";

export const classificationDonneesEtAcces: TutorialItem = {
  slug: "classification-donnees-et-acces",
  title: {
    fr: "Classification des données et gestion des accès",
    en: "Data classification and access management",
  },
  level: {
    fr: "Intermédiaire",
    en: "Intermediate",
  },
  category: {
    fr: "Sécurité & conformité",
    en: "Security & compliance",
  },
  duration: "24 min",
  xp: 160,
  excerpt: {
    fr: "Apprends à structurer une logique simple de classification des données et de maîtrise des accès.",
    en: "Learn how to structure a simple data classification and access control logic.",
  },
  objectives: {
    fr: [
      "Comprendre l’intérêt de classifier les données",
      "Définir des niveaux simples de sensibilité",
      "Relier classification et règles d’accès",
    ],
    en: [
      "Understand the value of classifying data",
      "Define simple sensitivity levels",
      "Connect classification and access rules",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi classifier les données",
        en: "1. Why classify data",
      },
      paragraphs: {
        fr: [
          "Toutes les données n’ont pas la même criticité. Les traiter de manière uniforme crée soit trop de rigidité, soit trop d’exposition.",
          "La classification permet d’adapter les règles de protection, d’usage, de conservation et de contrôle au bon niveau.",
        ],
        en: [
          "Not all data has the same criticality. Treating everything the same creates either too much rigidity or too much exposure.",
          "Classification helps adapt protection, usage, retention and control rules at the right level.",
        ],
      },
    },
    {
      title: {
        fr: "2. Une classification simple et utile",
        en: "2. A simple and useful classification",
      },
      paragraphs: {
        fr: [
          "Pour une organisation qui démarre, une logique publique / interne / confidentielle est souvent suffisante.",
          "On peut ensuite y ajouter une catégorie spécifique pour les données personnelles sensibles ou réglementées.",
        ],
        en: [
          "For an organization that is just starting, a public / internal / confidential logic is often enough.",
          "A specific category can then be added for sensitive or regulated personal data.",
        ],
      },
    },
    {
      title: {
        fr: "3. Relier classification et accès",
        en: "3. Connecting classification and access",
      },
      paragraphs: {
        fr: [
          "Classifier sans traduire cela en règles d’accès ne sert pas à grand-chose.",
          "Chaque niveau doit être relié à des principes : qui peut voir, exporter, modifier, partager, ou conserver les données.",
        ],
        en: [
          "Classifying data without translating it into access rules has little value.",
          "Each level should be linked to principles: who may view, export, modify, share or retain the data.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Une matrice de classification simple",
      "Des règles d’accès associées",
      "Une base de revue des accès",
    ],
    en: [
      "A simple classification matrix",
      "Associated access rules",
      "A basis for access review",
    ],
  },
  quickTips: {
    fr: [
      "Commence simple.",
      "Relie toujours classification et actions concrètes.",
    ],
    en: [
      "Start simple.",
      "Always connect classification to concrete actions.",
    ],
  },
  recap: {
    fr: [
      "La classification rend la protection plus cohérente.",
      "Les règles d’accès doivent découler de la sensibilité.",
    ],
    en: [
      "Classification makes protection more consistent.",
      "Access rules should derive from sensitivity.",
    ],
  },
};