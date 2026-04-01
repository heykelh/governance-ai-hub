"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";

type Props = {
  slug: string;
  xp: number;
};

export function TutorialCompleteButton({ slug, xp }: Props) {
  const { locale } = useLanguage();
  const [completed, setCompleted] = useState(false);

  const tutorialKey = useMemo(
    () => `gov-ai-hub:tutorial:${slug}:completed`,
    [slug]
  );
  const xpKey = "gov-ai-hub:xp-total";

  useEffect(() => {
    const stored = window.localStorage.getItem(tutorialKey);
    setCompleted(stored === "true");
  }, [tutorialKey]);

  const markCompleted = () => {
    if (completed) return;

    window.localStorage.setItem(tutorialKey, "true");

    const currentXp = Number(window.localStorage.getItem(xpKey) ?? "0");
    window.localStorage.setItem(xpKey, String(currentXp + xp));

    setCompleted(true);
  };

  const markUncompleted = () => {
    if (!completed) return;

    window.localStorage.setItem(tutorialKey, "false");

    const currentXp = Number(window.localStorage.getItem(xpKey) ?? "0");
    const nextXp = Math.max(0, currentXp - xp);
    window.localStorage.setItem(xpKey, String(nextXp));

    setCompleted(false);
  };

  return (
    <div className="space-y-3">
      {!completed ? (
        <Button
          onClick={markCompleted}
          className="w-full rounded-2xl bg-indigo-500 text-white hover:bg-indigo-400"
        >
          <Star className="mr-2 h-4 w-4" />
          {locale === "fr"
            ? `Marquer comme complété (+${xp} XP)`
            : `Mark as completed (+${xp} XP)`}
        </Button>
      ) : (
        <div className="space-y-3">
          <Button
            disabled
            className="w-full rounded-2xl bg-emerald-600 text-white opacity-90"
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            {locale === "fr" ? "Tutoriel complété" : "Tutorial completed"}
          </Button>

          <Button
            onClick={markUncompleted}
            variant="outline"
            className="w-full rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            {locale === "fr"
              ? "Marquer comme non réalisé"
              : "Mark as not completed"}
          </Button>
        </div>
      )}

      <p className="text-center text-xs text-slate-400">
        {locale === "fr"
          ? "L’état est sauvegardé localement dans ton navigateur."
          : "Completion is saved locally in your browser."}
      </p>
    </div>
  );
}