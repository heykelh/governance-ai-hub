import type { TutorialItem } from "./types";

import { comprendreDataGovernance } from "./beginner/comprendre-data-governance";
import { enjeuxRisquesDataGovernance } from "./beginner/enjeux-risques-data-governance";
import { quatrePiliersDataGovernance } from "./beginner/4-piliers-data-governance";
import { raciGouvernanceData } from "./beginner/raci-gouvernance-data";
import { scorecardQualiteDonnees } from "./beginner/scorecard-qualite-donnees";
import { feuilleRouteDataGovernance90Jours } from "./beginner/feuille-route-data-governance-90-jours";

import { miniAuditRgpdPme } from "./intermediate/mini-audit-rgpd-pme";
import { registreTraitementsEtPreuve } from "./intermediate/registre-traitements-et-preuve";
import { classificationDonneesEtAcces } from "./intermediate/classification-donnees-et-acces";
import { controlesQualiteEtIndicateurs } from "./intermediate/controles-qualite-et-indicateurs";
import { gouvernanceDocumentaire } from "./intermediate/gouvernance-documentaire";
import { planActionEtPriorisation } from "./intermediate/plan-action-et-priorisation";

import { gouvernanceIaEtAiAct } from "./advanced/gouvernance-ia-et-ai-act";
import { registreUsagesIa } from "./advanced/registre-usages-ia";
import { registreRisquesIa } from "./advanced/registre-risques-ia";
import { documentationDesControlesIa } from "./advanced/documentation-des-controles-ia";
import { modeleMaturiteIa } from "./advanced/modele-maturite-ia";
import { operatingModelGouvernanceIa } from "./advanced/operating-model-gouvernance-ia";

export type { TutorialItem, TutorialSection } from "./types";

export const tutorials: TutorialItem[] = [
  comprendreDataGovernance,
  enjeuxRisquesDataGovernance,
  quatrePiliersDataGovernance,
  raciGouvernanceData,
  scorecardQualiteDonnees,
  feuilleRouteDataGovernance90Jours,

  miniAuditRgpdPme,
  registreTraitementsEtPreuve,
  classificationDonneesEtAcces,
  controlesQualiteEtIndicateurs,
  gouvernanceDocumentaire,
  planActionEtPriorisation,

  gouvernanceIaEtAiAct,
  registreUsagesIa,
  registreRisquesIa,
  documentationDesControlesIa,
  modeleMaturiteIa,
  operatingModelGouvernanceIa,
];

export function getTutorialBySlug(slug: string) {
  return tutorials.find((tutorial) => tutorial.slug === slug);
}