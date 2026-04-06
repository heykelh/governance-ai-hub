import type { TutorialItem } from "../types";

export const registreTraitementsEtPreuve: TutorialItem = {
  slug: "registre-traitements-et-preuve",
  title: {
    fr: "Registre de traitements et logique de preuve",
    en: "Records of processing and evidence logic",
  },
  level: {
    fr: "Intermédiaire",
    en: "Intermediate",
  },
  category: {
    fr: "RGPD",
    en: "GDPR",
  },
  duration: "26 min",
  xp: 170,
  excerpt: {
    fr: "Comprends comment documenter les traitements et constituer une base de preuve crédible en conformité.",
    en: "Understand how to document processing activities and build a credible evidence base for compliance.",
  },
  objectives: {
    fr: [
      "Comprendre le rôle du registre des traitements",
      "Savoir quelles informations documenter",
      "Relier documentation et accountability",
    ],
    en: [
      "Understand the role of the record of processing activities",
      "Know which information to document",
      "Connect documentation and accountability",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. À quoi sert un registre de traitements ?",
        en: "1. What is a record of processing activities for?",
      },
      paragraphs: {
        fr: [
          "Le registre des traitements est l’un des supports centraux du RGPD. Il permet de rendre visible ce qui est traité, pourquoi, par qui et sous quelles conditions.",
          "Son intérêt n’est pas seulement réglementaire. C’est aussi un outil de compréhension, de cadrage et de pilotage.",
        ],
        en: [
          "The record of processing activities is one of the core GDPR supports. It makes visible what is processed, why, by whom and under which conditions.",
          "Its value is not only regulatory. It is also a tool for understanding, framing and steering.",
        ],
      },
    },
    {
      title: {
        fr: "2. Les informations minimales à documenter",
        en: "2. Minimum information to document",
      },
      paragraphs: {
        fr: [
          "Chaque traitement doit au minimum faire apparaître sa finalité, sa base légale, les catégories de données concernées, les personnes concernées, les destinataires, les durées de conservation et les mesures principales.",
          "Dans une logique de preuve, il est utile d’ajouter des éléments de contexte : propriétaire, système support, documents associés, date de revue.",
        ],
        en: [
          "Each processing activity should at least describe its purpose, lawful basis, relevant data categories, data subjects, recipients, retention periods and key measures.",
          "In an evidence logic, it is useful to add contextual information: owner, supporting system, associated documents, review date.",
        ],
      },
    },
    {
      title: {
        fr: "3. La logique de preuve",
        en: "3. The evidence logic",
      },
      paragraphs: {
        fr: [
          "Un bon registre ne sert pas seulement à remplir une obligation. Il permet d’orienter les audits, les revues, la priorisation et les demandes internes.",
          "Plus le registre est vivant, plus il devient un support de pilotage crédible.",
        ],
        en: [
          "A good register is not only about fulfilling an obligation. It helps guide audits, reviews, prioritization and internal requests.",
          "The more alive the register is, the more it becomes a credible steering support.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Un modèle simplifié de registre de traitements",
      "Une logique de revue documentaire",
      "Une base de preuve réutilisable",
    ],
    en: [
      "A simplified processing register template",
      "A documentation review logic",
      "A reusable evidence base",
    ],
  },
  quickTips: {
    fr: [
      "Ne documente pas uniquement pour le contrôle, documente pour comprendre.",
      "Prévois une date de revue et un responsable.",
    ],
    en: [
      "Do not document only for inspection, document to understand.",
      "Define a review date and an owner.",
    ],
  },
  recap: {
    fr: [
      "Le registre rend les traitements lisibles.",
      "Il soutient autant la conformité que le pilotage.",
      "La logique de preuve transforme la documentation en outil opérationnel.",
    ],
    en: [
      "The register makes processing activities readable.",
      "It supports both compliance and steering.",
      "Evidence logic turns documentation into an operational tool.",
    ],
  },
};