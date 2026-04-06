"use client";

import { useEffect, useMemo, useState } from "react";
import { tutorials } from "@/data/tutorials";

type LearningStats = {
  xp: number;
  completedTutorials: number;
  totalTutorials: number;
};

export function useLearningStats(): LearningStats {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

  useEffect(() => {
    const completed = tutorials
      .map((tutorial) => tutorial.slug)
      .filter(
        (slug) =>
          typeof window !== "undefined" &&
          window.localStorage.getItem(`gov-ai-hub:tutorial:${slug}:completed`) === "true",
      );

    setCompletedSlugs(completed);
  }, []);

  const stats = useMemo(() => {
    const completedTutorials = completedSlugs.length;
    const xp = tutorials
      .filter((tutorial) => completedSlugs.includes(tutorial.slug))
      .reduce((sum, tutorial) => sum + tutorial.xp, 0);

    return {
      xp,
      completedTutorials,
      totalTutorials: tutorials.length,
    };
  }, [completedSlugs]);

  return stats;
}