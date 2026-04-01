"use client";

import Link from "next/link";
import {
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  FileText,
  Flame,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { useLanguage } from "@/providers/language-provider";
import { useLearningStats } from "@/hooks/use-learning-stats";

export function MemberDashboardPage() {
  const { locale } = useLanguage();
  const stats = useLearningStats();

  const level = getLevel(stats.xp);
  const nextLevelXp = getNextLevelXp(level);
  const currentLevelBaseXp = getCurrentLevelBaseXp(level);
  const progressWithinLevel =
    nextLevelXp - currentLevelBaseXp === 0
      ? 0
      : Math.round(
          ((stats.xp - currentLevelBaseXp) / (nextLevelXp - currentLevelBaseXp)) * 100
        );

  const cards =
    locale === "fr"
      ? [
          {
            label: "XP total",
            value: String(stats.xp),
            icon: Zap,
          },
          {
            label: "Niveau",
            value: String(level),
            icon: Trophy,
          },
          {
            label: "Tutoriels complétés",
            value: String(stats.completedTutorials),
            icon: CheckCircle2,
          },
          {
            label: "Badges",
            value: String(stats.badgesUnlocked),
            icon: Award,
          },
        ]
      : [
          {
            label: "Total XP",
            value: String(stats.xp),
            icon: Zap,
          },
          {
            label: "Level",
            value: String(level),
            icon: Trophy,
          },
          {
            label: "Completed tutorials",
            value: String(stats.completedTutorials),
            icon: CheckCircle2,
          },
          {
            label: "Badges",
            value: String(stats.badgesUnlocked),
            icon: Award,
          },
        ];

  const quickActions =
    locale === "fr"
      ? [
          { title: "Continuer à apprendre", href: "/learn", icon: BookOpen },
          { title: "Faire le simulateur d’audit", href: "/audit-simulator", icon: ShieldCheck },
          { title: "Explorer les ressources", href: "/resources", icon: FileText },
          { title: "Voir les tutoriels", href: "/tutorials", icon: BrainCircuit },
        ]
      : [
          { title: "Continue learning", href: "/learn", icon: BookOpen },
          { title: "Run the audit simulator", href: "/audit-simulator", icon: ShieldCheck },
          { title: "Explore resources", href: "/resources", icon: FileText },
          { title: "View tutorials", href: "/tutorials", icon: BrainCircuit },
        ];

  const missions =
    locale === "fr"
      ? [
          {
            label: "Compléter 1 tutoriel pratique",
            done: stats.completedTutorials >= 1,
          },
          {
            label: "Atteindre 100 XP",
            done: stats.xp >= 100,
          },
          {
            label: "Lancer le simulateur d’audit",
            done: stats.auditSimulatorUsed,
          },
        ]
      : [
          {
            label: "Complete 1 practical tutorial",
            done: stats.completedTutorials >= 1,
          },
          {
            label: "Reach 100 XP",
            done: stats.xp >= 100,
          },
          {
            label: "Launch the audit simulator",
            done: stats.auditSimulatorUsed,
          },
        ];

  return (
    <main className="min-h-screen text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(129,140,248,0.14),transparent_26%)]" />

        <div className="container-shell relative py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="font-ui mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
              <Sparkles className="h-4 w-4" />
              {locale === "fr" ? "Dashboard membre" : "Member dashboard"}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {locale === "fr"
                ? "Suis ta progression et débloque ton expertise"
                : "Track your progress and unlock your expertise"}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {locale === "fr"
                ? "Retrouve ici ton XP, tes tutoriels complétés, tes badges et tes prochaines étapes."
                : "Track your XP, completed tutorials, badges and next steps here."}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.label} className="glass-card rounded-[28px] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">
                  <Icon className="h-5 w-5 text-indigo-300" />
                </div>
                <div className="mt-5 text-4xl font-semibold text-white">{card.value}</div>
                <div className="font-ui mt-2 text-sm text-slate-400">{card.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <BarChart3 className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Progression de niveau" : "Level progression"}
                </span>
              </div>

              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="font-ui text-sm text-slate-400">
                    {locale === "fr" ? "Niveau actuel" : "Current level"}
                  </p>
                  <p className="mt-2 text-5xl font-semibold text-white">{level}</p>
                </div>

                <div className="text-right">
                  <p className="font-ui text-sm text-slate-400">
                    {locale === "fr" ? "Prochain niveau" : "Next level"}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-indigo-300">
                    {nextLevelXp} XP
                  </p>
                </div>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                  style={{ width: `${Math.max(0, Math.min(100, progressWithinLevel))}%` }}
                />
              </div>

              <p className="mt-3 text-sm text-slate-400">
                {locale === "fr"
                  ? `${stats.xp} XP accumulés. Continue les tutoriels et le simulateur pour progresser.`
                  : `${stats.xp} XP earned. Continue tutorials and the simulator to progress.`}
              </p>
            </div>

            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <Target className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Missions du jour" : "Daily missions"}
                </span>
              </div>

              <div className="space-y-3">
                {missions.map((mission) => (
                  <div
                    key={mission.label}
                    className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 p-4"
                  >
                    <span className="text-sm text-slate-300">{mission.label}</span>
                    {mission.done ? (
                      <span className="font-ui rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">
                        {locale === "fr" ? "Complété" : "Done"}
                      </span>
                    ) : (
                      <span className="font-ui rounded-full bg-white/10 px-3 py-1 text-xs text-slate-400">
                        {locale === "fr" ? "À faire" : "Pending"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <Flame className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Streak" : "Streak"}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="text-3xl font-semibold text-white">{stats.streakDays}</div>
                  <div className="font-ui mt-1 text-sm text-slate-400">
                    {locale === "fr" ? "Jours consécutifs" : "Consecutive days"}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="text-3xl font-semibold text-white">{stats.auditRuns}</div>
                  <div className="font-ui mt-1 text-sm text-slate-400">
                    {locale === "fr" ? "Quiz lancés" : "Quiz runs"}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="text-3xl font-semibold text-white">{stats.completedTutorials}</div>
                  <div className="font-ui mt-1 text-sm text-slate-400">
                    {locale === "fr" ? "Tutoriels terminés" : "Tutorials completed"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <Award className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Badges débloqués" : "Unlocked badges"}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {stats.badges.length > 0 ? (
                  stats.badges.map((badge) => (
                    <div
                      key={badge}
                      className="font-ui inline-flex items-center gap-2 rounded-full border border-white/10 bg-indigo-500/10 px-4 py-2 text-sm text-slate-200"
                    >
                      <Star className="h-4 w-4 text-indigo-300" />
                      {badge}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-400">
                    {locale === "fr"
                      ? "Aucun badge débloqué pour le moment."
                      : "No badges unlocked yet."}
                  </p>
                )}
              </div>
            </div>

            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <BookOpen className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Actions rapides" : "Quick actions"}
                </span>
              </div>

              <div className="space-y-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Link
                      key={action.title}
                      href={action.href}
                      className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">
                          <Icon className="h-4 w-4 text-indigo-300" />
                        </div>
                        <span className="text-sm text-slate-300">{action.title}</span>
                      </div>
                      <span className="font-ui text-xs uppercase tracking-[0.18em] text-slate-500">
                        GO
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-[30px] p-6">
              <div className="mb-4 flex items-center gap-2 text-indigo-300">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-ui text-sm uppercase tracking-[0.18em]">
                  {locale === "fr" ? "Résumé membre" : "Member summary"}
                </span>
              </div>

              <ul className="space-y-3 text-sm text-slate-300">
                <li>
                  {locale === "fr"
                    ? `XP total : ${stats.xp}`
                    : `Total XP: ${stats.xp}`}
                </li>
                <li>
                  {locale === "fr"
                    ? `Tutoriels complétés : ${stats.completedTutorials}`
                    : `Completed tutorials: ${stats.completedTutorials}`}
                </li>
                <li>
                  {locale === "fr"
                    ? `Simulateur utilisé : ${stats.auditSimulatorUsed ? "oui" : "non"}`
                    : `Simulator used: ${stats.auditSimulatorUsed ? "yes" : "no"}`}
                </li>
                <li>
                  {locale === "fr"
                    ? `Badges débloqués : ${stats.badgesUnlocked}`
                    : `Unlocked badges: ${stats.badgesUnlocked}`}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function getLevel(xp: number) {
  if (xp < 100) return 1;
  if (xp < 250) return 2;
  if (xp < 500) return 3;
  if (xp < 800) return 4;
  return 5;
}

function getCurrentLevelBaseXp(level: number) {
  switch (level) {
    case 1:
      return 0;
    case 2:
      return 100;
    case 3:
      return 250;
    case 4:
      return 500;
    default:
      return 800;
  }
}

function getNextLevelXp(level: number) {
  switch (level) {
    case 1:
      return 100;
    case 2:
      return 250;
    case 3:
      return 500;
    case 4:
      return 800;
    default:
      return 1200;
  }
}