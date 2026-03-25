import Link from "next/link";
import { Clock3, PlayCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const paths = [
  {
    title: "Become a Data Governance Analyst",
    level: "Intermediate",
    duration: "6 modules",
    outcome: "Structure ownership, stewardship and governance controls.",
    tag: "Foundational Track",
  },
  {
    title: "Run a Data & AI Audit",
    level: "Advanced",
    duration: "8 modules",
    outcome: "Assess maturity, collect evidence and build remediation plans.",
    tag: "Audit Track",
  },
  {
    title: "Become an AI Governance Specialist",
    level: "Advanced",
    duration: "7 modules",
    outcome: "Frame AI readiness, controls and documentation expectations.",
    tag: "AI Track",
  },
];

export function HomeFeaturedPaths() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="container-shell py-24">
        <div className="max-w-3xl">
          <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            Featured learning paths
          </p>
          <h2 className="section-title mt-4 text-white">
            A more premium LMS-style learning experience
          </h2>
          <p className="section-copy text-slate-300">
            Each path is designed like a guided product journey, with outcomes,
            structure and practical relevance for governance work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {paths.map((path, index) => (
            <Card
              key={path.title}
              className="glass-card overflow-hidden rounded-[30px] text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 border-b border-white/10 bg-gradient-to-br from-indigo-500/25 via-[#11162a] to-transparent">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%)]" />
                <div className="absolute left-5 top-5">
                  <span className="font-ui rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-200">
                    {path.tag}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-3 flex items-center gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 4 + (index === 1 ? 1 : 0) ? "fill-current" : ""}`} />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <PlayCircle className="h-4 w-4 text-indigo-300" />
                    Guided learning experience
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="font-ui flex items-center justify-between gap-3 text-sm text-slate-400">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {path.level}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-4 w-4" />
                    {path.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">
                  {path.title}
                </h3>

                <p className="mt-4 text-slate-300">{path.outcome}</p>

                <div className="mt-6 flex items-center justify-between">
                  <Link href="#" className="text-sm font-medium text-indigo-300">
                    View path →
                  </Link>
                  <span className="font-ui text-xs uppercase tracking-[0.18em] text-slate-500">
                    Premium structure
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}