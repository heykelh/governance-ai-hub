import type { TutorialItem } from "./types";

import { comprendreDataGovernance } from "./beginner/comprendre-data-governance";
import { enjeuxRisquesDataGovernance } from "./beginner/enjeux-risques-data-governance";

import { miniAuditRgpdPme } from "./intermediate/mini-audit-rgpd-pme";

import { registreUsagesIa } from "./advanced/registre-usages-ia";

export type { TutorialItem, TutorialSection } from "./types";

export const tutorials: TutorialItem[] = [
  comprendreDataGovernance,
  enjeuxRisquesDataGovernance,
  miniAuditRgpdPme,
  registreUsagesIa,
];

export function getTutorialBySlug(slug: string) {
  return tutorials.find((tutorial) => tutorial.slug === slug);
}