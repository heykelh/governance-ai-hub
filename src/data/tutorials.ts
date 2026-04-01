export type TutorialSection = {
  title: {
    fr: string;
    en: string;
  };
  paragraphs: {
    fr: string[];
    en: string[];
  };
  bullets?: {
    fr: string[];
    en: string[];
  };
};

export type TutorialItem = {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  level: {
    fr: string;
    en: string;
  };
  category: {
    fr: string;
    en: string;
  };
  duration: string;
  xp: number;
  excerpt: {
    fr: string;
    en: string;
  };
  objectives: {
    fr: string[];
    en: string[];
  };
  sections: TutorialSection[];
  deliverables: {
    fr: string[];
    en: string[];
  };
  quickTips: {
    fr: string[];
    en: string[];
  };
  recap: {
    fr: string[];
    en: string[];
  };
};

export const tutorials: TutorialItem[] = [
  {
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
      fr: "Un tutoriel fondamental pour comprendre ce qu’est réellement la Data Governance, à quoi elle sert, et pourquoi elle est devenue indispensable dans les organisations modernes.",
      en: "A foundational tutorial to understand what Data Governance really is, what it is for, and why it has become essential in modern organizations.",
    },
    objectives: {
      fr: [
        "Comprendre la définition de la Data Governance",
        "Distinguer gouvernance, qualité et exploitation technique",
        "Relier la gouvernance aux enjeux métier, conformité et décision",
      ],
      en: [
        "Understand the definition of Data Governance",
        "Differentiate governance, quality and technical operations",
        "Connect governance to business, compliance and decision-making challenges",
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
            "Autrement dit, la gouvernance des données ne consiste pas seulement à stocker de l’information. Elle consiste à décider qui peut créer, modifier, valider, utiliser, documenter et contrôler les données au sein de l’entreprise.",
            "Une bonne gouvernance permet d’éviter qu’une même donnée existe sous plusieurs versions contradictoires, qu’aucun responsable ne sache répondre à une anomalie, ou qu’un reporting stratégique repose sur des informations peu fiables.",
          ],
          en: [
            "Data Governance refers to the set of rules, roles, processes and steering mechanisms that allow an organization to manage its data in a reliable, consistent, secure and useful way.",
            "In other words, data governance is not just about storing information. It is about deciding who can create, modify, validate, use, document and control data within the company.",
            "Strong governance prevents situations where the same data exists in several contradictory versions, where nobody knows who owns a data issue, or where strategic reporting is based on unreliable information.",
          ],
        },
        bullets: {
          fr: [
            "Elle structure les responsabilités",
            "Elle clarifie les règles d’usage",
            "Elle améliore la fiabilité des données",
            "Elle soutient la conformité et le pilotage",
          ],
          en: [
            "It structures responsibilities",
            "It clarifies usage rules",
            "It improves data reliability",
            "It supports compliance and steering",
          ],
        },
      },
      {
        title: {
          fr: "2. Ce que la Data Governance n’est pas",
          en: "2. What Data Governance is not",
        },
        paragraphs: {
          fr: [
            "Un débutant confond souvent la gouvernance avec la technique, la BI ou la qualité de données. En réalité, la gouvernance est plus large.",
            "La qualité de données est un composant de la gouvernance, mais la gouvernance inclut aussi les rôles, les règles d’accès, les standards, la documentation, l’arbitrage métier et la conformité.",
            "La BI, les dashboards ou l’analytique utilisent les données, mais ne définissent pas à eux seuls la manière dont ces données doivent être gouvernées.",
          ],
          en: [
            "Beginners often confuse governance with technical architecture, BI or data quality. In reality, governance is broader.",
            "Data quality is one component of governance, but governance also includes roles, access rules, standards, documentation, business arbitration and compliance.",
            "BI, dashboards and analytics use data, but they do not by themselves define how data should be governed.",
          ],
        },
      },
      {
        title: {
          fr: "3. Pourquoi la Data Governance est devenue indispensable",
          en: "3. Why Data Governance has become essential",
        },
        paragraphs: {
          fr: [
            "Dans la plupart des entreprises, les données viennent aujourd’hui de multiples sources : CRM, ERP, outils cloud, applications métier, fichiers Excel, solutions SaaS, IA générative, APIs, etc.",
            "Quand ces sources ne sont pas alignées, les équipes passent du temps à corriger les doublons, à vérifier les chiffres, à reconstituer les historiques, ou à expliquer pourquoi deux dashboards ne donnent pas le même résultat.",
            "La gouvernance devient alors indispensable pour restaurer la confiance. Elle permet de dire quelles sont les sources de référence, quelles règles s’appliquent, quels contrôles sont attendus et qui doit intervenir en cas de problème.",
          ],
          en: [
            "In most companies today, data comes from multiple sources: CRM, ERP, cloud tools, business applications, Excel files, SaaS platforms, generative AI, APIs, and more.",
            "When those sources are not aligned, teams spend time correcting duplicates, checking figures, reconstructing histories, or explaining why two dashboards show different numbers.",
            "Governance becomes essential to restore trust. It helps define which sources are authoritative, which rules apply, which controls are expected and who must act when issues occur.",
          ],
        },
      },
      {
        title: {
          fr: "4. Exemple simple",
          en: "4. Simple example",
        },
        paragraphs: {
          fr: [
            "Imagine une entreprise où le chiffre d’affaires client est suivi dans un CRM, un ERP et un tableau Excel local. Si personne n’a défini quelle source fait foi, les métiers peuvent prendre des décisions contradictoires.",
            "Avec une gouvernance claire, l’entreprise désigne une source de référence, documente les règles de calcul, définit un responsable métier, met en place un contrôle de cohérence et réduit les écarts entre systèmes.",
            "Le bénéfice ne vient pas seulement de la donnée elle-même, mais du cadre collectif mis en place autour d’elle.",
          ],
          en: [
            "Imagine a company where customer revenue is tracked in a CRM, an ERP and a local Excel file. If no one has defined which source is authoritative, business teams can make contradictory decisions.",
            "With clear governance, the company designates a source of truth, documents calculation rules, assigns a business owner, sets up a consistency control and reduces system discrepancies.",
            "The benefit does not come only from the data itself, but from the collective framework built around it.",
          ],
        },
      },
      {
        title: {
          fr: "5. Ce qu’un débutant doit retenir",
          en: "5. What a beginner should remember",
        },
        paragraphs: {
          fr: [
            "La Data Governance n’est pas un luxe réservé aux grandes entreprises. C’est un cadre de base pour éviter le chaos informationnel, clarifier les responsabilités et rendre les données utilisables.",
            "Quand tu présentes la gouvernance, pense toujours à la relier à des situations concrètes : fiabilité des KPI, conformité RGPD, sécurité, qualité de données, efficacité opérationnelle et prise de décision.",
          ],
          en: [
            "Data Governance is not a luxury reserved for large enterprises. It is a foundational framework to avoid information chaos, clarify responsibilities and make data usable.",
            "When you talk about governance, always connect it to concrete situations: KPI reliability, GDPR compliance, security, data quality, operational efficiency and decision-making.",
          ],
        },
      },
    ],
    deliverables: {
      fr: [
        "Une définition claire de la Data Governance",
        "Une explication simple de la différence entre gouvernance, qualité et BI",
        "Un exemple métier réutilisable en entretien ou mission",
      ],
      en: [
        "A clear definition of Data Governance",
        "A simple explanation of the difference between governance, quality and BI",
        "A reusable business example for interviews or consulting work",
      ],
    },
    quickTips: {
      fr: [
        "Explique toujours la gouvernance avec un cas concret.",
        "Ne la présente jamais comme un simple sujet technique.",
        "Relie-la systématiquement à la confiance et à la décision.",
      ],
      en: [
        "Always explain governance with a concrete case.",
        "Do not present it as a purely technical topic.",
        "Always connect it to trust and decision-making.",
      ],
    },
    recap: {
      fr: [
        "La gouvernance organise les données et les responsabilités.",
        "Elle dépasse la simple qualité ou la technique.",
        "Elle est essentielle pour fiabiliser les décisions et limiter les risques.",
      ],
      en: [
        "Governance organizes data and responsibilities.",
        "It goes beyond quality or technical operations alone.",
        "It is essential to make decisions more reliable and reduce risks.",
      ],
    },
  },
  {
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
      fr: "Un tutoriel pour relier la gouvernance aux enjeux concrets de qualité, sécurité, conformité, confiance métier et performance décisionnelle.",
      en: "A tutorial to connect governance to concrete issues of quality, security, compliance, business trust and decision performance.",
    },
    objectives: {
      fr: [
        "Identifier les risques d’une donnée mal gouvernée",
        "Comprendre l’impact sur les métiers et les décisions",
        "Relier les risques à des besoins concrets de gouvernance",
      ],
      en: [
        "Identify the risks of poorly governed data",
        "Understand the impact on business teams and decisions",
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
            "La gouvernance devient réellement utile quand on la relie à des problèmes concrets. Sans cela, elle reste perçue comme un discours abstrait ou bureaucratique.",
            "Parler des enjeux permet de montrer ce que l’entreprise cherche à obtenir : de meilleures décisions, moins d’erreurs, plus de conformité, plus de sécurité, plus de fluidité.",
            "Parler des risques permet de montrer ce que l’entreprise cherche à éviter : mauvaise qualité, indicateurs contradictoires, incidents, non-conformité, perte de confiance.",
          ],
          en: [
            "Governance becomes truly useful when it is linked to concrete problems. Otherwise, it is often perceived as abstract or bureaucratic.",
            "Talking about challenges shows what the company wants to achieve: better decisions, fewer errors, more compliance, more security and more fluidity.",
            "Talking about risks shows what the company wants to avoid: poor quality, contradictory indicators, incidents, non-compliance and loss of trust.",
          ],
        },
      },
      {
        title: {
          fr: "2. Premier enjeu : la qualité et la fiabilité",
          en: "2. First challenge: quality and reliability",
        },
        paragraphs: {
          fr: [
            "Une donnée peu fiable dégrade tout ce qui est construit dessus : reporting, tableaux de bord, analyses, arbitrages budgétaires, priorisation d’actions.",
            "Les problèmes les plus courants sont les doublons, les valeurs manquantes, les formats hétérogènes, les référentiels non alignés et les règles métier interprétées différemment selon les équipes.",
            "La gouvernance permet d’instaurer des règles communes, des contrôles, des responsables et une logique d’amélioration continue.",
          ],
          en: [
            "Poorly reliable data degrades everything built on top of it: reporting, dashboards, analyses, budget decisions and prioritization.",
            "The most common issues are duplicates, missing values, inconsistent formats, misaligned master data and business rules interpreted differently across teams.",
            "Governance helps establish common rules, controls, ownership and a logic of continuous improvement.",
          ],
        },
      },
      {
        title: {
          fr: "3. Deuxième enjeu : la conformité et la preuve",
          en: "3. Second challenge: compliance and evidence",
        },
        paragraphs: {
          fr: [
            "Une organisation peut avoir de bonnes intentions en matière de protection des données, mais sans gouvernance claire elle peine souvent à prouver ce qu’elle fait réellement.",
            "Le RGPD, par exemple, ne se limite pas à des principes. Il exige aussi de la traçabilité, des responsabilités, des registres, des règles d’accès, des durées de conservation et une logique d’accountability.",
            "La gouvernance aide à rendre ces obligations opérables, mesurables et défendables en cas de contrôle ou d’audit.",
          ],
          en: [
            "An organization may have good intentions regarding data protection, but without clear governance it often struggles to prove what it is actually doing.",
            "GDPR, for example, is not limited to principles. It also requires traceability, responsibilities, records, access rules, retention periods and accountability.",
            "Governance helps make these obligations operational, measurable and defensible in case of review or audit.",
          ],
        },
      },
      {
        title: {
          fr: "4. Troisième enjeu : la sécurité et la maîtrise des accès",
          en: "4. Third challenge: security and access control",
        },
        paragraphs: {
          fr: [
            "Quand personne ne sait précisément qui a accès à quoi, pourquoi et selon quelles règles, la donnée devient un risque.",
            "Le problème n’est pas seulement technique. Il est aussi organisationnel : qui valide un accès, qui peut exporter des données, qui gère les données sensibles, qui arbitre un conflit entre usage métier et sécurité ?",
            "La gouvernance complète la cybersécurité en apportant des décisions, des règles, des classifications et des responsabilités.",
          ],
          en: [
            "When no one clearly knows who has access to what, why and under which rules, data becomes a risk.",
            "The problem is not only technical. It is also organizational: who validates access, who can export data, who handles sensitive data, who arbitrates between business needs and security?",
            "Governance complements cybersecurity by bringing decisions, rules, classifications and accountability.",
          ],
        },
      },
      {
        title: {
          fr: "5. Quatrième enjeu : la confiance métier et la décision",
          en: "5. Fourth challenge: business trust and decision-making",
        },
        paragraphs: {
          fr: [
            "Quand les équipes ne font plus confiance aux chiffres, elles recréent leurs propres fichiers, recalculent manuellement les indicateurs et contournent les outils officiels.",
            "Cela crée des silos, multiplie les versions de la vérité et ralentit les décisions.",
            "La gouvernance a aussi pour rôle de restaurer cette confiance en rendant les données plus transparentes, mieux documentées et plus stables dans le temps.",
          ],
          en: [
            "When teams stop trusting the numbers, they rebuild their own files, manually recalculate indicators and bypass official tools.",
            "This creates silos, multiplies versions of the truth and slows down decisions.",
            "Governance also exists to restore this trust by making data more transparent, better documented and more stable over time.",
          ],
        },
      },
    ],
    deliverables: {
      fr: [
        "Une cartographie simple des risques data",
        "Une grille enjeux ↔ impacts",
        "Une explication claire des bénéfices de la gouvernance",
      ],
      en: [
        "A simple map of data risks",
        "A challenge ↔ impact grid",
        "A clear explanation of governance benefits",
      ],
    },
    quickTips: {
      fr: [
        "Plus tu relies la gouvernance à des impacts concrets, plus elle devient crédible.",
        "Le bon angle n’est pas seulement réglementaire, mais aussi métier.",
      ],
      en: [
        "The more you connect governance to concrete impacts, the more credible it becomes.",
        "The right angle is not only regulatory, but also business-oriented.",
      ],
    },
    recap: {
      fr: [
        "Les enjeux de gouvernance touchent la qualité, la conformité, la sécurité et la décision.",
        "Les risques apparaissent dès que les rôles, règles et contrôles sont flous.",
        "La gouvernance sert autant à créer de la valeur qu’à réduire les risques.",
      ],
      en: [
        "Governance challenges relate to quality, compliance, security and decision-making.",
        "Risks emerge as soon as roles, rules and controls become unclear.",
        "Governance exists both to create value and to reduce risk.",
      ],
    },
  },
  {
    slug: "4-piliers-data-governance",
    title: {
      fr: "Maîtriser les 4 piliers de la Data Governance",
      en: "Master the 4 pillars of Data Governance",
    },
    level: {
      fr: "Débutant",
      en: "Beginner",
    },
    category: {
      fr: "Gouvernance Data",
      en: "Data Governance",
    },
    duration: "22 min",
    xp: 120,
    excerpt: {
      fr: "Un tutoriel complet pour comprendre les 4 piliers fondamentaux d’une gouvernance des données efficace : qualité, sécurité/conformité, rôles et valorisation.",
      en: "A complete tutorial to understand the 4 core pillars of effective data governance: quality, security/compliance, roles and value creation.",
    },
    objectives: {
      fr: [
        "Comprendre les 4 piliers de gouvernance",
        "Savoir expliquer chaque pilier simplement",
        "Relier chaque pilier à des actions concrètes",
      ],
      en: [
        "Understand the 4 governance pillars",
        "Be able to explain each pillar simply",
        "Connect each pillar to concrete actions",
      ],
    },
    sections: [
      {
        title: {
          fr: "1. Pourquoi raisonner en piliers ?",
          en: "1. Why think in pillars?",
        },
        paragraphs: {
          fr: [
            "Les piliers permettent de structurer la gouvernance de manière simple et pédagogique. Ils évitent de réduire le sujet à un seul angle, par exemple la qualité ou la conformité seulement.",
            "Une organisation data-driven ne peut pas fonctionner durablement si elle ne tient compte que d’un pilier. Une donnée très bien protégée mais inutilisable n’a pas de valeur. Une donnée très exploitée mais non conforme devient un risque.",
          ],
          en: [
            "Pillars help structure governance in a simple and educational way. They prevent reducing the topic to a single angle, such as quality or compliance alone.",
            "A data-driven organization cannot function sustainably if it focuses on only one pillar. Data that is well protected but unusable has little value. Data that is heavily used but non-compliant becomes a risk.",
          ],
        },
      },
      {
        title: {
          fr: "2. Pilier 1 : la qualité des données",
          en: "2. Pillar 1: data quality",
        },
        paragraphs: {
          fr: [
            "Le premier pilier consiste à garantir que les données soient fiables, cohérentes, complètes et adaptées à l’usage attendu.",
            "Sans qualité, même les meilleurs outils analytiques produisent des résultats trompeurs. La qualité suppose donc des dimensions, des contrôles, des seuils, des responsables et un suivi dans le temps.",
          ],
          en: [
            "The first pillar is about ensuring that data is reliable, consistent, complete and fit for use.",
            "Without quality, even the best analytics tools produce misleading results. Quality therefore requires dimensions, controls, thresholds, owners and long-term monitoring.",
          ],
        },
      },
      {
        title: {
          fr: "3. Pilier 2 : sécurité et conformité",
          en: "3. Pillar 2: security and compliance",
        },
        paragraphs: {
          fr: [
            "Le deuxième pilier vise à protéger les données sensibles, encadrer les accès, respecter les obligations réglementaires et documenter les décisions prises.",
            "Ce pilier inclut notamment la classification des données, les règles d’accès, les durées de conservation, les mécanismes d’anonymisation ou de pseudonymisation, ainsi que la capacité à démontrer la conformité.",
          ],
          en: [
            "The second pillar aims to protect sensitive data, control access, respect regulatory obligations and document decisions.",
            "This pillar includes data classification, access rules, retention periods, anonymization or pseudonymization mechanisms, and the ability to demonstrate compliance.",
          ],
        },
      },
      {
        title: {
          fr: "4. Pilier 3 : rôles et responsabilités",
          en: "4. Pillar 3: roles and responsibilities",
        },
        paragraphs: {
          fr: [
            "Une gouvernance sans responsable identifié ne tient pas dans le temps. Il faut savoir qui décide, qui exécute, qui documente, qui contrôle et qui est consulté.",
            "C’est ce pilier qui évite les situations où chacun pense qu’un autre est responsable du problème. Les rôles comme Data Owner, Data Steward et Data Architect prennent ici tout leur sens.",
          ],
          en: [
            "Governance without clear ownership does not last over time. It must be clear who decides, who executes, who documents, who controls and who is consulted.",
            "This pillar prevents situations where everyone assumes someone else is responsible. Roles such as Data Owner, Data Steward and Data Architect become central here.",
          ],
        },
      },
      {
        title: {
          fr: "5. Pilier 4 : valorisation et exploitation",
          en: "5. Pillar 4: value creation and exploitation",
        },
        paragraphs: {
          fr: [
            "Le dernier pilier consiste à faire de la donnée un actif réellement exploité. Une gouvernance mature n’existe pas seulement pour encadrer ; elle existe aussi pour permettre l’analyse, la BI, les dashboards, les cas d’usage IA et la décision stratégique.",
            "Ce pilier rappelle que la donnée n’a pas vocation à rester enfermée. Elle doit être rendue accessible, compréhensible et utile, dans un cadre maîtrisé.",
          ],
          en: [
            "The last pillar is about turning data into a truly exploited asset. Mature governance does not exist only to control; it also exists to enable analytics, BI, dashboards, AI use cases and strategic decision-making.",
            "This pillar reminds us that data is not meant to remain locked away. It must be made accessible, understandable and useful within a controlled framework.",
          ],
        },
      },
    ],
    deliverables: {
      fr: [
        "Un schéma simple des 4 piliers",
        "Une fiche d’explication par pilier",
        "Une capacité à les expliquer en entretien ou mission",
      ],
      en: [
        "A simple 4-pillar diagram",
        "An explanation sheet for each pillar",
        "The ability to explain them in interviews or consulting work",
      ],
    },
    quickTips: {
      fr: [
        "Explique toujours les piliers avec des exemples.",
        "Ne présente pas la gouvernance comme un pilier unique.",
        "Relie chaque pilier à un besoin métier visible.",
      ],
      en: [
        "Always explain pillars with examples.",
        "Do not present governance as a single-pillar topic.",
        "Connect each pillar to a visible business need.",
      ],
    },
    recap: {
      fr: [
        "Les 4 piliers se renforcent entre eux.",
        "Qualité sans responsabilité ne tient pas.",
        "Conformité sans valorisation crée de la contrainte sans valeur.",
      ],
      en: [
        "The 4 pillars reinforce one another.",
        "Quality without accountability does not last.",
        "Compliance without value creation produces constraint without benefit.",
      ],
    },
  },
  {
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
      fr: "Un tutoriel opérationnel pour clarifier les responsabilités autour des données et poser une base de gouvernance exploitable.",
      en: "An operational tutorial to clarify data responsibilities and establish a usable governance baseline.",
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
            "Un RACI est un outil simple qui permet d’attribuer les responsabilités autour d’un processus, d’une règle ou d’un actif de données.",
          ],
          en: [
            "In many organizations, data topics fail not because of tools, but because it is unclear who is supposed to do what.",
            "A RACI is a simple tool used to assign responsibilities around a process, a rule or a data asset.",
          ],
        },
      },
      {
        title: {
          fr: "2. Les 4 lettres du RACI",
          en: "2. The 4 letters of RACI",
        },
        paragraphs: {
          fr: [
            "Responsible : celui qui exécute réellement la tâche.",
            "Accountable : celui qui porte la responsabilité finale et arbitre.",
            "Consulted : celui qu’il faut consulter avant de décider ou d’agir.",
            "Informed : celui qu’il faut tenir informé sans lui demander d’agir directement.",
          ],
          en: [
            "Responsible: the person who actually performs the work.",
            "Accountable: the person who holds final accountability and makes the final call.",
            "Consulted: the person who should be consulted before action or decision.",
            "Informed: the person who should be kept informed without being directly involved.",
          ],
        },
      },
      {
        title: {
          fr: "3. Comment construire ton premier RACI",
          en: "3. How to build your first RACI",
        },
        paragraphs: {
          fr: [
            "Choisis d’abord un périmètre simple : qualité d’une donnée client, gestion d’un dictionnaire, validation d’un accès, traitement d’un incident, etc.",
            "Liste ensuite les acteurs concernés : métier, data, IT, sécurité, conformité, direction.",
            "Puis répartis les rôles ligne par ligne, en évitant les doublons inutiles sur la responsabilité finale.",
          ],
          en: [
            "Start with a simple scope: customer data quality, dictionary management, access validation, incident handling, etc.",
            "Then list the relevant actors: business, data, IT, security, compliance, leadership.",
            "Then assign roles row by row, avoiding unnecessary duplication of final accountability.",
          ],
        },
      },
      {
        title: {
          fr: "4. Erreurs fréquentes",
          en: "4. Common mistakes",
        },
        paragraphs: {
          fr: [
            "Mettre trop de monde en Accountable.",
            "Confondre exécution et arbitrage.",
            "Créer un RACI trop détaillé pour être maintenu.",
            "Ne jamais le relire après changement de processus.",
          ],
          en: [
            "Assigning too many people as Accountable.",
            "Confusing execution and arbitration.",
            "Creating a RACI too detailed to maintain.",
            "Never reviewing it after process changes.",
          ],
        },
      },
    ],
    deliverables: {
      fr: [
        "Un tableau RACI simple",
        "Une clarification des rôles clés",
        "Une base pour des workflows de gouvernance",
      ],
      en: [
        "A simple RACI matrix",
        "A clarification of key roles",
        "A basis for governance workflows",
      ],
    },
    quickTips: {
      fr: [
        "Un RACI utile est un RACI lisible.",
        "Commence petit sur un périmètre critique.",
      ],
      en: [
        "A useful RACI is a readable RACI.",
        "Start small on a critical scope.",
      ],
    },
    recap: {
      fr: [
        "Le RACI sert à clarifier la responsabilité.",
        "Il réduit les zones grises et les conflits.",
        "C’est souvent l’un des premiers livrables les plus utiles en gouvernance.",
      ],
      en: [
        "A RACI clarifies accountability.",
        "It reduces grey zones and conflicts.",
        "It is often one of the most useful first governance deliverables.",
      ],
    },
  },
  {
    slug: "scorecard-qualite-donnees",
    title: {
      fr: "Bâtir une scorecard qualité de données",
      en: "Build a data quality scorecard",
    },
    level: {
      fr: "Intermédiaire",
      en: "Intermediate",
    },
    category: {
      fr: "Qualité des données",
      en: "Data Quality",
    },
    duration: "22 min",
    xp: 140,
    excerpt: {
      fr: "Un tutoriel détaillé pour transformer des problèmes de qualité en indicateurs concrets et pilotables.",
      en: "A detailed tutorial to turn data quality issues into concrete and manageable indicators.",
    },
    objectives: {
      fr: [
        "Choisir les bonnes dimensions de qualité",
        "Définir des contrôles et des seuils",
        "Construire un support de pilotage compréhensible",
      ],
      en: [
        "Choose the right quality dimensions",
        "Define controls and thresholds",
        "Build an understandable steering support",
      ],
    },
    sections: [
      {
        title: {
          fr: "1. Pourquoi une scorecard ?",
          en: "1. Why a scorecard?",
        },
        paragraphs: {
          fr: [
            "La qualité des données reste souvent un sujet flou tant qu’elle n’est pas traduite en indicateurs visibles.",
            "Une scorecard permet de passer d’un constat vague — “les données ne sont pas bonnes” — à un suivi concret : quelles dimensions sont touchées, à quel niveau, sur quelles tables ou domaines.",
          ],
          en: [
            "Data quality often remains a vague topic until it is translated into visible indicators.",
            "A scorecard helps move from a vague statement — “the data is bad” — to concrete monitoring: which dimensions are affected, at what level, on which tables or domains.",
          ],
        },
      },
      {
        title: {
          fr: "2. Les dimensions à suivre",
          en: "2. Dimensions to track",
        },
        paragraphs: {
          fr: [
            "Les dimensions les plus courantes sont la complétude, la cohérence, la validité, l’unicité, la disponibilité et l’actualité.",
            "Toutes ne sont pas utiles partout. Le rôle du gouvernant est justement de choisir les dimensions les plus pertinentes selon l’usage métier.",
          ],
          en: [
            "The most common dimensions are completeness, consistency, validity, uniqueness, availability and timeliness.",
            "Not all of them are useful everywhere. The role of the governance practitioner is to choose the most relevant dimensions depending on the business use case.",
          ],
        },
      },
      {
        title: {
          fr: "3. Définir les règles de contrôle",
          en: "3. Define control rules",
        },
        paragraphs: {
          fr: [
            "Une dimension seule ne suffit pas. Il faut lui associer une règle observable : par exemple, “95 % des adresses email doivent respecter un format valide” ou “aucun identifiant client ne doit apparaître deux fois”.",
            "Le contrôle doit être formulé de manière claire, mesurable et compréhensible par les métiers.",
          ],
          en: [
            "A dimension alone is not enough. It must be associated with an observable rule: for example, “95% of email addresses must follow a valid format” or “no customer identifier should appear twice”.",
            "The control must be clearly formulated, measurable and understandable to business teams.",
          ],
        },
      },
      {
        title: {
          fr: "4. Choisir les seuils et le format de restitution",
          en: "4. Choose thresholds and reporting format",
        },
        paragraphs: {
          fr: [
            "Un indicateur sans seuil n’aide pas à décider. Il faut définir ce qui est acceptable, ce qui déclenche une alerte et ce qui devient critique.",
            "Le format de restitution doit rester simple : domaine, règle, score, statut, responsable, action en cours.",
          ],
          en: [
            "An indicator without a threshold does not help decision-making. You need to define what is acceptable, what triggers an alert and what becomes critical.",
            "The reporting format should remain simple: domain, rule, score, status, owner, ongoing action.",
          ],
        },
      },
      {
        title: {
          fr: "5. Faire vivre la scorecard",
          en: "5. Keep the scorecard alive",
        },
        paragraphs: {
          fr: [
            "Une scorecard n’a de valeur que si elle est revue régulièrement, expliquée aux métiers et reliée à des actions correctives.",
            "Le pilotage de la qualité n’est pas un exercice ponctuel. C’est une routine de gouvernance.",
          ],
          en: [
            "A scorecard only has value if it is reviewed regularly, explained to business teams and linked to corrective actions.",
            "Data quality steering is not a one-time exercise. It is a governance routine.",
          ],
        },
      },
    ],
    deliverables: {
      fr: [
        "Une scorecard qualité",
        "Une liste de règles de contrôle",
        "Un support de pilotage simple",
      ],
      en: [
        "A quality scorecard",
        "A list of control rules",
        "A simple steering support",
      ],
    },
    quickTips: {
      fr: [
        "Privilégie peu d’indicateurs bien suivis.",
        "Lie toujours la scorecard à un responsable et à une action.",
      ],
      en: [
        "Favor a small number of well-monitored indicators.",
        "Always connect the scorecard to an owner and an action.",
      ],
    },
    recap: {
      fr: [
        "La scorecard transforme la qualité en pilotage visible.",
        "Elle doit rester simple, actionnable et revue régulièrement.",
        "Elle permet de rendre la qualité compréhensible pour les métiers.",
      ],
      en: [
        "The scorecard turns quality into visible steering.",
        "It should remain simple, actionable and regularly reviewed.",
        "It makes quality understandable to business teams.",
      ],
    },
  },
  {
    slug: "feuille-route-data-governance-90-jours",
    title: {
      fr: "Construire une feuille de route Data Governance sur 90 jours",
      en: "Build a 90-day Data Governance roadmap",
    },
    level: {
      fr: "Débutant / Intermédiaire",
      en: "Beginner / Intermediate",
    },
    category: {
      fr: "Pilotage",
      en: "Steering",
    },
    duration: "24 min",
    xp: 130,
    excerpt: {
      fr: "Un tutoriel pour apprendre à transformer un diagnostic de gouvernance en plan d’action concret, priorisé et crédible.",
      en: "A tutorial to learn how to turn a governance diagnosis into a concrete, prioritized and credible action plan.",
    },
    objectives: {
      fr: [
        "Structurer une feuille de route simple",
        "Prioriser les actions de gouvernance",
        "Définir quick wins, responsables et échéances",
      ],
      en: [
        "Structure a simple roadmap",
        "Prioritize governance actions",
        "Define quick wins, owners and deadlines",
      ],
    },
    sections: [
      {
        title: {
          fr: "1. Pourquoi une roadmap 90 jours ?",
          en: "1. Why a 90-day roadmap?",
        },
        paragraphs: {
          fr: [
            "Quand une organisation découvre ses écarts de gouvernance, elle a souvent tendance à vouloir tout traiter en même temps. C’est une erreur fréquente.",
            "Une roadmap 90 jours permet de se concentrer sur l’essentiel, de montrer rapidement des résultats et de crédibiliser la démarche.",
          ],
          en: [
            "When an organization discovers its governance gaps, it often tries to solve everything at once. This is a common mistake.",
            "A 90-day roadmap helps focus on what matters most, show results quickly and make the governance initiative credible.",
          ],
        },
      },
      {
        title: {
          fr: "2. Partir des écarts observés",
          en: "2. Start from the observed gaps",
        },
        paragraphs: {
          fr: [
            "La feuille de route doit partir d’un constat : rôles non définis, mauvaise qualité, absence de politiques, manque de preuve, faible documentation, etc.",
            "Chaque écart doit ensuite être traduit en action claire et non en formulation vague.",
          ],
          en: [
            "The roadmap must start from findings: undefined roles, poor quality, lack of policies, lack of evidence, weak documentation, etc.",
            "Each gap should then be translated into a clear action rather than a vague statement.",
          ],
        },
      },
      {
        title: {
          fr: "3. Prioriser intelligemment",
          en: "3. Prioritize intelligently",
        },
        paragraphs: {
          fr: [
            "Toutes les actions n’ont pas le même impact. Il faut arbitrer selon le risque, la valeur métier, l’effort et la faisabilité.",
            "Les quick wins sont utiles pour embarquer les équipes, mais il faut aussi sécuriser quelques chantiers structurants.",
          ],
          en: [
            "Not all actions have the same impact. You need to arbitrate based on risk, business value, effort and feasibility.",
            "Quick wins help bring teams on board, but a few structuring actions must also be secured.",
          ],
        },
      },
      {
        title: {
          fr: "4. Structurer en 30 / 60 / 90 jours",
          en: "4. Structure into 30 / 60 / 90 days",
        },
        paragraphs: {
          fr: [
            "Les 30 premiers jours servent souvent à cadrer : rôles, priorités, périmètre, comité, premiers livrables.",
            "Les 60 jours permettent de mettre en place les premières politiques, contrôles ou routines.",
            "Les 90 jours permettent de consolider, documenter et commencer à piloter.",
          ],
          en: [
            "The first 30 days are often used to frame the initiative: roles, priorities, scope, governance body, first deliverables.",
            "By 60 days, the first policies, controls or routines can be implemented.",
            "By 90 days, the organization can consolidate, document and start steering.",
          ],
        },
      },
      {
        title: {
          fr: "5. Associer preuve et responsabilité",
          en: "5. Associate evidence and accountability",
        },
        paragraphs: {
          fr: [
            "Une action de roadmap n’est réellement terminée que si elle laisse une trace : document publié, réunion tenue, règle mise en production, contrôle lancé, rôle validé.",
            "Chaque action doit donc avoir un responsable, une échéance et une preuve attendue.",
          ],
          en: [
            "A roadmap action is only really completed if it leaves evidence: published document, completed meeting, deployed rule, launched control, validated role.",
            "Each action must therefore have an owner, a deadline and expected evidence.",
          ],
        },
      },
    ],
    deliverables: {
      fr: [
        "Une roadmap 30/60/90 jours",
        "Une matrice de priorisation",
        "Une liste de quick wins et preuves attendues",
      ],
      en: [
        "A 30/60/90 roadmap",
        "A prioritization matrix",
        "A list of quick wins and expected evidence",
      ],
    },
    quickTips: {
      fr: [
        "Une feuille de route utile doit tenir sur un support lisible.",
        "Priorise peu mais exécute vraiment.",
      ],
      en: [
        "A useful roadmap should fit on a readable support.",
        "Prioritize less, but execute for real.",
      ],
    },
    recap: {
      fr: [
        "La roadmap transforme le diagnostic en action.",
        "Elle doit être priorisée, réaliste et pilotable.",
        "Chaque action doit avoir un responsable et une preuve.",
      ],
      en: [
        "The roadmap turns diagnosis into action.",
        "It must be prioritized, realistic and manageable.",
        "Each action must have an owner and evidence.",
      ],
    },
  },
  {
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
          fr: "2. Choisir le bon périmètre",
          en: "2. Choose the right scope",
        },
        paragraphs: {
          fr: [
            "Choisis un périmètre simple : RH, marketing, gestion clients, recrutement, vidéosurveillance, etc.",
            "L’objectif est de travailler sur un bloc cohérent où il est possible de collecter des preuves et de faire ressortir des recommandations concrètes.",
          ],
          en: [
            "Choose a simple scope: HR, marketing, customer management, recruitment, CCTV, etc.",
            "The goal is to work on a coherent block where evidence can be collected and concrete recommendations can be produced.",
          ],
        },
      },
      {
        title: {
          fr: "3. Les questions minimales à poser",
          en: "3. The minimum questions to ask",
        },
        paragraphs: {
          fr: [
            "Le traitement est-il inscrit au registre ? Les personnes sont-elles informées ? La base légale est-elle claire ? Les accès sont-ils maîtrisés ? Les sous-traitants sont-ils encadrés ? Les demandes de droits sont-elles traitées ?",
            "Ces questions simples permettent déjà de dégager une photographie utile de la maturité opérationnelle.",
          ],
          en: [
            "Is the processing listed in the record? Are individuals informed? Is the legal basis clear? Is access controlled? Are processors managed? Are rights requests handled?",
            "These simple questions already provide a useful picture of operational maturity.",
          ],
        },
      },
      {
        title: {
          fr: "4. La logique de preuve",
          en: "4. The evidence logic",
        },
        paragraphs: {
          fr: [
            "Un audit utile ne repose pas seulement sur des réponses orales. Il faut chercher des documents, procédures, captures, mentions d’information, contrats, modèles ou traces d’exécution.",
            "La preuve est ce qui transforme une impression en constat objectivable.",
          ],
          en: [
            "A useful audit does not rely only on verbal answers. You need documents, procedures, screenshots, privacy notices, contracts, templates or traces of execution.",
            "Evidence is what turns an impression into an objective finding.",
          ],
        },
      },
      {
        title: {
          fr: "5. Sortir un plan d’action réaliste",
          en: "5. Produce a realistic action plan",
        },
        paragraphs: {
          fr: [
            "Un mini audit doit aboutir à peu de recommandations, mais des recommandations réalistes et priorisées.",
            "L’idée n’est pas de produire un énorme rapport, mais de faire émerger des actions simples, compréhensibles et suivables.",
          ],
          en: [
            "A lightweight audit should lead to a small number of recommendations, but recommendations that are realistic and prioritized.",
            "The idea is not to produce a huge report, but to surface simple, understandable and trackable actions.",
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
        "Mieux vaut un petit périmètre bien traité qu’un grand audit flou.",
      ],
      en: [
        "Evidence is central in every audit.",
        "A small well-executed scope is better than a huge vague audit.",
      ],
    },
    recap: {
      fr: [
        "Un mini audit doit être ciblé, concret et documenté.",
        "Les recommandations doivent être peu nombreuses mais actionnables.",
        "L’objectif est de rendre la conformité pilotable.",
      ],
      en: [
        "A lightweight audit must be targeted, concrete and documented.",
        "Recommendations should be few but actionable.",
        "The goal is to make compliance manageable.",
      ],
    },
  },
  {
    slug: "registre-usages-ia",
    title: {
      fr: "Créer un registre des usages IA",
      en: "Build an AI use case register",
    },
    level: {
      fr: "Intermédiaire",
      en: "Intermediate",
    },
    category: {
      fr: "IA",
      en: "AI",
    },
    duration: "18 min",
    xp: 130,
    excerpt: {
      fr: "Un tutoriel pour structurer un inventaire exploitable des usages IA dans une organisation.",
      en: "A tutorial to structure a usable inventory of AI use cases in an organization.",
    },
    objectives: {
      fr: [
        "Inventorier les usages IA",
        "Structurer l’information utile",
        "Préparer une base de gouvernance IA",
      ],
      en: [
        "Inventory AI use cases",
        "Structure useful information",
        "Prepare a foundation for AI governance",
      ],
    },
    sections: [
      {
        title: {
          fr: "1. Pourquoi un registre des usages IA ?",
          en: "1. Why an AI use case register?",
        },
        paragraphs: {
          fr: [
            "Beaucoup d’organisations utilisent déjà de l’IA sans avoir une vision consolidée de ces usages.",
            "Un registre permet d’éviter les angles morts, de prioriser les cas sensibles et de créer une base commune pour la gouvernance.",
          ],
          en: [
            "Many organizations already use AI without having a consolidated view of those usages.",
            "A register helps avoid blind spots, prioritize sensitive cases and build a common foundation for governance.",
          ],
        },
      },
      {
        title: {
          fr: "2. Quelles informations collecter ?",
          en: "2. What information should be collected?",
        },
        paragraphs: {
          fr: [
            "Finalité, équipe utilisatrice, propriétaire métier, données utilisées, niveau de sensibilité, niveau de criticité, documents existants ou attendus.",
            "L’objectif n’est pas de tout documenter dès le départ, mais de poser une base homogène.",
          ],
          en: [
            "Purpose, user team, business owner, data used, sensitivity level, criticality level, existing or expected documents.",
            "The goal is not to document everything from the start, but to create a homogeneous baseline.",
          ],
        },
      },
      {
        title: {
          fr: "3. Comment rendre le registre utile",
          en: "3. How to make the register useful",
        },
        paragraphs: {
          fr: [
            "Un registre n’est pas qu’une liste. Il doit permettre d’identifier les usages prioritaires, les risques potentiels et les besoins de cadrage.",
            "Il devient vraiment utile s’il sert ensuite à piloter la sensibilisation, les évaluations et la documentation.",
          ],
          en: [
            "A register is not just a list. It should help identify priority use cases, potential risks and governance needs.",
            "It becomes truly useful when it supports awareness, assessment and documentation efforts.",
          ],
        },
      },
    ],
    deliverables: {
      fr: [
        "Un registre initial des usages IA",
        "Une classification simple",
        "Une base pour l’AI Act readiness",
      ],
      en: [
        "An initial AI register",
        "A simple classification",
        "A basis for AI Act readiness",
      ],
    },
    quickTips: {
      fr: [
        "Garde le registre simple au départ.",
        "Le propriétaire métier doit toujours être identifié.",
      ],
      en: [
        "Keep the register simple at first.",
        "The business owner should always be identified.",
      ],
    },
    recap: {
      fr: [
        "Le registre IA donne de la visibilité.",
        "Il permet de prioriser et de gouverner.",
        "Il sert de base aux évaluations futures.",
      ],
      en: [
        "The AI register creates visibility.",
        "It helps prioritize and govern.",
        "It serves as a basis for future assessments.",
      ],
    },
  },
];

export function getTutorialBySlug(slug: string) {
  return tutorials.find((tutorial) => tutorial.slug === slug);
}