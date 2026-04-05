import type { TutorialItem } from "../types";

export const enjeuxRisquesDataGovernance: TutorialItem = {
  slug: "enjeux-risques-data-governance",
  title: {
    fr: "Comprendre les enjeux et risques de la gouvernance des données",
    en: "Understand the challenges and risks of data governance",
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
  xp: 110,
  excerpt: {
    fr: "Un tutoriel pour relier la gouvernance aux enjeux concrets de qualité, sécurité, conformité et confiance métier.",
    en: "A tutorial to connect governance to concrete challenges of quality, security, compliance and business trust.",
  },
  objectives: {
    fr: [
      "Identifier les risques d’une donnée mal gouvernée",
      "Comprendre l’impact sur la décision",
      "Relier les risques à des besoins concrets de gouvernance",
    ],
    en: [
      "Identify the risks of poorly governed data",
      "Understand the impact on decision-making",
      "Connect risks to concrete governance needs",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi parler d’enjeux et de risques ?",
        en: "1. Why talk about challenges and risks?",
      },
      paragraphs: {
        fr: [
          "La gouvernance devient utile lorsqu’on la relie à des problèmes réels. Sans cela, elle reste théorique.",
          "Parler des enjeux permet de montrer ce que l’entreprise cherche à obtenir : de meilleures décisions, moins d’erreurs, plus de conformité et plus d’efficacité.",
          "Parler des risques permet de montrer ce que l’entreprise cherche à éviter : indicateurs faux, perte de confiance, non-conformité, incidents ou exposition de données sensibles.",
        ],
        en: [
          "Governance becomes useful when it is connected to real problems. Otherwise, it remains theoretical.",
          "Talking about challenges shows what the company wants to achieve: better decisions, fewer errors, more compliance and more efficiency.",
          "Talking about risks shows what the company wants to avoid: wrong indicators, loss of trust, non-compliance, incidents or exposure of sensitive data.",
        ],
      },
    },
    {
      title: {
        fr: "2. Les principaux risques",
        en: "2. The main risks",
      },
      paragraphs: {
        fr: [
          "Une donnée de mauvaise qualité dégrade les reportings, les KPI et les décisions de pilotage.",
          "Des règles floues ou des responsabilités mal réparties créent des zones grises où personne n’arbitre vraiment.",
          "Une documentation faible fragilise la capacité à auditer, démontrer ou corriger un traitement.",
        ],
        en: [
          "Poor-quality data degrades reporting, KPIs and steering decisions.",
          "Unclear rules or poorly assigned responsibilities create grey zones where nobody really arbitrates.",
          "Weak documentation undermines the ability to audit, demonstrate or correct a processing activity.",
        ],
      },
    },
    {
      title: {
        fr: "3. Le lien avec la conformité et la sécurité",
        en: "3. The connection with compliance and security",
      },
      paragraphs: {
        fr: [
          "Le RGPD demande de pouvoir démontrer ce qui est fait, pourquoi, et sous quelle responsabilité.",
          "La sécurité ne dépend pas seulement d’outils techniques ; elle dépend aussi de décisions, de revues d’accès, de classification et de contrôle.",
        ],
        en: [
          "GDPR requires organizations to demonstrate what is done, why, and under whose responsibility.",
          "Security does not only depend on technical tools; it also depends on decisions, access reviews, classification and controls.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Une cartographie simple des risques",
      "Une explication claire des enjeux",
    ],
    en: [
      "A simple risk map",
      "A clear explanation of the key challenges",
    ],
  },
  quickTips: {
    fr: [
      "Relie toujours la gouvernance à un impact métier visible.",
      "Parle en termes de confiance, risque et décision.",
    ],
    en: [
      "Always connect governance to a visible business impact.",
      "Speak in terms of trust, risk and decision-making.",
    ],
  },
  recap: {
    fr: [
      "Les enjeux de gouvernance touchent la qualité, la conformité, la sécurité et la décision.",
      "Les risques apparaissent lorsque les responsabilités et contrôles sont flous.",
    ],
    en: [
      "Governance challenges affect quality, compliance, security and decision-making.",
      "Risks appear when responsibilities and controls are unclear.",
    ],
  },
};