import Link from "next/link";
import { ArrowRight, BookOpen, FolderCheck, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    title: "Learn",
    description:
      "Build strong fundamentals in Data Governance, GDPR, AI Act and data quality with a guided structure.",
    points: ["Learning paths", "Domain-based navigation", "Glossaries", "Practical explainers"],
    href: "#",
    icon: BookOpen,
  },
  {
    title: "Assess",
    description:
      "Use structured methods to evaluate maturity, readiness, risks and governance gaps across teams.",
    points: ["Audit kits", "Readiness checks", "Scoring", "Gap analysis"],
    href: "#",
    icon: FolderCheck,
  },
  {
    title: "Implement",
    description:
      "Move from theory to delivery with templates, roadmaps and governance-ready operational assets.",
    points: ["Templates", "RACI models", "Policies", "Roadmaps"],
    href: "#",
    icon: Wrench,
  },
];

export function HomePillars() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="container-shell py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            Platform logic
          </p>
          <h2 className="section-title mt-4 text-white">
            Learn, assess and implement with a clearer structure
          </h2>
          <p className="section-copy mx-auto text-slate-300">
            The platform is designed to feel both educational and operational:
            not just content, but a path toward governance delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <Card
                key={pillar.title}
                className="glass-card rounded-[30px] text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">
                    <Icon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <CardTitle className="text-2xl text-white">{pillar.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-300">{pillar.description}</p>

                  <ul className="mt-6 space-y-2 text-sm text-slate-400">
                    {pillar.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>

                  <Link
                    href={pillar.href}
                    className="mt-6 inline-flex items-center text-sm font-medium text-indigo-300"
                  >
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}