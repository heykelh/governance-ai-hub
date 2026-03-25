"use client";

import { Award, Flame, Star, Target, Trophy, Zap } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";

export function LearningGamificationPanel() {
  const { t, locale } = useLanguage();

  const xp = 320;
  const nextLevelXp = 500;
  const progress = Math.round((xp / nextLevelXp) * 100);

  const badges =
    locale === "fr"
      ? ["Governance Starter", "RGPD Explorer", "Audit Beginner"]
      : ["Governance Starter", "GDPR Explorer", "Audit Beginner"];

  return (
    <section className="container-shell py-16">
      <div className="glass-card rounded-[32px] p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
              {t.gamification.badge}
            </p>
            <h2 className="section-title mt-4 text-white">{t.gamification.title}</h2>
            <p className="section-copy text-slate-300">
              {locale === "fr"
                ? "Une couche de gamification discrète mais premium pour encourager la progression et rendre l’apprentissage plus engageant."
                : "A premium gamification layer to encourage progress and make learning more engaging."}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <StatCard icon={Zap} label={t.gamification.xp} value="320" />
              <StatCard icon={Trophy} label={t.gamification.level} value="3" />
              <StatCard icon={Flame} label={t.gamification.streak} value="5 j" />
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                <span>{t.gamification.nextReward}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-slate-400">{t.gamification.reward}</p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <Target className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {t.gamification.missions}
                </span>
              </div>

              <ul className="space-y-3 text-slate-300">
                {[t.gamification.quest1, t.gamification.quest2, t.gamification.quest3].map(
                  (quest) => (
                    <li
                      key={quest}
                      className="font-ui rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    >
                      {quest}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <Award className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {t.gamification.badges}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <div
                    key={badge}
                    className="font-ui inline-flex items-center gap-2 rounded-full border border-white/10 bg-indigo-500/10 px-4 py-2 text-sm text-slate-200"
                  >
                    <Star className="h-4 w-4 text-indigo-300" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">
        <Icon className="h-5 w-5 text-indigo-300" />
      </div>
      <div className="mt-4 text-3xl font-semibold text-white">{value}</div>
      <div className="font-ui mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}