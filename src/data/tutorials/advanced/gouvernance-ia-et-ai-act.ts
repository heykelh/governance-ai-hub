import type { TutorialItem } from "../types";

export const gouvernanceIaEtAiAct: TutorialItem = {
  slug: "gouvernance-ia-et-ai-act",
  title: {
    fr: "Gouvernance de l’IA et AI Act",
    en: "AI governance and AI Act",
  },
  level: {
    fr: "Avancé",
    en: "Advanced",
  },
  category: {
    fr: "Gouvernance IA",
    en: "AI Governance",
  },
  duration: "28 min",
  xp: 190,
  excerpt: {
    fr: "Pose le cadre global de gouvernance des usages IA et comprends ce que l’AI Act change dans la documentation et le pilotage.",
    en: "Set the overall AI governance framework and understand what the AI Act changes in documentation and steering.",
  },
  objectives: {
    fr: [
      "Comprendre pourquoi gouverner les usages IA",
      "Relier inventaire, risques, rôles et documentation",
      "Situer l’impact de l’AI Act dans une organisation",
    ],
    en: [
      "Understand why AI uses must be governed",
      "Connect inventory, risk, roles and documentation",
      "Position the impact of the AI Act in an organization",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi la gouvernance IA devient nécessaire",
        en: "1. Why AI governance is becoming necessary",
      },
      paragraphs: {
        fr: [
          "Beaucoup d’organisations déploient des usages IA sans cadre consolidé. Cela crée des angles morts sur les données injectées, les responsabilités, les risques et les preuves.",
          "La gouvernance IA vise justement à donner de la visibilité, de la structure et des règles communes.",
        ],
        en: [
          "Many organizations deploy AI use cases without a consolidated framework. This creates blind spots on injected data, responsibilities, risks and evidence.",
          "AI governance aims to provide visibility, structure and common rules.",
        ],
      },
    },
    {
      title: {
        fr: "2. Ce que change l’AI Act",
        en: "2. What the AI Act changes",
      },
      paragraphs: {
        fr: [
          "L’AI Act pousse les entreprises à mieux inventorier leurs cas d’usage, évaluer les risques et formaliser la documentation associée.",
          "Même lorsque l’on n’est pas encore dans une logique très mature, il devient utile de structurer les bases de cette gouvernance.",
        ],
        en: [
          "The AI Act pushes organizations to better inventory their use cases, assess risks and formalize the related documentation.",
          "Even when maturity is still low, it becomes useful to structure the foundations of that governance.",
        ],
      },
    },
    {
      title: {
        fr: "3. Les briques minimales d’un cadre IA",
        en: "3. Minimum building blocks of an AI framework",
      },
      paragraphs: {
        fr: [
          "Un cadre IA crédible commence souvent par quelques briques simples : registre des usages, registre des risques, logique de revue, documentation des contrôles et gouvernance cible.",
          "L’objectif n’est pas d’être parfait immédiatement, mais d’être lisible et pilotable.",
        ],
        en: [
          "A credible AI framework often starts with a few simple building blocks: use case register, risk register, review logic, control documentation and target governance.",
          "The goal is not to be perfect immediately, but to be readable and manageable.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Une note de cadrage gouvernance IA",
      "Une cartographie initiale des briques IA",
      "Une base de priorisation des actions",
    ],
    en: [
      "An AI governance framing note",
      "An initial map of AI governance building blocks",
      "A basis for action prioritization",
    ],
  },
  quickTips: {
    fr: [
      "Commence par rendre les usages IA visibles.",
      "Ne sépare pas IA, données et gouvernance documentaire.",
    ],
    en: [
      "Start by making AI uses visible.",
      "Do not separate AI, data and documentation governance.",
    ],
  },
  recap: {
    fr: [
      "La gouvernance IA commence par l’inventaire et la documentation.",
      "L’AI Act renforce le besoin de structuration et de preuve.",
    ],
    en: [
      "AI governance starts with inventory and documentation.",
      "The AI Act reinforces the need for structure and evidence.",
    ],
  },
};