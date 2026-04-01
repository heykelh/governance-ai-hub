"use client";

import { useEffect, useMemo, useState } from "react";
import { tutorials } from "@/data/tutorials";

type LearningStats = {
  xp: number;
  completedTutorials: number;
  badgesUnlocked: number;
  badges: string[];
  auditSimulatorUsed: boolean;
  auditRuns: number;
  streakDays: number;
};

export function useLearningStats(): LearningStats {
  const [xp, setXp] = useState(0);
  const [completedTutorials, setCompletedTutorials] = useState(0);
  const [auditSimulatorUsed, setAuditSimulatorUsed] = useState(false);
  const [auditRuns, setAuditRuns] = useState(0);
  const [streakDays, setStreakDays] = useState(0);

  useEffect(() => {
    const totalXp = Number(window.localStorage.getItem("gov-ai-hub:xp-total") ?? "0");
    setXp(totalXp);

    const completedCount = tutorials.filter((tutorial) => {
      return window.localStorage.getItem(
        `gov-ai-hub:tutorial:${tutorial.slug}:completed`
      ) === "true";
    }).length;

    setCompletedTutorials(completedCount);

    const simulatorUsed =
      window.localStorage.getItem("gov-ai-hub:audit-simulator:used") === "true";
    setAuditSimulatorUsed(simulatorUsed);

    const runs = Number(window.localStorage.getItem("gov-ai-hub:audit-simulator:runs") ?? "0");
    setAuditRuns(runs);

    const streak = Number(window.localStorage.getItem("gov-ai-hub:streak-days") ?? "0");
    setStreakDays(streak);
  }, []);

  const badges = useMemo(() => {
    const unlocked: string[] = [];

    if (xp >= 100) unlocked.push("Governance Starter");
    if (completedTutorials >= 1) unlocked.push("Tutorial Explorer");
    if (completedTutorials >= 3) unlocked.push("Learning Builder");
    if (auditSimulatorUsed) unlocked.push("Audit Explorer");
    if (xp >= 500) unlocked.push("Governance Climber");

    return unlocked;
  }, [xp, completedTutorials, auditSimulatorUsed]);

  return {
    xp,
    completedTutorials,
    badgesUnlocked: badges.length,
    badges,
    auditSimulatorUsed,
    auditRuns,
    streakDays,
  };
}