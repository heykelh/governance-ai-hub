import type { TutorialItem } from "../types";

export const miniAuditRgpdPme: TutorialItem = {
  slug: "mini-audit-rgpd-pme",
  title: {
    fr: "Lancer un mini audit RGPD en PME",
    en: "Run a lightweight GDPR audit in an SME",
  },
  level: {
    fr: "Intermédiaire",
    en: "Intermediate",
  },
  category: {
    fr: "RGPD",
    en: "GDPR",
  },
  duration: "25 min",
  xp: 150,
  excerpt: {
    fr: "Une méthode simple pour lancer un mini audit opérationnel du RGPD et produire un premier plan d’action.",
    en: "A simple method to run a lightweight operational GDPR audit and produce a first action plan.",
  },
  objectives: {
    fr: [
      "Définir un périmètre simple",
      "Collecter des preuves utiles",
      "Faire ressortir des écarts et recommandations",
    ],
    en: [
      "Define a simple scope",
      "Collect useful evidence",
      "Highlight gaps and recommendations",
    ],
  },
  sections: [
    {
      title: {
        fr: "1. Pourquoi commencer petit",
        en: "1. Why start small",
      },
      paragraphs: {
        fr: [
          "Une PME n’a pas toujours les moyens de lancer un audit complet sur tous ses traitements. Il est donc plus réaliste de commencer par un périmètre réduit mais utile.",
          "Le mini audit permet d’obtenir rapidement une vision des principaux écarts sans immobiliser toute l’organisation.",
        ],
        en: [
          "An SME does not always have the capacity to launch a full audit on every processing activity. It is therefore more realistic to start with a limited but useful scope.",
          "A lightweight audit provides a quick view of the main gaps without freezing the whole organization.",
        ],
      },
    },
    {
      title: {
        fr: "2. Les questions minimales à poser",
        en: "2. The minimum questions to ask",
      },
      paragraphs: {
        fr: [
          "Le traitement est-il inscrit au registre ? Les personnes sont-elles informées ? La base légale est-elle claire ? Les accès sont-ils maîtrisés ? Les sous-traitants sont-ils encadrés ?",
          "Ces questions simples permettent déjà de dégager une photographie utile de la maturité opérationnelle.",
        ],
        en: [
          "Is the processing listed in the record? Are individuals informed? Is the legal basis clear? Is access controlled? Are processors managed?",
          "These simple questions already provide a useful picture of operational maturity.",
        ],
      },
    },
  ],
  deliverables: {
    fr: [
      "Une grille d’audit simplifiée",
      "Une synthèse des écarts",
      "Un mini plan d’action",
    ],
    en: [
      "A simplified audit grid",
      "A gap summary",
      "A mini action plan",
    ],
  },
  quickTips: {
    fr: [
      "La preuve est centrale dans tout audit.",
      "Un petit périmètre bien traité vaut mieux qu’un grand audit flou.",
    ],
    en: [
      "Evidence is central in every audit.",
      "A small well-executed scope is better than a huge vague audit.",
    ],
  },
  recap: {
    fr: [
      "Un mini audit doit être ciblé, concret et documenté.",
      "Les recommandations doivent être actionnables.",
    ],
    en: [
      "A lightweight audit must be targeted, concrete and documented.",
      "Recommendations must be actionable.",
    ],
  },
};