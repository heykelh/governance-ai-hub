export type GlossaryCategory =
  | "data-governance"
  | "data-management"
  | "data-quality"
  | "bi-analytics"
  | "privacy-gdpr"
  | "ai-governance";

export type GlossaryEntry = {
  slug: string;
  term: {
    fr: string;
    en: string;
  };
  category: GlossaryCategory;
  shortDefinition: {
    fr: string;
    en: string;
  };
  detailedDefinition: {
    fr: string;
    en: string;
  };
  whyItMatters: {
    fr: string;
    en: string;
  };
  example: {
    fr: string;
    en: string;
  };
  relatedTerms: string[];
};

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: "data-governance",
    term: { fr: "Data Governance", en: "Data Governance" },
    category: "data-governance",
    shortDefinition: {
      fr: "Cadre d’organisation, de décision et de contrôle autour des données.",
      en: "Framework for organizing, deciding and controlling data.",
    },
    detailedDefinition: {
      fr: "La Data Governance regroupe les rôles, règles, processus, standards et mécanismes de pilotage qui permettent à une organisation de gérer ses données de manière fiable, sécurisée et utile.",
      en: "Data Governance includes the roles, rules, processes, standards and steering mechanisms that enable an organization to manage data reliably, securely and usefully.",
    },
    whyItMatters: {
      fr: "Elle évite le chaos informationnel, clarifie les responsabilités et améliore la confiance dans les données.",
      en: "It prevents information chaos, clarifies responsibilities and improves trust in data.",
    },
    example: {
      fr: "Définir une source de référence pour les données clients et nommer un Data Owner.",
      en: "Defining a source of truth for customer data and appointing a Data Owner.",
    },
    relatedTerms: ["data-owner", "data-steward", "data-quality", "data-policy"],
  },
  {
    slug: "data-owner",
    term: { fr: "Data Owner", en: "Data Owner" },
    category: "data-governance",
    shortDefinition: {
      fr: "Responsable métier d’un domaine ou d’un jeu de données.",
      en: "Business owner of a data domain or dataset.",
    },
    detailedDefinition: {
      fr: "Le Data Owner porte la responsabilité métier d’une donnée : ses usages, ses règles, son niveau de qualité attendu et les arbitrages associés.",
      en: "The Data Owner holds business accountability for data: its uses, business rules, expected quality level and related decisions.",
    },
    whyItMatters: {
      fr: "Sans responsable métier identifiable, les décisions sur la donnée restent floues.",
      en: "Without an identifiable business owner, decisions about data remain unclear.",
    },
    example: {
      fr: "Le responsable CRM devient Data Owner des données clients.",
      en: "The CRM manager becomes the Data Owner for customer data.",
    },
    relatedTerms: ["data-steward", "raci", "master-data"],
  },
  {
    slug: "data-steward",
    term: { fr: "Data Steward", en: "Data Steward" },
    category: "data-governance",
    shortDefinition: {
      fr: "Garant opérationnel de la qualité et de la documentation des données.",
      en: "Operational guarantor of data quality and documentation.",
    },
    detailedDefinition: {
      fr: "Le Data Steward anime les règles de qualité, la documentation, le catalogage et les bonnes pratiques d’usage sur un périmètre donné.",
      en: "The Data Steward manages quality rules, documentation, cataloging and data usage best practices for a given scope.",
    },
    whyItMatters: {
      fr: "Il fait le lien entre gouvernance théorique et fonctionnement concret.",
      en: "It bridges theoretical governance and day-to-day operations.",
    },
    example: {
      fr: "Un Data Steward Finance suit les anomalies sur les écritures comptables.",
      en: "A Finance Data Steward tracks issues in accounting entries.",
    },
    relatedTerms: ["data-owner", "data-quality", "metadata"],
  },
  {
    slug: "data-architect",
    term: { fr: "Data Architect", en: "Data Architect" },
    category: "data-management",
    shortDefinition: {
      fr: "Architecte des modèles, flux et plateformes de données.",
      en: "Architect of data models, flows and platforms.",
    },
    detailedDefinition: {
      fr: "Le Data Architect conçoit l’architecture cible des données : modélisation, pipelines, plateformes, sécurité et évolutivité.",
      en: "The Data Architect designs the target data architecture: modeling, pipelines, platforms, security and scalability.",
    },
    whyItMatters: {
      fr: "Une gouvernance sans socle technique cohérent reste difficile à appliquer.",
      en: "Governance without a coherent technical foundation is hard to enforce.",
    },
    example: {
      fr: "Définir une architecture hub-and-spoke entre data lake et data warehouse.",
      en: "Defining a hub-and-spoke architecture between a data lake and a data warehouse.",
    },
    relatedTerms: ["data-model", "etl", "data-lake", "data-warehouse"],
  },
  {
    slug: "raci",
    term: { fr: "RACI", en: "RACI" },
    category: "data-governance",
    shortDefinition: {
      fr: "Matrice de responsabilités : Responsible, Accountable, Consulted, Informed.",
      en: "Responsibility matrix: Responsible, Accountable, Consulted, Informed.",
    },
    detailedDefinition: {
      fr: "Le RACI permet de clarifier qui exécute, qui décide, qui est consulté et qui doit être informé pour chaque activité.",
      en: "RACI clarifies who executes, who decides, who is consulted and who should be informed for each activity.",
    },
    whyItMatters: {
      fr: "Il réduit les zones grises et les conflits de responsabilité.",
      en: "It reduces grey zones and accountability conflicts.",
    },
    example: {
      fr: "Un RACI pour gérer les incidents qualité sur les données clients.",
      en: "A RACI to handle quality incidents on customer data.",
    },
    relatedTerms: ["data-owner", "data-steward", "governance-council"],
  },
  {
    slug: "data-policy",
    term: { fr: "Politique de données", en: "Data Policy" },
    category: "data-governance",
    shortDefinition: {
      fr: "Règles générales qui encadrent la gestion des données.",
      en: "General rules governing data management.",
    },
    detailedDefinition: {
      fr: "Une politique de données formalise les principes d’accès, de qualité, de sécurité, de conservation et d’usage des données dans l’organisation.",
      en: "A data policy formalizes principles for access, quality, security, retention and use of data in the organization.",
    },
    whyItMatters: {
      fr: "Elle donne un cadre commun et opposable aux équipes.",
      en: "It gives teams a shared and enforceable framework.",
    },
    example: {
      fr: "Une politique définissant les niveaux de sensibilité des données.",
      en: "A policy defining data sensitivity levels.",
    },
    relatedTerms: ["data-classification", "retention-policy", "access-control"],
  },
  {
    slug: "governance-council",
    term: { fr: "Data Governance Council", en: "Data Governance Council" },
    category: "data-governance",
    shortDefinition: {
      fr: "Instance opérationnelle de coordination de la gouvernance.",
      en: "Operational coordination body for governance.",
    },
    detailedDefinition: {
      fr: "Le Data Governance Council réunit les rôles clés pour arbitrer les priorités, suivre les politiques et coordonner les actions de gouvernance.",
      en: "The Data Governance Council brings together key roles to arbitrate priorities, monitor policies and coordinate governance actions.",
    },
    whyItMatters: {
      fr: "La gouvernance a besoin d’un lieu d’arbitrage et de suivi.",
      en: "Governance needs a forum for arbitration and follow-up.",
    },
    example: {
      fr: "Réunion mensuelle entre métiers, data, IT et conformité.",
      en: "Monthly meeting between business, data, IT and compliance teams.",
    },
    relatedTerms: ["raci", "data-owner", "data-policy"],
  },
  {
    slug: "data-domain",
    term: { fr: "Domaine de données", en: "Data Domain" },
    category: "data-governance",
    shortDefinition: {
      fr: "Ensemble cohérent de données liées à un sujet métier.",
      en: "Coherent set of data related to a business subject.",
    },
    detailedDefinition: {
      fr: "Un domaine de données regroupe des informations qui appartiennent à un même périmètre métier, comme clients, produits, finance ou RH.",
      en: "A data domain groups information belonging to the same business scope, such as customer, product, finance or HR.",
    },
    whyItMatters: {
      fr: "Il aide à structurer l’ownership et les priorités de gouvernance.",
      en: "It helps structure ownership and governance priorities.",
    },
    example: {
      fr: "Le domaine “Client” regroupe identité, segmentation, historique et contact.",
      en: "The “Customer” domain includes identity, segmentation, history and contact data.",
    },
    relatedTerms: ["data-owner", "master-data"],
  },
  {
    slug: "data-management",
    term: { fr: "Data Management", en: "Data Management" },
    category: "data-management",
    shortDefinition: {
      fr: "Gestion opérationnelle et technique des données.",
      en: "Operational and technical management of data.",
    },
    detailedDefinition: {
      fr: "Le Data Management recouvre l’ensemble des activités de collecte, stockage, intégration, modélisation, maintenance et exploitation des données.",
      en: "Data Management covers all activities related to collecting, storing, integrating, modeling, maintaining and using data.",
    },
    whyItMatters: {
      fr: "Il matérialise les décisions de gouvernance dans les outils et processus.",
      en: "It turns governance decisions into tools and processes.",
    },
    example: {
      fr: "Mettre en place des pipelines d’intégration et des règles de nommage.",
      en: "Setting up integration pipelines and naming conventions.",
    },
    relatedTerms: ["data-governance", "etl", "data-warehouse"],
  },
  {
    slug: "metadata",
    term: { fr: "Métadonnées", en: "Metadata" },
    category: "data-management",
    shortDefinition: {
      fr: "Données qui décrivent d’autres données.",
      en: "Data that describes other data.",
    },
    detailedDefinition: {
      fr: "Les métadonnées donnent du contexte : nom de champ, définition, propriétaire, source, format, fréquence, sensibilité ou règle de calcul.",
      en: "Metadata provides context: field name, definition, owner, source, format, frequency, sensitivity or calculation rule.",
    },
    whyItMatters: {
      fr: "Sans métadonnées, les données sont difficiles à comprendre et à réutiliser.",
      en: "Without metadata, data is hard to understand and reuse.",
    },
    example: {
      fr: "Le champ `customer_id` est défini comme identifiant unique client.",
      en: "The `customer_id` field is defined as the unique customer identifier.",
    },
    relatedTerms: ["data-catalog", "data-lineage", "business-glossary"],
  },
  {
    slug: "business-glossary",
    term: { fr: "Glossaire métier", en: "Business Glossary" },
    category: "data-governance",
    shortDefinition: {
      fr: "Référentiel de définitions métier partagées.",
      en: "Repository of shared business definitions.",
    },
    detailedDefinition: {
      fr: "Le glossaire métier rassemble les termes clés de l’organisation avec une définition validée afin d’aligner les équipes sur le sens des concepts.",
      en: "A business glossary gathers the organization’s key terms with approved definitions to align teams on concept meanings.",
    },
    whyItMatters: {
      fr: "Il réduit les ambiguïtés entre métiers, data et IT.",
      en: "It reduces ambiguity between business, data and IT teams.",
    },
    example: {
      fr: "Définir précisément ce qu’est un “client actif”.",
      en: "Precisely defining what an “active customer” is.",
    },
    relatedTerms: ["metadata", "data-catalog", "kpi"],
  },
  {
    slug: "data-catalog",
    term: { fr: "Data Catalog", en: "Data Catalog" },
    category: "data-management",
    shortDefinition: {
      fr: "Catalogue centralisé des jeux de données et de leurs métadonnées.",
      en: "Centralized catalog of datasets and their metadata.",
    },
    detailedDefinition: {
      fr: "Le Data Catalog aide les utilisateurs à découvrir, comprendre et réutiliser les données disponibles dans l’organisation.",
      en: "A Data Catalog helps users discover, understand and reuse available data in the organization.",
    },
    whyItMatters: {
      fr: "Il réduit la perte de temps liée à la recherche d’informations.",
      en: "It reduces time wasted searching for information.",
    },
    example: {
      fr: "Microsoft Purview ou Collibra pour inventorier les jeux de données.",
      en: "Microsoft Purview or Collibra to inventory datasets.",
    },
    relatedTerms: ["metadata", "data-lineage", "business-glossary"],
  },
  {
    slug: "data-lineage",
    term: { fr: "Data Lineage", en: "Data Lineage" },
    category: "data-management",
    shortDefinition: {
      fr: "Traçabilité du parcours de la donnée de la source à l’usage final.",
      en: "Traceability of data from source to final use.",
    },
    detailedDefinition: {
      fr: "Le Data Lineage montre d’où vient la donnée, comment elle a été transformée et où elle est consommée.",
      en: "Data Lineage shows where data comes from, how it has been transformed and where it is consumed.",
    },
    whyItMatters: {
      fr: "Il facilite les analyses d’impact, les audits et la résolution d’incidents.",
      en: "It supports impact analysis, audits and issue resolution.",
    },
    example: {
      fr: "Tracer un KPI du CRM jusqu’au dashboard exécutif.",
      en: "Tracing a KPI from CRM to the executive dashboard.",
    },
    relatedTerms: ["metadata", "etl", "impact-analysis"],
  },
  {
    slug: "master-data",
    term: { fr: "Master Data", en: "Master Data" },
    category: "data-management",
    shortDefinition: {
      fr: "Données de référence communes à plusieurs processus.",
      en: "Reference data shared across multiple processes.",
    },
    detailedDefinition: {
      fr: "Les Master Data sont les données clés et relativement stables qui structurent l’activité : clients, produits, fournisseurs, comptes, sites, etc.",
      en: "Master Data is the key and relatively stable data that structures business operations: customers, products, suppliers, accounts, sites, etc.",
    },
    whyItMatters: {
      fr: "Des référentiels incohérents entraînent des erreurs partout dans l’organisation.",
      en: "Inconsistent master data creates errors throughout the organization.",
    },
    example: {
      fr: "Un référentiel produit unique partagé entre ERP et e-commerce.",
      en: "A single product master shared between ERP and e-commerce.",
    },
    relatedTerms: ["mdm", "data-domain", "data-quality"],
  },
  {
    slug: "mdm",
    term: { fr: "MDM", en: "MDM" },
    category: "data-management",
    shortDefinition: {
      fr: "Master Data Management : discipline de gestion des données de référence.",
      en: "Master Data Management: discipline for managing master data.",
    },
    detailedDefinition: {
      fr: "Le MDM vise à consolider, fiabiliser et gouverner les données de référence partagées entre plusieurs systèmes.",
      en: "MDM aims to consolidate, improve and govern reference data shared across systems.",
    },
    whyItMatters: {
      fr: "Il limite les doublons et aligne les systèmes sur des référentiels communs.",
      en: "It limits duplicates and aligns systems around common master records.",
    },
    example: {
      fr: "Consolider les fiches clients entre CRM, ERP et support.",
      en: "Consolidating customer records across CRM, ERP and support systems.",
    },
    relatedTerms: ["master-data", "golden-record"],
  },
  {
    slug: "golden-record",
    term: { fr: "Golden Record", en: "Golden Record" },
    category: "data-management",
    shortDefinition: {
      fr: "Version de référence la plus fiable d’une entité.",
      en: "Most reliable reference version of an entity.",
    },
    detailedDefinition: {
      fr: "Le Golden Record correspond à l’enregistrement consolidé considéré comme la meilleure version disponible d’un client, produit ou autre objet métier.",
      en: "The Golden Record is the consolidated record considered the best available version of a customer, product or other business object.",
    },
    whyItMatters: {
      fr: "Il réduit les contradictions entre systèmes.",
      en: "It reduces contradictions between systems.",
    },
    example: {
      fr: "Une fiche client consolidée depuis CRM, facturation et support.",
      en: "A customer record consolidated from CRM, billing and support.",
    },
    relatedTerms: ["master-data", "mdm"],
  },
  {
    slug: "data-quality",
    term: { fr: "Data Quality", en: "Data Quality" },
    category: "data-quality",
    shortDefinition: {
      fr: "Niveau d’aptitude d’une donnée à être utilisée de façon fiable.",
      en: "Degree to which data is fit for reliable use.",
    },
    detailedDefinition: {
      fr: "La Data Quality mesure dans quelle mesure la donnée est complète, cohérente, valide, unique, disponible et actuelle par rapport à un usage donné.",
      en: "Data Quality measures how complete, consistent, valid, unique, available and timely data is for a given use.",
    },
    whyItMatters: {
      fr: "Une mauvaise qualité coûte cher et dégrade la confiance.",
      en: "Poor quality is costly and erodes trust.",
    },
    example: {
      fr: "Des emails invalides empêchent une campagne marketing fiable.",
      en: "Invalid emails prevent reliable marketing campaigns.",
    },
    relatedTerms: ["completeness", "validity", "consistency", "scorecard"],
  },
  {
    slug: "completeness",
    term: { fr: "Complétude", en: "Completeness" },
    category: "data-quality",
    shortDefinition: {
      fr: "Présence des valeurs attendues dans la donnée.",
      en: "Presence of expected values in data.",
    },
    detailedDefinition: {
      fr: "La complétude mesure la proportion de champs qui sont renseignés lorsque leur présence est attendue.",
      en: "Completeness measures the proportion of fields filled in when their presence is expected.",
    },
    whyItMatters: {
      fr: "Des champs vides empêchent souvent l’analyse ou le traitement.",
      en: "Empty fields often block analysis or processing.",
    },
    example: {
      fr: "30 % des numéros de téléphone clients manquants.",
      en: "30% of customer phone numbers missing.",
    },
    relatedTerms: ["data-quality", "validity"],
  },
  {
    slug: "validity",
    term: { fr: "Validité", en: "Validity" },
    category: "data-quality",
    shortDefinition: {
      fr: "Conformité de la donnée à un format ou une règle attendue.",
      en: "Compliance of data with an expected format or rule.",
    },
    detailedDefinition: {
      fr: "La validité vérifie que la donnée respecte des contraintes définies : format, domaine de valeurs, structure ou logique métier.",
      en: "Validity checks that data respects defined constraints: format, allowed values, structure or business logic.",
    },
    whyItMatters: {
      fr: "Une donnée invalide peut être présente mais inutilisable.",
      en: "Invalid data may exist but still be unusable.",
    },
    example: {
      fr: "Une date de naissance au format texte libre au lieu d’un format standard.",
      en: "A date of birth entered as free text instead of a standard format.",
    },
    relatedTerms: ["data-quality", "consistency"],
  },
  {
    slug: "consistency",
    term: { fr: "Cohérence", en: "Consistency" },
    category: "data-quality",
    shortDefinition: {
      fr: "Absence de contradiction entre données liées.",
      en: "Absence of contradiction between related data.",
    },
    detailedDefinition: {
      fr: "La cohérence vérifie que plusieurs champs, tables ou systèmes ne se contredisent pas entre eux.",
      en: "Consistency checks that multiple fields, tables or systems do not contradict one another.",
    },
    whyItMatters: {
      fr: "Des incohérences affaiblissent immédiatement la confiance dans les chiffres.",
      en: "Inconsistencies immediately weaken trust in the numbers.",
    },
    example: {
      fr: "Un client marqué “inactif” mais avec une commande ouverte.",
      en: "A customer marked as inactive but with an open order.",
    },
    relatedTerms: ["data-quality", "uniqueness"],
  },
  {
    slug: "uniqueness",
    term: { fr: "Unicité", en: "Uniqueness" },
    category: "data-quality",
    shortDefinition: {
      fr: "Absence de doublons non souhaités.",
      en: "Absence of unwanted duplicates.",
    },
    detailedDefinition: {
      fr: "L’unicité mesure si une entité supposée unique n’existe pas en plusieurs exemplaires contradictoires.",
      en: "Uniqueness measures whether an entity expected to be unique does not exist in multiple contradictory copies.",
    },
    whyItMatters: {
      fr: "Les doublons créent des erreurs de reporting et de gestion.",
      en: "Duplicates create reporting and operational errors.",
    },
    example: {
      fr: "Deux fiches différentes pour le même client.",
      en: "Two separate records for the same customer.",
    },
    relatedTerms: ["golden-record", "mdm"],
  },
  {
    slug: "timeliness",
    term: { fr: "Actualité", en: "Timeliness" },
    category: "data-quality",
    shortDefinition: {
      fr: "Fraîcheur de la donnée par rapport à l’usage attendu.",
      en: "Freshness of data relative to expected use.",
    },
    detailedDefinition: {
      fr: "L’actualité mesure si la donnée est suffisamment récente pour être utilisée dans le contexte visé.",
      en: "Timeliness measures whether data is recent enough for the intended use.",
    },
    whyItMatters: {
      fr: "Une donnée juste mais obsolète peut conduire à une mauvaise décision.",
      en: "Accurate but outdated data can still lead to poor decisions.",
    },
    example: {
      fr: "Un stock mis à jour une fois par semaine pour une activité temps réel.",
      en: "Inventory updated weekly for a near real-time business.",
    },
    relatedTerms: ["sla", "kpi", "data-quality"],
  },
  {
    slug: "scorecard",
    term: { fr: "Scorecard qualité", en: "Quality Scorecard" },
    category: "data-quality",
    shortDefinition: {
      fr: "Support de pilotage des indicateurs de qualité.",
      en: "Steering support for quality indicators.",
    },
    detailedDefinition: {
      fr: "Une scorecard qualité rassemble les règles, scores, seuils, statuts et responsables pour suivre la qualité dans le temps.",
      en: "A quality scorecard gathers rules, scores, thresholds, statuses and owners to monitor quality over time.",
    },
    whyItMatters: {
      fr: "Elle transforme un sujet flou en pilotage concret.",
      en: "It turns a vague topic into concrete steering.",
    },
    example: {
      fr: "Tableau mensuel par domaine client, finance, produit.",
      en: "Monthly table by customer, finance, product domain.",
    },
    relatedTerms: ["data-quality", "kpi", "sla"],
  },
  {
    slug: "data-incident",
    term: { fr: "Incident de données", en: "Data Incident" },
    category: "data-quality",
    shortDefinition: {
      fr: "Problème affectant la fiabilité, la disponibilité ou l’usage d’une donnée.",
      en: "Issue affecting the reliability, availability or use of data.",
    },
    detailedDefinition: {
      fr: "Un incident de données peut concerner une anomalie qualité, une rupture de flux, une incohérence, une exposition non autorisée ou une erreur de transformation.",
      en: "A data incident may involve a quality issue, broken flow, inconsistency, unauthorized exposure or transformation error.",
    },
    whyItMatters: {
      fr: "Les incidents montrent où la gouvernance doit être renforcée.",
      en: "Incidents reveal where governance must be strengthened.",
    },
    example: {
      fr: "Un pipeline qui charge des montants en devise incorrecte.",
      en: "A pipeline loading amounts in the wrong currency.",
    },
    relatedTerms: ["root-cause-analysis", "data-lineage", "scorecard"],
  },
  {
    slug: "root-cause-analysis",
    term: { fr: "Analyse de cause racine", en: "Root Cause Analysis" },
    category: "data-quality",
    shortDefinition: {
      fr: "Méthode pour identifier l’origine réelle d’un problème.",
      en: "Method used to identify the true origin of a problem.",
    },
    detailedDefinition: {
      fr: "L’analyse de cause racine vise à ne pas traiter seulement les symptômes d’un incident mais à remonter à sa source structurelle.",
      en: "Root cause analysis aims not to treat only the symptoms of an issue, but to trace it back to its structural source.",
    },
    whyItMatters: {
      fr: "Elle évite que les mêmes anomalies se répètent.",
      en: "It prevents the same issues from recurring.",
    },
    example: {
      fr: "Découvrir qu’un mauvais mapping amont génère des erreurs en aval.",
      en: "Discovering that an upstream mapping issue generates downstream errors.",
    },
    relatedTerms: ["data-incident", "data-lineage"],
  },
  {
    slug: "kpi",
    term: { fr: "KPI", en: "KPI" },
    category: "bi-analytics",
    shortDefinition: {
      fr: "Indicateur clé de performance.",
      en: "Key Performance Indicator.",
    },
    detailedDefinition: {
      fr: "Un KPI est une mesure choisie pour suivre l’atteinte d’un objectif métier ou opérationnel.",
      en: "A KPI is a measure selected to track the achievement of a business or operational objective.",
    },
    whyItMatters: {
      fr: "Les KPI structurent le pilotage et la décision.",
      en: "KPIs structure steering and decision-making.",
    },
    example: {
      fr: "Taux de conversion, délai moyen, churn, NPS.",
      en: "Conversion rate, average lead time, churn, NPS.",
    },
    relatedTerms: ["dashboard", "sla", "business-glossary"],
  },
  {
    slug: "sla",
    term: { fr: "SLA", en: "SLA" },
    category: "bi-analytics",
    shortDefinition: {
      fr: "Engagement formel sur un niveau de service.",
      en: "Formal commitment on a level of service.",
    },
    detailedDefinition: {
      fr: "Un SLA définit une attente mesurable en matière de disponibilité, délai, fraîcheur ou qualité d’un service ou d’une donnée.",
      en: "An SLA defines a measurable expectation regarding availability, timeliness, freshness or quality of a service or data product.",
    },
    whyItMatters: {
      fr: "Il aligne les attentes entre producteurs et consommateurs de données.",
      en: "It aligns expectations between data producers and consumers.",
    },
    example: {
      fr: "Un dashboard commercial mis à jour toutes les heures.",
      en: "A sales dashboard refreshed every hour.",
    },
    relatedTerms: ["kpi", "timeliness", "data-product"],
  },
  {
    slug: "dashboard",
    term: { fr: "Dashboard", en: "Dashboard" },
    category: "bi-analytics",
    shortDefinition: {
      fr: "Interface visuelle de suivi d’indicateurs.",
      en: "Visual interface for monitoring indicators.",
    },
    detailedDefinition: {
      fr: "Un dashboard rassemble des indicateurs, graphiques et filtres pour suivre une activité ou un objectif.",
      en: "A dashboard gathers indicators, charts and filters to monitor an activity or objective.",
    },
    whyItMatters: {
      fr: "Il rend les données actionnables pour les métiers.",
      en: "It makes data actionable for business teams.",
    },
    example: {
      fr: "Dashboard commercial avec CA, pipeline et conversion.",
      en: "Sales dashboard with revenue, pipeline and conversion.",
    },
    relatedTerms: ["kpi", "reporting", "bi"],
  },
  {
    slug: "reporting",
    term: { fr: "Reporting", en: "Reporting" },
    category: "bi-analytics",
    shortDefinition: {
      fr: "Production structurée d’indicateurs et de résultats.",
      en: "Structured production of indicators and results.",
    },
    detailedDefinition: {
      fr: "Le reporting désigne les processus et supports permettant de communiquer des résultats, tendances ou écarts à des parties prenantes.",
      en: "Reporting refers to the processes and outputs used to communicate results, trends or gaps to stakeholders.",
    },
    whyItMatters: {
      fr: "Un reporting fiable dépend directement de la gouvernance et de la qualité.",
      en: "Reliable reporting depends directly on governance and quality.",
    },
    example: {
      fr: "Reporting mensuel à la direction financière.",
      en: "Monthly reporting to finance leadership.",
    },
    relatedTerms: ["dashboard", "kpi", "data-quality"],
  },
  {
    slug: "bi",
    term: { fr: "Business Intelligence", en: "Business Intelligence" },
    category: "bi-analytics",
    shortDefinition: {
      fr: "Ensemble des outils et pratiques d’analyse décisionnelle.",
      en: "Set of tools and practices for decision analytics.",
    },
    detailedDefinition: {
      fr: "La BI regroupe les solutions de reporting, visualisation, exploration et analyse qui transforment des données en information utile à la décision.",
      en: "BI includes reporting, visualization, exploration and analysis solutions that turn data into decision-useful information.",
    },
    whyItMatters: {
      fr: "C’est l’un des principaux usages business des données gouvernées.",
      en: "It is one of the main business uses of governed data.",
    },
    example: {
      fr: "Construire des tableaux de bord pour piloter ventes et opérations.",
      en: "Building dashboards to steer sales and operations.",
    },
    relatedTerms: ["dashboard", "reporting", "data-warehouse"],
  },
  {
    slug: "data-product",
    term: { fr: "Data Product", en: "Data Product" },
    category: "data-management",
    shortDefinition: {
      fr: "Jeu de données ou service data conçu comme un produit.",
      en: "Dataset or data service designed as a product.",
    },
    detailedDefinition: {
      fr: "Un Data Product est pensé pour des utilisateurs identifiés, avec une valeur, un niveau de service, une documentation et un propriétaire clair.",
      en: "A Data Product is designed for identified users, with value, service level, documentation and clear ownership.",
    },
    whyItMatters: {
      fr: "Il pousse à mieux définir qualité, usage et responsabilité.",
      en: "It forces better definition of quality, usage and accountability.",
    },
    example: {
      fr: "Un dataset “Ventes journalières” documenté et maintenu pour les analystes.",
      en: "A documented and maintained “Daily Sales” dataset for analysts.",
    },
    relatedTerms: ["sla", "metadata", "data-owner"],
  },
  {
    slug: "data-lake",
    term: { fr: "Data Lake", en: "Data Lake" },
    category: "data-management",
    shortDefinition: {
      fr: "Espace de stockage massif de données brutes ou semi-structurées.",
      en: "Large-scale storage space for raw or semi-structured data.",
    },
    detailedDefinition: {
      fr: "Le Data Lake centralise des volumes importants de données hétérogènes avant transformation ou exploitation analytique.",
      en: "A Data Lake centralizes large volumes of heterogeneous data before transformation or analytical use.",
    },
    whyItMatters: {
      fr: "Il offre de la flexibilité, mais nécessite une forte gouvernance.",
      en: "It provides flexibility, but requires strong governance.",
    },
    example: {
      fr: "Stocker logs, fichiers, données IoT et exports CRM dans Azure Data Lake.",
      en: "Storing logs, files, IoT data and CRM exports in Azure Data Lake.",
    },
    relatedTerms: ["data-warehouse", "etl", "metadata"],
  },
  {
    slug: "data-warehouse",
    term: { fr: "Data Warehouse", en: "Data Warehouse" },
    category: "data-management",
    shortDefinition: {
      fr: "Entrepôt structuré de données pour le reporting et l’analyse.",
      en: "Structured warehouse of data for reporting and analysis.",
    },
    detailedDefinition: {
      fr: "Le Data Warehouse est conçu pour consolider des données modélisées et fiables, prêtes à être utilisées en BI et reporting.",
      en: "A Data Warehouse is designed to consolidate modeled and reliable data, ready for BI and reporting use.",
    },
    whyItMatters: {
      fr: "Il améliore la cohérence analytique et la performance de requête.",
      en: "It improves analytical consistency and query performance.",
    },
    example: {
      fr: "Snowflake ou BigQuery utilisés pour centraliser les données métier.",
      en: "Snowflake or BigQuery used to centralize business data.",
    },
    relatedTerms: ["data-lake", "etl", "data-model"],
  },
  {
    slug: "etl",
    term: { fr: "ETL / ELT", en: "ETL / ELT" },
    category: "data-management",
    shortDefinition: {
      fr: "Processus d’extraction, transformation et chargement des données.",
      en: "Process of extracting, transforming and loading data.",
    },
    detailedDefinition: {
      fr: "Les pipelines ETL/ELT transportent les données des systèmes sources vers les plateformes de stockage ou d’analyse en appliquant des règles de transformation.",
      en: "ETL/ELT pipelines move data from source systems to storage or analytics platforms while applying transformation rules.",
    },
    whyItMatters: {
      fr: "Ils sont au cœur de la chaîne de valeur de la donnée.",
      en: "They are at the heart of the data value chain.",
    },
    example: {
      fr: "Charger chaque nuit les commandes ERP dans le data warehouse.",
      en: "Loading ERP orders into the data warehouse every night.",
    },
    relatedTerms: ["data-lineage", "data-warehouse", "data-quality"],
  },
  {
    slug: "data-model",
    term: { fr: "Modèle de données", en: "Data Model" },
    category: "data-management",
    shortDefinition: {
      fr: "Structure logique utilisée pour représenter les données.",
      en: "Logical structure used to represent data.",
    },
    detailedDefinition: {
      fr: "Le modèle de données définit les entités, attributs, relations et règles de structuration d’un système de données.",
      en: "A data model defines the entities, attributes, relationships and structuring rules of a data system.",
    },
    whyItMatters: {
      fr: "Un mauvais modèle rend les données difficiles à exploiter et à gouverner.",
      en: "A poor model makes data hard to use and govern.",
    },
    example: {
      fr: "Modèle en étoile pour le reporting commercial.",
      en: "Star schema for sales reporting.",
    },
    relatedTerms: ["data-architect", "data-warehouse"],
  },
  {
    slug: "data-classification",
    term: { fr: "Classification des données", en: "Data Classification" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Répartition des données selon leur sensibilité ou criticité.",
      en: "Grouping data according to sensitivity or criticality.",
    },
    detailedDefinition: {
      fr: "La classification des données permet d’appliquer des règles différenciées selon qu’une donnée est publique, interne, confidentielle ou sensible.",
      en: "Data classification enables differentiated rules depending on whether data is public, internal, confidential or sensitive.",
    },
    whyItMatters: {
      fr: "Elle soutient l’accès, la sécurité et la conformité.",
      en: "It supports access, security and compliance.",
    },
    example: {
      fr: "Classer les données RH comme confidentielles.",
      en: "Classifying HR data as confidential.",
    },
    relatedTerms: ["access-control", "retention-policy", "gdpr"],
  },
  {
    slug: "access-control",
    term: { fr: "Contrôle d’accès", en: "Access Control" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Règles qui déterminent qui peut accéder à quoi.",
      en: "Rules that determine who can access what.",
    },
    detailedDefinition: {
      fr: "Le contrôle d’accès définit les droits de consultation, modification, export ou administration selon les profils et besoins.",
      en: "Access control defines consultation, modification, export or administration rights according to profiles and needs.",
    },
    whyItMatters: {
      fr: "Il limite les usages non autorisés et réduit l’exposition des données sensibles.",
      en: "It limits unauthorized use and reduces exposure of sensitive data.",
    },
    example: {
      fr: "Accès restreint aux salaires dans les données RH.",
      en: "Restricted access to salary data in HR systems.",
    },
    relatedTerms: ["rbac", "data-classification", "security"],
  },
  {
    slug: "rbac",
    term: { fr: "RBAC", en: "RBAC" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Role-Based Access Control : gestion des accès par rôle.",
      en: "Role-Based Access Control.",
    },
    detailedDefinition: {
      fr: "Le RBAC attribue les permissions non pas individuellement mais à des rôles métiers ou fonctionnels.",
      en: "RBAC assigns permissions not individually but to business or functional roles.",
    },
    whyItMatters: {
      fr: "Il rend la gestion des accès plus cohérente et plus scalable.",
      en: "It makes access management more consistent and scalable.",
    },
    example: {
      fr: "Le rôle “Analyste Finance” a accès aux dashboards financiers, pas aux données RH détaillées.",
      en: "The “Finance Analyst” role can access finance dashboards but not detailed HR data.",
    },
    relatedTerms: ["access-control", "least-privilege"],
  },
  {
    slug: "least-privilege",
    term: { fr: "Principe du moindre privilège", en: "Least Privilege" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Donner uniquement les accès nécessaires à une personne.",
      en: "Grant only the access necessary for a person.",
    },
    detailedDefinition: {
      fr: "Ce principe de sécurité vise à limiter les droits au strict nécessaire pour réduire les risques.",
      en: "This security principle aims to limit rights to the strict minimum in order to reduce risk.",
    },
    whyItMatters: {
      fr: "Plus les droits sont larges, plus l’exposition augmente.",
      en: "The broader the rights, the greater the exposure.",
    },
    example: {
      fr: "Un analyste visualise un agrégat sans pouvoir exporter les données brutes.",
      en: "An analyst can view an aggregate without exporting raw data.",
    },
    relatedTerms: ["rbac", "access-control"],
  },
  {
    slug: "gdpr",
    term: { fr: "RGPD", en: "GDPR" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Règlement européen sur la protection des données personnelles.",
      en: "European regulation on the protection of personal data.",
    },
    detailedDefinition: {
      fr: "Le RGPD encadre les traitements de données personnelles et impose des principes comme la licéité, la minimisation, la sécurité et l’accountability.",
      en: "GDPR regulates personal data processing and imposes principles such as lawfulness, minimization, security and accountability.",
    },
    whyItMatters: {
      fr: "Il structure la conformité et la gouvernance des données personnelles.",
      en: "It structures compliance and governance for personal data.",
    },
    example: {
      fr: "Documenter le registre de traitements et les bases légales.",
      en: "Documenting records of processing and legal bases.",
    },
    relatedTerms: ["privacy-by-design", "ropa", "dpia", "lawful-basis"],
  },
  {
    slug: "cnil",
    term: { fr: "CNIL", en: "CNIL" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Autorité française de protection des données.",
      en: "French data protection authority.",
    },
    detailedDefinition: {
      fr: "La CNIL veille en France au respect de la protection des données personnelles, informe, contrôle et peut sanctionner.",
      en: "In France, CNIL oversees compliance with personal data protection, informs, audits and can sanction.",
    },
    whyItMatters: {
      fr: "Elle fait partie des références majeures pour la conformité RGPD en France.",
      en: "It is a major reference for GDPR compliance in France.",
    },
    example: {
      fr: "Consulter les guides CNIL pour cadrer une AIPD.",
      en: "Using CNIL guides to frame a DPIA.",
    },
    relatedTerms: ["gdpr", "dpia"],
  },
  {
    slug: "personal-data",
    term: { fr: "Donnée personnelle", en: "Personal Data" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Toute information relative à une personne physique identifiée ou identifiable.",
      en: "Any information relating to an identified or identifiable natural person.",
    },
    detailedDefinition: {
      fr: "Une donnée personnelle peut être directe ou indirecte : nom, email, identifiant, localisation, historique, etc.",
      en: "Personal data may be direct or indirect: name, email, identifier, location, history, etc.",
    },
    whyItMatters: {
      fr: "C’est le point de départ des obligations RGPD.",
      en: "It is the starting point of GDPR obligations.",
    },
    example: {
      fr: "Une adresse email professionnelle nominative.",
      en: "A named professional email address.",
    },
    relatedTerms: ["sensitive-data", "gdpr", "pseudonymization"],
  },
  {
    slug: "sensitive-data",
    term: { fr: "Donnée sensible", en: "Sensitive Data" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Donnée à caractère particulièrement protégé par le RGPD.",
      en: "Data subject to enhanced protection under GDPR.",
    },
    detailedDefinition: {
      fr: "Les données sensibles incluent notamment santé, opinions politiques, religion, biométrie ou orientation sexuelle.",
      en: "Sensitive data includes health, political opinions, religion, biometrics or sexual orientation, among others.",
    },
    whyItMatters: {
      fr: "Leur traitement implique des exigences renforcées.",
      en: "Their processing involves enhanced obligations.",
    },
    example: {
      fr: "Données médicales dans une application RH.",
      en: "Medical data in an HR application.",
    },
    relatedTerms: ["personal-data", "gdpr", "security"],
  },
  {
    slug: "lawful-basis",
    term: { fr: "Base légale", en: "Lawful Basis" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Fondement juridique autorisant un traitement de données.",
      en: "Legal ground authorizing data processing.",
    },
    detailedDefinition: {
      fr: "En RGPD, chaque traitement de données personnelles doit reposer sur une base légale : contrat, obligation légale, consentement, intérêt légitime, etc.",
      en: "Under GDPR, each personal data processing activity must rely on a lawful basis: contract, legal obligation, consent, legitimate interest, etc.",
    },
    whyItMatters: {
      fr: "Sans base légale claire, le traitement est fragile juridiquement.",
      en: "Without a clear lawful basis, processing is legally fragile.",
    },
    example: {
      fr: "Traiter des données salariés pour exécuter le contrat de travail.",
      en: "Processing employee data to perform the employment contract.",
    },
    relatedTerms: ["gdpr", "consent", "ropa"],
  },
  {
    slug: "consent",
    term: { fr: "Consentement", en: "Consent" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Accord libre, spécifique, éclairé et univoque d’une personne.",
      en: "Freely given, specific, informed and unambiguous agreement of a person.",
    },
    detailedDefinition: {
      fr: "Le consentement est une base légale possible, mais il doit être recueilli et géré correctement pour être valable.",
      en: "Consent is one possible lawful basis, but it must be collected and managed correctly to be valid.",
    },
    whyItMatters: {
      fr: "Un consentement mal géré n’offre pas une base solide.",
      en: "Poorly managed consent does not provide a strong legal basis.",
    },
    example: {
      fr: "Accepter volontairement des cookies marketing.",
      en: "Voluntarily accepting marketing cookies.",
    },
    relatedTerms: ["lawful-basis", "gdpr"],
  },
  {
    slug: "privacy-by-design",
    term: { fr: "Privacy by Design", en: "Privacy by Design" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Intégration de la protection des données dès la conception.",
      en: "Integration of data protection from the design stage.",
    },
    detailedDefinition: {
      fr: "Le Privacy by Design impose de penser minimisation, sécurité, accès et conformité dès le lancement d’un projet ou système.",
      en: "Privacy by Design requires considering minimization, security, access and compliance from the start of a project or system.",
    },
    whyItMatters: {
      fr: "Corriger trop tard coûte plus cher et expose davantage.",
      en: "Fixing too late costs more and increases exposure.",
    },
    example: {
      fr: "Limiter les champs collectés dès la conception d’un formulaire.",
      en: "Limiting collected fields from the design of a form.",
    },
    relatedTerms: ["gdpr", "dpia", "minimization"],
  },
  {
    slug: "minimization",
    term: { fr: "Minimisation", en: "Data Minimization" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Principe consistant à ne collecter que le nécessaire.",
      en: "Principle of collecting only what is necessary.",
    },
    detailedDefinition: {
      fr: "La minimisation impose que les données personnelles collectées soient adéquates, pertinentes et limitées au strict nécessaire.",
      en: "Minimization requires that collected personal data be adequate, relevant and limited to what is strictly necessary.",
    },
    whyItMatters: {
      fr: "Moins on collecte, moins on s’expose.",
      en: "The less you collect, the less you expose yourself.",
    },
    example: {
      fr: "Ne pas demander la date de naissance si elle n’est pas utile.",
      en: "Not requesting date of birth if it is not needed.",
    },
    relatedTerms: ["privacy-by-design", "gdpr"],
  },
  {
    slug: "ropa",
    term: { fr: "Registre de traitements", en: "Record of Processing Activities" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Documentation structurée des traitements de données personnelles.",
      en: "Structured documentation of personal data processing activities.",
    },
    detailedDefinition: {
      fr: "Le registre de traitements recense les finalités, bases légales, catégories de données, durées, destinataires et mesures associées aux traitements.",
      en: "The record of processing activities lists purposes, lawful bases, data categories, retention, recipients and measures related to processing activities.",
    },
    whyItMatters: {
      fr: "C’est un support clé de pilotage et de preuve en conformité.",
      en: "It is a key steering and evidence support for compliance.",
    },
    example: {
      fr: "Documenter le traitement de gestion des candidatures RH.",
      en: "Documenting the HR recruitment processing activity.",
    },
    relatedTerms: ["gdpr", "dpia", "lawful-basis"],
  },
  {
    slug: "dpia",
    term: { fr: "AIPD / DPIA", en: "DPIA" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Analyse d’impact relative à la protection des données.",
      en: "Data Protection Impact Assessment.",
    },
    detailedDefinition: {
      fr: "L’AIPD évalue les risques pour les droits et libertés des personnes lorsqu’un traitement présente un niveau de risque élevé.",
      en: "A DPIA evaluates risks to individuals’ rights and freedoms when processing presents a high level of risk.",
    },
    whyItMatters: {
      fr: "Elle aide à anticiper et réduire les risques privacy.",
      en: "It helps anticipate and reduce privacy risks.",
    },
    example: {
      fr: "Évaluer un système de surveillance comportementale ou d’IA RH.",
      en: "Assessing a behavioral monitoring or HR AI system.",
    },
    relatedTerms: ["gdpr", "privacy-by-design", "risk-assessment"],
  },
  {
    slug: "pseudonymization",
    term: { fr: "Pseudonymisation", en: "Pseudonymization" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Remplacement des identifiants directs par des substituts.",
      en: "Replacement of direct identifiers with substitutes.",
    },
    detailedDefinition: {
      fr: "La pseudonymisation réduit le lien direct avec une personne sans rendre la ré-identification impossible.",
      en: "Pseudonymization reduces the direct link to an individual without making re-identification impossible.",
    },
    whyItMatters: {
      fr: "Elle réduit le risque, mais ne fait pas sortir du RGPD.",
      en: "It reduces risk, but does not take data outside GDPR scope.",
    },
    example: {
      fr: "Remplacer le nom par un identifiant technique dans un dataset d’analyse.",
      en: "Replacing the name with a technical identifier in an analytics dataset.",
    },
    relatedTerms: ["anonymization", "personal-data", "gdpr"],
  },
  {
    slug: "anonymization",
    term: { fr: "Anonymisation", en: "Anonymization" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Transformation irréversible supprimant l’identifiabilité d’une personne.",
      en: "Irreversible transformation removing identifiability of a person.",
    },
    detailedDefinition: {
      fr: "Une anonymisation correcte empêche de relier une donnée à une personne identifiée ou identifiable.",
      en: "Proper anonymization prevents linking data back to an identified or identifiable person.",
    },
    whyItMatters: {
      fr: "Une vraie anonymisation peut réduire fortement les contraintes RGPD.",
      en: "True anonymization can significantly reduce GDPR constraints.",
    },
    example: {
      fr: "Publier des statistiques agrégées sans identifiants individuels.",
      en: "Publishing aggregated statistics without individual identifiers.",
    },
    relatedTerms: ["pseudonymization", "personal-data"],
  },
  {
    slug: "retention-policy",
    term: { fr: "Politique de rétention", en: "Retention Policy" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Règles définissant combien de temps conserver les données.",
      en: "Rules defining how long data should be kept.",
    },
    detailedDefinition: {
      fr: "La politique de rétention fixe des durées de conservation adaptées aux finalités, obligations légales et besoins opérationnels.",
      en: "A retention policy sets retention periods aligned with purposes, legal obligations and operational needs.",
    },
    whyItMatters: {
      fr: "Conserver trop longtemps augmente les risques et l’exposition.",
      en: "Keeping data too long increases risks and exposure.",
    },
    example: {
      fr: "Supprimer automatiquement certains logs après 12 mois.",
      en: "Automatically deleting some logs after 12 months.",
    },
    relatedTerms: ["gdpr", "data-classification", "archiving"],
  },
  {
    slug: "archiving",
    term: { fr: "Archivage", en: "Archiving" },
    category: "data-management",
    shortDefinition: {
      fr: "Conservation structurée de données sur une durée donnée.",
      en: "Structured retention of data over a defined period.",
    },
    detailedDefinition: {
      fr: "L’archivage permet de conserver certaines données pour des besoins légaux, historiques ou de preuve, dans des conditions maîtrisées.",
      en: "Archiving enables some data to be retained for legal, historical or evidential purposes under controlled conditions.",
    },
    whyItMatters: {
      fr: "Il sépare les données actives des données à conserver sans usage courant.",
      en: "It separates active data from data kept without day-to-day use.",
    },
    example: {
      fr: "Archiver des factures après clôture comptable.",
      en: "Archiving invoices after accounting close.",
    },
    relatedTerms: ["retention-policy", "gdpr"],
  },
  {
    slug: "accountability",
    term: { fr: "Accountability", en: "Accountability" },
    category: "privacy-gdpr",
    shortDefinition: {
      fr: "Capacité à démontrer qu’on respecte les règles applicables.",
      en: "Ability to demonstrate compliance with applicable rules.",
    },
    detailedDefinition: {
      fr: "L’accountability implique de mettre en place des mesures, mais aussi de pouvoir prouver leur existence, leur suivi et leur efficacité.",
      en: "Accountability means implementing measures, but also being able to prove their existence, monitoring and effectiveness.",
    },
    whyItMatters: {
      fr: "En gouvernance et conformité, la preuve compte autant que l’intention.",
      en: "In governance and compliance, evidence matters as much as intent.",
    },
    example: {
      fr: "Pouvoir montrer un registre, une politique, une formation et une revue d’accès.",
      en: "Being able to show a register, a policy, training records and an access review.",
    },
    relatedTerms: ["gdpr", "evidence", "audit-trail"],
  },
  {
    slug: "evidence",
    term: { fr: "Preuve", en: "Evidence" },
    category: "data-governance",
    shortDefinition: {
      fr: "Élément démontrant qu’un contrôle ou une règle existe réellement.",
      en: "Element demonstrating that a control or rule actually exists.",
    },
    detailedDefinition: {
      fr: "Une preuve peut être un document, une capture, un export, une trace système, un compte-rendu ou tout support montrant qu’un dispositif est en place.",
      en: "Evidence may be a document, screenshot, export, system trace, meeting note or any artifact showing that a measure is in place.",
    },
    whyItMatters: {
      fr: "Sans preuve, la gouvernance reste déclarative.",
      en: "Without evidence, governance remains declarative.",
    },
    example: {
      fr: "Capture d’écran montrant la revue trimestrielle des accès.",
      en: "Screenshot showing the quarterly access review.",
    },
    relatedTerms: ["accountability", "audit-trail"],
  },
  {
    slug: "audit-trail",
    term: { fr: "Piste d’audit", en: "Audit Trail" },
    category: "data-governance",
    shortDefinition: {
      fr: "Historique traçable des actions et changements.",
      en: "Traceable history of actions and changes.",
    },
    detailedDefinition: {
      fr: "La piste d’audit permet de retracer qui a fait quoi, quand et sur quel objet ou système.",
      en: "An audit trail allows tracing who did what, when and on which object or system.",
    },
    whyItMatters: {
      fr: "Elle facilite les contrôles, enquêtes et analyses d’incident.",
      en: "It facilitates audits, investigations and incident analysis.",
    },
    example: {
      fr: "Historique des modifications d’un référentiel client.",
      en: "History of changes to a customer master record.",
    },
    relatedTerms: ["evidence", "data-lineage", "security"],
  },
  {
    slug: "risk-assessment",
    term: { fr: "Évaluation des risques", en: "Risk Assessment" },
    category: "ai-governance",
    shortDefinition: {
      fr: "Analyse structurée des risques liés à un traitement, un système ou un usage.",
      en: "Structured analysis of risks related to a process, system or use case.",
    },
    detailedDefinition: {
      fr: "L’évaluation des risques consiste à identifier les menaces, impacts et mesures associées à une activité, un système ou un traitement.",
      en: "Risk assessment involves identifying threats, impacts and related measures for an activity, system or processing operation.",
    },
    whyItMatters: {
      fr: "Elle aide à prioriser les actions et à documenter les décisions.",
      en: "It helps prioritize actions and document decisions.",
    },
    example: {
      fr: "Évaluer les risques liés à un usage de scoring automatisé.",
      en: "Assessing risks related to an automated scoring use case.",
    },
    relatedTerms: ["dpia", "ai-risk", "risk-register"],
  },
  {
    slug: "risk-register",
    term: { fr: "Registre des risques", en: "Risk Register" },
    category: "ai-governance",
    shortDefinition: {
      fr: "Support de suivi des risques identifiés et de leur traitement.",
      en: "Support used to track identified risks and their treatment.",
    },
    detailedDefinition: {
      fr: "Le registre des risques documente les risques, leur niveau, leurs responsables, les mesures prévues et leur statut.",
      en: "A risk register documents risks, their level, owners, planned measures and status.",
    },
    whyItMatters: {
      fr: "Il transforme le risque en pilotage concret.",
      en: "It turns risk into concrete steering.",
    },
    example: {
      fr: "Suivre les risques liés aux cas d’usage IA internes.",
      en: "Tracking risks related to internal AI use cases.",
    },
    relatedTerms: ["risk-assessment", "ai-governance"],
  },
  {
    slug: "ai-governance",
    term: { fr: "Gouvernance de l’IA", en: "AI Governance" },
    category: "ai-governance",
    shortDefinition: {
      fr: "Cadre de pilotage, de contrôle et de responsabilité autour des usages IA.",
      en: "Framework for steering, control and accountability around AI uses.",
    },
    detailedDefinition: {
      fr: "La gouvernance de l’IA encadre les usages, risques, responsabilités, règles et documentations associés aux systèmes d’IA dans une organisation.",
      en: "AI Governance frames the uses, risks, responsibilities, rules and documentation associated with AI systems in an organization.",
    },
    whyItMatters: {
      fr: "Elle réduit les angles morts sur les usages IA et les risques associés.",
      en: "It reduces blind spots around AI uses and related risks.",
    },
    example: {
      fr: "Créer un registre des usages IA avec propriétaire, finalité et niveau de risque.",
      en: "Creating an AI use case register with owner, purpose and risk level.",
    },
    relatedTerms: ["ai-literacy", "ai-act", "risk-register"],
  },
  {
    slug: "ai-literacy",
    term: { fr: "AI Literacy", en: "AI Literacy" },
    category: "ai-governance",
    shortDefinition: {
      fr: "Niveau minimal de compréhension des usages, limites et risques de l’IA.",
      en: "Minimum level of understanding of AI uses, limits and risks.",
    },
    detailedDefinition: {
      fr: "L’AI Literacy désigne la capacité des équipes à comprendre ce que fait un système d’IA, ses limites, ses impacts et les précautions d’usage.",
      en: "AI Literacy is the ability of teams to understand what an AI system does, its limits, impacts and usage precautions.",
    },
    whyItMatters: {
      fr: "Une mauvaise compréhension augmente les usages non maîtrisés.",
      en: "Poor understanding increases uncontrolled usage.",
    },
    example: {
      fr: "Former les équipes à ne pas injecter n’importe quelle donnée dans un LLM.",
      en: "Training teams not to upload any kind of data into an LLM.",
    },
    relatedTerms: ["ai-governance", "ai-act", "prompt-security"],
  },
  {
    slug: "ai-act",
    term: { fr: "AI Act", en: "AI Act" },
    category: "ai-governance",
    shortDefinition: {
      fr: "Règlement européen encadrant les systèmes d’intelligence artificielle.",
      en: "European regulation governing artificial intelligence systems.",
    },
    detailedDefinition: {
      fr: "L’AI Act organise les obligations autour des systèmes IA selon leur niveau de risque et impose certaines exigences de documentation, gouvernance et contrôle.",
      en: "The AI Act structures obligations around AI systems according to risk levels and imposes documentation, governance and control requirements.",
    },
    whyItMatters: {
      fr: "Il pousse les entreprises à mieux inventorier et gouverner leurs usages IA.",
      en: "It pushes organizations to better inventory and govern their AI uses.",
    },
    example: {
      fr: "Identifier les cas d’usage à risque élevé et documenter leur encadrement.",
      en: "Identifying high-risk use cases and documenting their governance.",
    },
    relatedTerms: ["ai-governance", "high-risk-ai-system", "ai-literacy"],
  },
  {
    slug: "high-risk-ai-system",
    term: { fr: "Système d’IA à haut risque", en: "High-Risk AI System" },
    category: "ai-governance",
    shortDefinition: {
      fr: "Système d’IA soumis à des obligations renforcées par l’AI Act.",
      en: "AI system subject to enhanced obligations under the AI Act.",
    },
    detailedDefinition: {
      fr: "Un système d’IA à haut risque est un système utilisé dans certains contextes sensibles où les impacts sur les personnes ou les droits peuvent être significatifs.",
      en: "A high-risk AI system is one used in sensitive contexts where impacts on people or rights may be significant.",
    },
    whyItMatters: {
      fr: "Ces systèmes nécessitent une gouvernance et une documentation plus fortes.",
      en: "These systems require stronger governance and documentation.",
    },
    example: {
      fr: "Un système d’évaluation automatisée influençant l’accès à un emploi.",
      en: "An automated assessment system influencing access to employment.",
    },
    relatedTerms: ["ai-act", "risk-assessment", "model-card"],
  },
  {
    slug: "model-card",
    term: { fr: "Model Card", en: "Model Card" },
    category: "ai-governance",
    shortDefinition: {
      fr: "Fiche décrivant un modèle d’IA, ses usages et limites.",
      en: "Card describing an AI model, its uses and limits.",
    },
    detailedDefinition: {
      fr: "La Model Card documente les objectifs, données, performances, limites, risques et usages recommandés d’un modèle.",
      en: "A Model Card documents the objectives, data, performance, limitations, risks and intended uses of a model.",
    },
    whyItMatters: {
      fr: "Elle améliore la transparence et la documentation des modèles.",
      en: "It improves transparency and model documentation.",
    },
    example: {
      fr: "Créer une fiche pour un modèle de classification de tickets support.",
      en: "Creating a card for a support ticket classification model.",
    },
    relatedTerms: ["ai-governance", "high-risk-ai-system"],
  },
  {
    slug: "prompt-security",
    term: { fr: "Sécurité des prompts", en: "Prompt Security" },
    category: "ai-governance",
    shortDefinition: {
      fr: "Pratiques de maîtrise des risques liés à l’usage des prompts dans les IA génératives.",
      en: "Practices for controlling risks linked to prompt usage in generative AI.",
    },
    detailedDefinition: {
      fr: "La sécurité des prompts couvre la protection contre la divulgation d’informations, les attaques de prompt injection et les usages non encadrés des modèles génératifs.",
      en: "Prompt security covers protection against information leakage, prompt injection attacks and uncontrolled generative model usage.",
    },
    whyItMatters: {
      fr: "Les usages quotidiens des LLM exposent rapidement des données sensibles.",
      en: "Daily LLM usage can quickly expose sensitive data.",
    },
    example: {
      fr: "Interdire le copier-coller de données clients dans un assistant public.",
      en: "Prohibiting copy-pasting customer data into a public assistant.",
    },
    relatedTerms: ["ai-literacy", "security", "ai-governance"],
  },
  {
    slug: "data-mesh",
    term: { fr: "Data Mesh", en: "Data Mesh" },
    category: "data-governance",
    shortDefinition: {
      fr: "Approche décentralisée de gestion des données par domaine.",
      en: "Decentralized approach to managing data by domain.",
    },
    detailedDefinition: {
      fr: "Le Data Mesh propose de distribuer l’ownership des données aux domaines métiers tout en gardant des standards communs.",
      en: "Data Mesh proposes distributing data ownership to business domains while keeping shared standards.",
    },
    whyItMatters: {
      fr: "Il repense l’organisation data à grande échelle.",
      en: "It rethinks data organization at scale.",
    },
    example: {
      fr: "Chaque domaine publie ses propres data products selon des standards communs.",
      en: "Each domain publishes its own data products according to shared standards.",
    },
    relatedTerms: ["data-product", "data-domain", "federated-governance"],
  },
  {
    slug: "federated-governance",
    term: { fr: "Gouvernance fédérée", en: "Federated Governance" },
    category: "data-governance",
    shortDefinition: {
      fr: "Modèle combinant standards centraux et responsabilités locales.",
      en: "Model combining central standards and local accountability.",
    },
    detailedDefinition: {
      fr: "La gouvernance fédérée répartit certaines responsabilités aux domaines tout en conservant un cadre commun porté au niveau central.",
      en: "Federated governance distributes some responsibilities to domains while keeping a shared central framework.",
    },
    whyItMatters: {
      fr: "Elle permet de scaler la gouvernance sans tout centraliser.",
      en: "It allows governance to scale without centralizing everything.",
    },
    example: {
      fr: "Des Data Owners locaux avec des standards qualité définis par un centre de gouvernance.",
      en: "Local Data Owners with quality standards defined by a governance center.",
    },
    relatedTerms: ["data-mesh", "data-domain", "governance-council"],
  },
  {
    slug: "data-maturity",
    term: { fr: "Maturité data", en: "Data Maturity" },
    category: "data-governance",
    shortDefinition: {
      fr: "Niveau de structuration et de pilotage des pratiques data.",
      en: "Level of structuring and steering of data practices.",
    },
    detailedDefinition: {
      fr: "La maturité data mesure le degré d’organisation, de documentation, de pilotage et d’industrialisation d’une organisation autour de la donnée.",
      en: "Data maturity measures the degree of organization, documentation, steering and industrialization of an organization around data.",
    },
    whyItMatters: {
      fr: "Elle aide à prioriser les chantiers et à suivre les progrès.",
      en: "It helps prioritize workstreams and monitor progress.",
    },
    example: {
      fr: "Passer d’un niveau ad hoc à un niveau structuré avec rôles et KPI.",
      en: "Moving from an ad hoc level to a structured level with roles and KPIs.",
    },
    relatedTerms: ["maturity-model", "roadmap", "kpi"],
  },
  {
    slug: "maturity-model",
    term: { fr: "Modèle de maturité", en: "Maturity Model" },
    category: "data-governance",
    shortDefinition: {
      fr: "Référentiel permettant d’évaluer le niveau d’avancement d’une organisation.",
      en: "Framework used to assess an organization’s level of advancement.",
    },
    detailedDefinition: {
      fr: "Un modèle de maturité décrit différents niveaux d’évolution d’une organisation sur des critères comme rôles, standards, qualité, contrôle et pilotage.",
      en: "A maturity model describes different levels of evolution of an organization on criteria such as roles, standards, quality, control and steering.",
    },
    whyItMatters: {
      fr: "Il donne un langage commun pour évaluer et améliorer.",
      en: "It provides a common language for assessment and improvement.",
    },
    example: {
      fr: "Évaluer une organisation sur trois niveaux : initial, opérationnel, optimisé.",
      en: "Assessing an organization on three levels: initial, operational, optimized.",
    },
    relatedTerms: ["data-maturity", "roadmap"],
  },
  {
    slug: "roadmap",
    term: { fr: "Feuille de route", en: "Roadmap" },
    category: "data-governance",
    shortDefinition: {
      fr: "Plan d’action priorisé dans le temps.",
      en: "Time-based prioritized action plan.",
    },
    detailedDefinition: {
      fr: "La feuille de route organise les actions de transformation ou de gouvernance par priorités, responsables, échéances et résultats attendus.",
      en: "A roadmap organizes transformation or governance actions by priority, owner, deadline and expected result.",
    },
    whyItMatters: {
      fr: "Elle transforme un diagnostic en mouvement concret.",
      en: "It turns diagnosis into concrete movement.",
    },
    example: {
      fr: "Roadmap 30/60/90 jours pour lancer une gouvernance data.",
      en: "30/60/90 roadmap to launch data governance.",
    },
    relatedTerms: ["maturity-model", "risk-register", "quick-win"],
  },
  {
    slug: "quick-win",
    term: { fr: "Quick Win", en: "Quick Win" },
    category: "data-governance",
    shortDefinition: {
      fr: "Action à impact rapide et effort modéré.",
      en: "Action with rapid impact and moderate effort.",
    },
    detailedDefinition: {
      fr: "Un quick win est une action courte et visible qui permet de montrer rapidement de la valeur ou de réduire un risque.",
      en: "A quick win is a short, visible action that quickly demonstrates value or reduces risk.",
    },
    whyItMatters: {
      fr: "Ils facilitent l’adhésion des équipes à une démarche de gouvernance.",
      en: "They help teams buy into a governance initiative.",
    },
    example: {
      fr: "Formaliser un RACI ou créer une première scorecard qualité.",
      en: "Formalizing a RACI or creating a first quality scorecard.",
    },
    relatedTerms: ["roadmap", "data-maturity"],
  },
  {
    slug: "data-contract",
    term: { fr: "Data Contract", en: "Data Contract" },
    category: "data-management",
    shortDefinition: {
      fr: "Accord explicite sur la structure et les attentes d’un flux de données.",
      en: "Explicit agreement on the structure and expectations of a data flow.",
    },
    detailedDefinition: {
      fr: "Un Data Contract formalise le schéma, la qualité attendue, les règles de livraison et les responsabilités entre producteurs et consommateurs de données.",
      en: "A Data Contract formalizes the schema, expected quality, delivery rules and responsibilities between data producers and consumers.",
    },
    whyItMatters: {
      fr: "Il réduit les incompréhensions entre équipes et sécurise les flux.",
      en: "It reduces misunderstandings between teams and secures flows.",
    },
    example: {
      fr: "Contrat entre l’équipe CRM et l’équipe BI sur la structure d’un export client.",
      en: "Contract between the CRM team and the BI team on the structure of a customer export.",
    },
    relatedTerms: ["sla", "data-product", "etl"],
  },
  {
    slug: "observability",
    term: { fr: "Data Observability", en: "Data Observability" },
    category: "data-quality",
    shortDefinition: {
      fr: "Capacité à surveiller l’état et le comportement des flux de données.",
      en: "Ability to monitor the condition and behavior of data flows.",
    },
    detailedDefinition: {
      fr: "La Data Observability vise à détecter rapidement les anomalies sur les pipelines, volumes, distributions, fraîcheur et schémas de données.",
      en: "Data Observability aims to quickly detect anomalies in pipelines, volumes, distributions, freshness and data schemas.",
    },
    whyItMatters: {
      fr: "Elle renforce le pilotage proactif de la qualité et de la fiabilité.",
      en: "It strengthens proactive steering of quality and reliability.",
    },
    example: {
      fr: "Détecter qu’un flux quotidien a soudainement 40 % de lignes en moins.",
      en: "Detecting that a daily flow suddenly has 40% fewer rows.",
    },
    relatedTerms: ["data-incident", "scorecard", "etl"],
  },
  {
    slug: "semantic-layer",
    term: { fr: "Couche sémantique", en: "Semantic Layer" },
    category: "bi-analytics",
    shortDefinition: {
      fr: "Couche de définition partagée des métriques et concepts analytiques.",
      en: "Shared definition layer for metrics and analytical concepts.",
    },
    detailedDefinition: {
      fr: "La couche sémantique permet d’aligner les calculs et les définitions utilisées dans les outils analytiques pour éviter les divergences.",
      en: "The semantic layer aligns calculations and definitions used across analytics tools to avoid discrepancies.",
    },
    whyItMatters: {
      fr: "Elle améliore la cohérence des KPI entre dashboards.",
      en: "It improves KPI consistency across dashboards.",
    },
    example: {
      fr: "Définir une seule formule officielle pour le “revenu net”.",
      en: "Defining one official formula for “net revenue”.",
    },
    relatedTerms: ["kpi", "business-glossary", "dashboard"],
  },
  {
    slug: "data-dictionary",
    term: { fr: "Dictionnaire de données", en: "Data Dictionary" },
    category: "data-management",
    shortDefinition: {
      fr: "Référentiel décrivant les champs, formats et significations des données.",
      en: "Reference describing fields, formats and meanings of data.",
    },
    detailedDefinition: {
      fr: "Le dictionnaire de données documente les champs, types, formats, règles de remplissage et définitions associées aux jeux de données.",
      en: "A data dictionary documents fields, types, formats, filling rules and related definitions for datasets.",
    },
    whyItMatters: {
      fr: "Il réduit les erreurs d’interprétation et facilite l’onboarding.",
      en: "It reduces interpretation errors and facilitates onboarding.",
    },
    example: {
      fr: "Documenter les colonnes d’une table de commandes.",
      en: "Documenting the columns of an orders table.",
    },
    relatedTerms: ["metadata", "business-glossary", "data-catalog"],
  },
];

export function getCategoryLabel(
  category: GlossaryCategory,
  locale: "fr" | "en"
) {
  const labels = {
    fr: {
      "data-governance": "Gouvernance Data",
      "data-management": "Data Management",
      "data-quality": "Qualité des données",
      "bi-analytics": "BI & Analytics",
      "privacy-gdpr": "RGPD & Privacy",
      "ai-governance": "Gouvernance IA",
    },
    en: {
      "data-governance": "Data Governance",
      "data-management": "Data Management",
      "data-quality": "Data Quality",
      "bi-analytics": "BI & Analytics",
      "privacy-gdpr": "GDPR & Privacy",
      "ai-governance": "AI Governance",
    },
  };

  return labels[locale][category];
}