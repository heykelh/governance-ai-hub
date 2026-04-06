export type BlogSection = {
  title: {
    fr: string;
    en: string;
  };
  paragraphs: {
    fr: string[];
    en: string[];
  };
};

export type BlogPost = {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  excerpt: {
    fr: string;
    en: string;
  };
  category: {
    fr: string;
    en: string;
  };
  readTime: string;
  publishedAt: string;
  featured?: boolean;
  sections: BlogSection[];
  keyTakeaways: {
    fr: string[];
    en: string[];
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-act-2026-ce-qui-va-vraiment-changer",
    title: {
      fr: "AI Act 2026 : ce qui va vraiment changer",
      en: "AI Act 2026: what will really change",
    },
    excerpt: {
      fr: "Pourquoi 2026 marque le vrai passage de la théorie à l’exécution pour la gouvernance de l’IA dans les entreprises.",
      en: "Why 2026 marks the real shift from theory to execution for AI governance in companies.",
    },
    category: {
      fr: "AI Act",
      en: "AI Act",
    },
    readTime: "7 min",
    publishedAt: "2026-04-06",
    featured: true,
    sections: [
      {
        title: {
          fr: "2026 n’est pas le début de l’AI Act, mais le début de sa mise sous tension",
          en: "2026 is not the start of the AI Act, but the start of real pressure to implement it",
        },
        paragraphs: {
          fr: [
            "Beaucoup d’équipes parlent encore de l’AI Act comme d’un texte “à venir”. En réalité, le calendrier est déjà engagé. Ce qui change en 2026, ce n’est pas l’existence du règlement, mais son poids opérationnel pour les organisations qui utilisent déjà l’IA.",
            "La vraie difficulté n’est pas juridique. Elle est organisationnelle. Les entreprises découvrent qu’elles ont des usages IA dispersés, peu documentés, parfois branchés à des données sensibles, et presque jamais intégrés dans une logique de gouvernance claire.",
          ],
          en: [
            "Many teams still talk about the AI Act as if it were a future regulation. In reality, the timeline is already underway. What changes in 2026 is not the existence of the regulation, but its operational weight for organizations already using AI.",
            "The real difficulty is not legal. It is organizational. Companies are discovering they already have scattered AI uses, weak documentation, sometimes connections to sensitive data, and almost no clear governance logic around them.",
          ],
        },
      },
      {
        title: {
          fr: "Le vrai sujet : être capable de prouver ce que l’on maîtrise",
          en: "The real issue: being able to prove what you control",
        },
        paragraphs: {
          fr: [
            "Le point que beaucoup sous-estiment est simple : l’AI Act pousse les entreprises vers une logique de preuve. Il ne suffira pas de dire qu’un usage IA existe. Il faudra pouvoir expliquer sa finalité, son périmètre, ses responsables, ses risques et ses mécanismes de contrôle.",
            "Cela change profondément la manière de travailler. On passe d’une logique de test opportuniste à une logique de documentation, de validation et de pilotage. C’est exactement là que la gouvernance IA devient un sujet business, pas seulement un sujet juridique ou technique.",
          ],
          en: [
            "The point many teams underestimate is simple: the AI Act pushes organizations toward an evidence logic. It will not be enough to say an AI use exists. Companies will need to explain its purpose, scope, owners, risks and control mechanisms.",
            "This fundamentally changes the way teams work. Organizations move from opportunistic testing to documentation, validation and steering. This is exactly where AI governance becomes a business topic, not only a legal or technical one.",
          ],
        },
      },
      {
        title: {
          fr: "Ce que les entreprises devraient faire dès maintenant",
          en: "What companies should do now",
        },
        paragraphs: {
          fr: [
            "Le point de départ le plus rentable reste souvent très simple : faire l’inventaire des usages IA, identifier les cas sensibles, clarifier les owners et structurer un premier socle documentaire.",
            "Dans la pratique, cela veut dire créer un registre des usages IA, un registre des risques, une logique de revue, et quelques règles simples de documentation. Ces éléments ne rendent pas une organisation “parfaite”, mais ils la rendent beaucoup plus lisible et beaucoup plus crédible.",
          ],
          en: [
            "The most valuable starting point is often very simple: inventory AI uses, identify sensitive cases, clarify owners and structure an initial documentation baseline.",
            "In practice, this means creating an AI use case register, a risk register, a review logic, and a few simple documentation rules. These elements do not make an organization perfect, but they make it much more readable and much more credible.",
          ],
        },
      },
    ],
    keyTakeaways: {
      fr: [
        "2026 correspond au vrai moment de bascule opérationnelle.",
        "Le sujet central est la documentation et la preuve.",
        "L’inventaire des usages IA est souvent le meilleur point de départ.",
      ],
      en: [
        "2026 is the real operational turning point.",
        "The central issue is documentation and evidence.",
        "An AI use case inventory is often the best starting point.",
      ],
    },
  },

  {
    slug: "registre-usages-ia-document-le-plus-rentable",
    title: {
      fr: "Le registre des usages IA : le document le plus rentable à créer",
      en: "The AI use case register: the most valuable document to create",
    },
    excerpt: {
      fr: "Pourquoi ce document simple change immédiatement la qualité de la gouvernance IA dans une organisation.",
      en: "Why this simple document immediately improves the quality of AI governance in an organization.",
    },
    category: {
      fr: "Gouvernance IA",
      en: "AI Governance",
    },
    readTime: "6 min",
    publishedAt: "2026-04-06",
    featured: true,
    sections: [
      {
        title: {
          fr: "Un problème très simple : beaucoup d’IA, très peu de visibilité",
          en: "A very simple problem: lots of AI, very little visibility",
        },
        paragraphs: {
          fr: [
            "Dans beaucoup d’organisations, les usages IA se développent plus vite que la gouvernance. Des copilots sont testés, des modèles sont intégrés, des automatisations apparaissent, mais personne n’a de vue consolidée.",
            "Ce manque de visibilité rend impossible toute gouvernance sérieuse. On ne peut pas prioriser les risques, clarifier les responsabilités ou préparer une conformité crédible si l’on ne sait même pas où l’IA est utilisée.",
          ],
          en: [
            "In many organizations, AI uses grow faster than governance. Copilots are tested, models are integrated, automations appear, but nobody has a consolidated view.",
            "This lack of visibility makes serious governance impossible. You cannot prioritize risks, clarify responsibilities or prepare credible compliance if you do not even know where AI is used.",
          ],
        },
      },
      {
        title: {
          fr: "Pourquoi le registre change tout",
          en: "Why the register changes everything",
        },
        paragraphs: {
          fr: [
            "Le registre des usages IA est simple, mais il fait émerger une structure. Il oblige à nommer les cas d’usage, les owners, les données mobilisées, le niveau de sensibilité et le statut de documentation.",
            "À partir de là, la gouvernance devient possible. Le registre ne résout pas tout à lui seul, mais il crée la base commune indispensable pour prioriser et piloter.",
          ],
          en: [
            "The AI use case register is simple, but it creates structure. It forces the organization to name use cases, owners, data involved, sensitivity level and documentation status.",
            "From that point on, governance becomes possible. The register does not solve everything on its own, but it creates the essential common baseline to prioritize and steer.",
          ],
        },
      },
      {
        title: {
          fr: "Le bon niveau de départ",
          en: "The right starting level",
        },
        paragraphs: {
          fr: [
            "Le piège serait de vouloir tout documenter immédiatement. Une bonne V1 reste légère : nom du cas d’usage, finalité, owner, données utilisées, niveau de criticité, documents existants.",
            "L’objectif n’est pas la perfection documentaire. L’objectif est de rendre les usages visibles, comparables et gouvernables.",
          ],
          en: [
            "The trap would be to try to document everything immediately. A good V1 stays lightweight: use case name, purpose, owner, data used, criticality level, existing documents.",
            "The objective is not documentary perfection. The objective is to make AI uses visible, comparable and governable.",
          ],
        },
      },
    ],
    keyTakeaways: {
      fr: [
        "Sans inventaire, pas de gouvernance crédible.",
        "Le registre est un document simple à forte valeur.",
        "Une V1 légère est souvent la meilleure approche.",
      ],
      en: [
        "Without inventory, there is no credible governance.",
        "The register is a simple, high-value document.",
        "A lightweight V1 is often the best approach.",
      ],
    },
  },

  {
    slug: "genai-en-entreprise-ce-que-personne-ne-gouverne",
    title: {
      fr: "GenAI en entreprise : ce que tout le monde fait et que personne ne gouverne",
      en: "GenAI in the enterprise: what everyone does and nobody governs",
    },
    excerpt: {
      fr: "Les usages de GenAI explosent, mais la gouvernance, les règles d’usage et les preuves restent souvent absentes.",
      en: "GenAI uses are exploding, but governance, usage rules and evidence are still often missing.",
    },
    category: {
      fr: "GenAI",
      en: "GenAI",
    },
    readTime: "6 min",
    publishedAt: "2026-04-06",
    sections: [
      {
        title: {
          fr: "Le vrai décalage",
          en: "The real gap",
        },
        paragraphs: {
          fr: [
            "La GenAI se diffuse rapidement parce qu’elle est accessible, utile et séduisante. Mais cette facilité crée un effet dangereux : l’usage précède presque toujours le cadre.",
            "On voit ainsi des équipes injecter des données internes dans des outils externes, des prototypes devenir des usages quasi permanents, ou des outputs être repris dans des décisions sans contrôle clair.",
          ],
          en: [
            "GenAI spreads quickly because it is accessible, useful and attractive. But that ease creates a dangerous effect: usage almost always comes before the framework.",
            "As a result, teams feed internal data into external tools, prototypes become quasi-permanent uses, and outputs are reused in decisions without clear control.",
          ],
        },
      },
      {
        title: {
          fr: "Le problème n’est pas l’outil, mais l’absence de cadre",
          en: "The problem is not the tool, but the absence of a framework",
        },
        paragraphs: {
          fr: [
            "Le débat est souvent mal posé. Le sujet n’est pas de savoir si un outil de GenAI est “bon” ou “mauvais”. Le sujet est de savoir si l’organisation a défini des règles d’usage, des responsabilités, des limites et une logique de supervision.",
            "Sans cela, même un outil puissant et utile devient un risque difficile à maîtriser.",
          ],
          en: [
            "The debate is often framed badly. The issue is not whether a GenAI tool is good or bad. The real issue is whether the organization has defined usage rules, responsibilities, limits and a supervision logic.",
            "Without that, even a powerful and useful tool becomes a risk that is hard to control.",
          ],
        },
      },
      {
        title: {
          fr: "Les premières briques à mettre en place",
          en: "The first building blocks to set up",
        },
        paragraphs: {
          fr: [
            "Les premiers éléments utiles sont souvent très simples : guidelines internes, registre des usages, revue des accès aux données, principes de validation des outputs, et sensibilisation des équipes.",
            "Ces briques n’empêchent pas l’innovation. Elles lui donnent un cadre exploitable.",
          ],
          en: [
            "The first useful elements are often very simple: internal guidelines, a use case register, data access review, output validation principles and team awareness.",
            "These building blocks do not block innovation. They give it a usable framework.",
          ],
        },
      },
    ],
    keyTakeaways: {
      fr: [
        "La GenAI se diffuse plus vite que sa gouvernance.",
        "Le risque principal vient de l’absence de règles et de supervision.",
        "Un petit cadre bien conçu a déjà beaucoup de valeur.",
      ],
      en: [
        "GenAI spreads faster than its governance.",
        "The main risk comes from missing rules and supervision.",
        "A small but well-designed framework already creates value.",
      ],
    },
  },

  {
    slug: "rgpd-ia-documentation-avantage-concurrentiel",
    title: {
      fr: "RGPD + IA : pourquoi la documentation devient un avantage concurrentiel",
      en: "GDPR + AI: why documentation is becoming a competitive advantage",
    },
    excerpt: {
      fr: "Dans un contexte d’IA, la documentation n’est plus seulement une exigence de conformité : elle devient un facteur de maturité et de confiance.",
      en: "In an AI context, documentation is no longer only a compliance requirement: it becomes a maturity and trust factor.",
    },
    category: {
      fr: "RGPD & IA",
      en: "GDPR & AI",
    },
    readTime: "6 min",
    publishedAt: "2026-04-06",
    sections: [
      {
        title: {
          fr: "Le mauvais réflexe : voir la documentation comme une contrainte",
          en: "The wrong reflex: seeing documentation as a constraint",
        },
        paragraphs: {
          fr: [
            "Beaucoup d’équipes documentent uniquement pour “cocher une case”. Cette approche produit des documents pauvres, rarement relus, et peu utiles dans la décision.",
            "Or, avec l’IA, ce réflexe devient de plus en plus coûteux. Les usages sont plus complexes, les responsabilités plus diffuses et les attentes de preuve plus élevées.",
          ],
          en: [
            "Many teams document only to tick a box. That approach produces weak documents, rarely reviewed and barely useful for decision-making.",
            "With AI, this reflex becomes increasingly costly. Uses are more complex, responsibilities more diffuse and evidence expectations much higher.",
          ],
        },
      },
      {
        title: {
          fr: "Pourquoi la documentation change de statut",
          en: "Why documentation is changing status",
        },
        paragraphs: {
          fr: [
            "Une documentation claire rend les usages compréhensibles. Elle facilite les audits, accélère les arbitrages, réduit les zones grises et améliore la coordination entre métier, conformité, data et IT.",
            "Autrement dit, elle ne sert plus seulement à répondre à une question réglementaire. Elle devient un avantage d’exécution.",
          ],
          en: [
            "Clear documentation makes uses understandable. It facilitates audits, speeds up decisions, reduces grey zones and improves coordination between business, compliance, data and IT.",
            "In other words, it is no longer only used to answer a regulatory question. It becomes an execution advantage.",
          ],
        },
      },
      {
        title: {
          fr: "Les documents à forte valeur",
          en: "High-value documents",
        },
        paragraphs: {
          fr: [
            "Parmi les documents à forte valeur, on retrouve souvent le registre des traitements, le registre des usages IA, la logique de preuve, les politiques d’accès, les matrices de rôles et les supports de revue.",
            "Ces documents rassurent, structurent et rendent l’organisation beaucoup plus lisible face à ses propres enjeux.",
          ],
          en: [
            "Among the highest-value documents are often the processing register, the AI use case register, evidence logic, access policies, role matrices and review supports.",
            "These documents reassure, structure and make the organization much more readable in front of its own challenges.",
          ],
        },
      },
    ],
    keyTakeaways: {
      fr: [
        "La documentation devient un levier de confiance.",
        "Elle aide autant l’exécution que la conformité.",
        "Les bons documents accélèrent la maturité.",
      ],
      en: [
        "Documentation is becoming a trust lever.",
        "It supports execution as much as compliance.",
        "Good documents accelerate maturity.",
      ],
    },
  },

  {
    slug: "pourquoi-ai-governance-ne-peut-pas-etre-separee-data-governance",
    title: {
      fr: "Pourquoi la gouvernance IA ne peut pas être séparée de la Data Governance",
      en: "Why AI governance cannot be separated from data governance",
    },
    excerpt: {
      fr: "Séparer les deux crée des angles morts. Les réunir crée une base beaucoup plus solide pour gouverner les usages IA.",
      en: "Separating the two creates blind spots. Bringing them together creates a much stronger basis for governing AI uses.",
    },
    category: {
      fr: "Gouvernance",
      en: "Governance",
    },
    readTime: "5 min",
    publishedAt: "2026-04-06",
    sections: [
      {
        title: {
          fr: "L’illusion de deux mondes séparés",
          en: "The illusion of two separate worlds",
        },
        paragraphs: {
          fr: [
            "Certaines organisations créent un discours de gouvernance IA totalement séparé de leur gouvernance data. Sur le papier, cela semble clair. En pratique, cela fragilise tout.",
            "L’IA n’existe pas sans données. La qualité, la traçabilité, les owners, les règles d’accès et la documentation sont donc déjà des sujets de gouvernance data avant d’être des sujets de gouvernance IA.",
          ],
          en: [
            "Some organizations create an AI governance discourse completely separate from their data governance. On paper, this may look clear. In practice, it weakens everything.",
            "AI does not exist without data. Quality, traceability, owners, access rules and documentation are therefore data governance topics before they become AI governance topics.",
          ],
        },
      },
      {
        title: {
          fr: "Ce qui se casse quand on sépare",
          en: "What breaks when you separate them",
        },
        paragraphs: {
          fr: [
            "Quand les deux univers sont séparés, on voit apparaître des doublons, des owners différents, des documents incohérents et des zones grises sur les responsabilités.",
            "Le résultat est toujours le même : plus de complexité, moins de lisibilité, et moins de capacité à piloter.",
          ],
          en: [
            "When the two worlds are separated, organizations create duplicates, different owners, inconsistent documents and grey zones around responsibilities.",
            "The result is always the same: more complexity, less readability and less ability to steer effectively.",
          ],
        },
      },
      {
        title: {
          fr: "La bonne approche",
          en: "The right approach",
        },
        paragraphs: {
          fr: [
            "La bonne approche consiste à considérer la Data Governance comme la fondation, et l’AI Governance comme une couche supplémentaire qui ajoute risques, contrôles et exigences de documentation spécifiques.",
            "Cette vision évite de reconstruire un système parallèle. Elle permet au contraire d’étendre une base déjà utile.",
          ],
          en: [
            "The right approach is to view Data Governance as the foundation, and AI Governance as an additional layer adding specific risks, controls and documentation requirements.",
            "This avoids building a parallel system. Instead, it extends a foundation that is already useful.",
          ],
        },
      },
    ],
    keyTakeaways: {
      fr: [
        "La gouvernance IA repose sur la qualité et la traçabilité des données.",
        "Séparer les deux crée de la confusion.",
        "Les réunir rend la gouvernance plus cohérente et plus efficace.",
      ],
      en: [
        "AI governance relies on data quality and traceability.",
        "Separating the two creates confusion.",
        "Bringing them together makes governance more coherent and effective.",
      ],
    },
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}