import type { TutorialItem } from "../types";

export const gouvernanceDocumentaire: TutorialItem = {
  slug: "gouvernance-documentaire",
  title: {
    fr: "Gouvernance documentaire",
    en: "Documentation governance",
  },
  level: {
    fr: "Intermédiaire",
    en: "Intermediate",
  },
  category: {
    fr: "Documentation",
    en: "Documentation",
  },
  duration: "21 min",
  xp: 150,
  excerpt: {
    fr: "Structure les documents clés pour rendre la gouvernance et la conformité plus lisibles et plus crédibles.",
    en: "Structure key documents to make governance and compliance more readable and credible.",
  },
  objectives: {
    fr: [
      "Comprendre le rôle des documents de gouvernance",
      "Identifier les documents prioritaires",
      "Construire une logique documentaire réutilisable",
    ],
    en: [
      "Understand the role of governance documents",
      "Identify priority documents",
      "Build a reusable documentation logic",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi la documentation compte",
        en: "1. Why documentation matters",
      },
      paragraphs: {
        fr: [
          "Une gouvernance peu documentée reste difficile à expliquer, à transmettre et à auditer.",
          "Les documents ne servent pas seulement à stocker de l’information : ils structurent les décisions et rendent les règles visibles.",
        ],
        en: [
          "Poorly documented governance is hard to explain, transmit and audit.",
          "Documents are not only used to store information: they structure decisions and make rules visible.",
        ],
      },
    },
    {
      title: {
        fr: "2. Les documents prioritaires",
        en: "2. Priority documents",
      },
      paragraphs: {
        fr: [
          "Dans une V1 crédible, il faut prioriser : politique, procédure, registre, matrice de responsabilités, support de preuve et plan d’action.",
          "Le but n’est pas d’écrire trop, mais d’écrire ce qui aide réellement à comprendre et piloter.",
        ],
        en: [
          "In a credible V1, you should prioritize: policy, procedure, register, responsibility matrix, evidence support and action plan.",
          "The goal is not to write too much, but to write what truly helps understanding and steering.",
        ],
      },
    },
    {
      title: {
        fr: "3. Rendre la documentation vivante",
        en: "3. Making documentation alive",
      },
      paragraphs: {
        fr: [
          "Un document utile a un propriétaire, une version, une date de revue et un usage réel.",
          "La documentation doit vivre avec l’organisation, pas rester figée dans un dossier oublié.",
        ],
        en: [
          "A useful document has an owner, a version, a review date and a real use.",
          "Documentation should evolve with the organization, not remain frozen in a forgotten folder.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Une cartographie documentaire simple",
      "Une liste de documents prioritaires",
      "Une logique de revue documentaire",
    ],
    en: [
      "A simple document map",
      "A list of priority documents",
      "A document review logic",
    ],
  },
  quickTips: {
    fr: [
      "Écris moins, mais mieux.",
      "Chaque document doit avoir un usage clair.",
    ],
    en: [
      "Write less, but better.",
      "Each document should have a clear purpose.",
    ],
  },
  recap: {
    fr: [
      "La documentation rend la gouvernance compréhensible.",
      "Une gouvernance sérieuse est toujours au moins un peu documentée.",
    ],
    en: [
      "Documentation makes governance understandable.",
      "Serious governance is always at least somewhat documented.",
    ],
  },
};