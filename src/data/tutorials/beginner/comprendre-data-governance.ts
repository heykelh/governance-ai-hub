import type { TutorialItem } from "../types";

export const comprendreDataGovernance: TutorialItem = {
  slug: "comprendre-data-governance",
  title: {
    fr: "Comprendre la Data Governance",
    en: "Understand Data Governance",
  },
  level: {
    fr: "Débutant",
    en: "Beginner",
  },
  category: {
    fr: "Gouvernance Data",
    en: "Data Governance",
  },
  duration: "18 min",
  xp: 100,
  excerpt: {
    fr: "Un tutoriel fondamental pour comprendre ce qu’est réellement la Data Governance, à quoi elle sert, et pourquoi elle est devenue indispensable.",
    en: "A foundational tutorial to understand what Data Governance really is, what it is for, and why it has become essential.",
  },
  objectives: {
    fr: [
      "Comprendre la définition de la Data Governance",
      "Distinguer gouvernance, qualité et exploitation technique",
      "Relier la gouvernance aux enjeux métier",
    ],
    en: [
      "Understand the definition of Data Governance",
      "Differentiate governance, quality and technical operations",
      "Connect governance to business challenges",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Qu’est-ce que la Data Governance ?",
        en: "1. What is Data Governance?",
      },
      paragraphs: {
        fr: [
          "La Data Governance désigne l’ensemble des règles, rôles, processus et mécanismes de pilotage qui permettent à une organisation de gérer ses données de manière fiable, cohérente, sécurisée et utile.",
          "Elle ne consiste pas seulement à stocker des informations. Elle permet de décider qui peut créer, modifier, valider, utiliser et documenter les données.",
          "Une bonne gouvernance évite qu’une même donnée existe sous plusieurs versions contradictoires ou que personne ne sache qui est responsable lorsqu’un problème survient.",
        ],
        en: [
          "Data Governance refers to the set of rules, roles, processes and steering mechanisms that allow an organization to manage its data in a reliable, consistent, secure and useful way.",
          "It is not only about storing information. It helps define who can create, modify, validate, use and document data.",
          "Strong governance prevents the same data from existing in several contradictory versions and avoids situations where no one knows who is responsible when an issue appears.",
        ],
      },
    },
    {
      title: {
        fr: "2. Ce que la gouvernance n’est pas",
        en: "2. What governance is not",
      },
      paragraphs: {
        fr: [
          "La gouvernance ne se confond ni avec la BI, ni avec la qualité seule, ni avec la technique. Elle donne un cadre d’ensemble.",
          "La qualité de données est un composant de la gouvernance, mais la gouvernance inclut aussi les rôles, les règles d’accès, la documentation, la conformité et les arbitrages.",
        ],
        en: [
          "Governance is not the same as BI, data quality alone or technical architecture. It provides an overall framework.",
          "Data quality is one component of governance, but governance also includes roles, access rules, documentation, compliance and business decisions.",
        ],
      },
    },
    {
      title: {
        fr: "3. Pourquoi c’est devenu indispensable",
        en: "3. Why it has become essential",
      },
      paragraphs: {
        fr: [
          "Les entreprises manipulent aujourd’hui des données issues de multiples sources : CRM, ERP, outils cloud, fichiers métier, plateformes SaaS, APIs ou outils d’IA.",
          "Quand ces sources ne sont pas alignées, les équipes perdent du temps à vérifier les chiffres, corriger les écarts ou expliquer des contradictions entre tableaux de bord.",
          "La gouvernance rétablit la confiance en définissant les sources de référence, les règles communes, les contrôles attendus et les responsabilités.",
        ],
        en: [
          "Companies now handle data coming from many sources: CRM, ERP, cloud tools, business files, SaaS platforms, APIs or AI tools.",
          "When these sources are not aligned, teams waste time checking numbers, correcting gaps or explaining contradictions between dashboards.",
          "Governance restores trust by defining sources of truth, common rules, expected controls and responsibilities.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Une définition simple de la Data Governance",
      "Une explication claire de son périmètre",
      "Un exemple métier réutilisable",
    ],
    en: [
      "A simple definition of Data Governance",
      "A clear explanation of its scope",
      "A reusable business example",
    ],
  },
  quickTips: {
    fr: [
      "Explique toujours la gouvernance avec un exemple concret.",
      "Relie-la à la confiance dans les données.",
    ],
    en: [
      "Always explain governance with a concrete example.",
      "Connect it to trust in data.",
    ],
  },
  recap: {
    fr: [
      "La gouvernance organise les règles et responsabilités autour des données.",
      "Elle dépasse la simple qualité ou la technique.",
      "Elle devient indispensable dès que plusieurs systèmes et équipes utilisent les mêmes données.",
    ],
    en: [
      "Governance organizes rules and responsibilities around data.",
      "It goes beyond quality or technical concerns alone.",
      "It becomes essential as soon as several systems and teams use the same data.",
    ],
  },
};