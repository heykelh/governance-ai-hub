"use client";

import { Award, CheckCircle2, Flame, Sparkles, Target, Zap } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { useLearningStats } from "@/hooks/use-learning-stats";

export function LearningGamificationPanel() {
  const { t } = useLanguage();
  const stats = useLearningStats();

  const missions = [
    t.gamification.mission1,
    t.gamification.mission2,
    t.gamification.mission3,
  ];

  const statCards = [
    {
      key: "xp",
      label: t.gamification.xpTitle,
      value: stats.xp,
      icon: Zap,
    },
    {
      key: "completed",
      label: t.gamification.completedTitle,
      value: stats.completedTutorials,
      icon: CheckCircle2,
    },
    {
      key: "badges",
      label: t.gamification.badgesTitle,
      value: stats.badgesUnlocked,
      icon: Award,
    },
    {
      key: "streak",
      label: t.gamification.streakTitle,
      value: `${stats.streakDays} ${t.gamification.streakValue}`,
      icon: Flame,
    },
  ];

  return (
    <section className="container-shell py-12">
      <div className="glass-card rounded-[32px] p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
              {t.gamification.badge}
            </p>

            <h2 className="section-title mt-4 text-white">
              {t.gamification.title}
            </h2>

            <p className="section-copy text-slate-300">
              {t.gamification.subtitle}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {statCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.key}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center gap-2 text-indigo-300">
                      <Icon className="h-4 w-4" />
                      <span className="font-ui text-xs uppercase tracking-[0.18em]">
                        {card.label}
                      </span>
                    </div>

                    <div className="mt-3 text-3xl font-semibold text-white">
                      {card.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-indigo-300">
              <Target className="h-5 w-5" />
              <span className="font-ui text-sm uppercase tracking-[0.18em]">
                {t.gamification.missionsTitle}
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {missions.map((quest, index) => (
                <li
                  key={`mission-${index}`}
                  className="font-ui rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {quest}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-[24px] border border-indigo-400/20 bg-indigo-500/10 p-4">
              <div className="flex items-center gap-2 text-indigo-300">
                <Sparkles className="h-4 w-4" />
                <span className="font-ui text-xs uppercase tracking-[0.18em]">
                  XP
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {stats.xp < 150
                  ? "Tu démarres bien. Termine quelques contenus pour débloquer plus rapidement tes premiers badges."
                  : stats.xp < 400
                  ? "Ta progression devient visible. Continue avec les modules et le simulateur pour renforcer ton profil."
                  : "Très bon rythme. Ton profil commence à ressembler à celui d’une personne capable de produire de vrais livrables."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}