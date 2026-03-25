import Link from "next/link";
import {
  Database,
  ShieldCheck,
  BrainCircuit,
  FileSpreadsheet,
  Scale,
  Workflow,
} from "lucide-react";

const categories = [
  {
    title: "Data Governance",
    description:
      "Ownership, stewardship, operating models, roles, policies and governance structures.",
    icon: Database,
    courses: "12 resources",
    href: "#",
  },
  {
    title: "GDPR Operations",
    description:
      "Practical compliance, accountability, records, controls and operational privacy governance.",
    icon: ShieldCheck,
    courses: "10 resources",
    href: "#",
  },
  {
    title: "AI Governance",
    description:
      "Risk framing, AI system oversight, AI literacy and practical governance for AI usage.",
    icon: BrainCircuit,
    courses: "9 resources",
    href: "#",
  },
  {
    title: "Data Quality",
    description:
      "Scorecards, controls, issue management, quality dimensions and remediation practices.",
    icon: FileSpreadsheet,
    courses: "8 resources",
    href: "#",
  },
  {
    title: "AI Act Readiness",
    description:
      "Classification, readiness checks, documentation expectations and implementation priorities.",
    icon: Scale,
    courses: "7 resources",
    href: "#",
  },
  {
    title: "Audit & Roadmaps",
    description:
      "Assessments, evidence logic, maturity models and structured remediation roadmaps.",
    icon: Workflow,
    courses: "11 resources",
    href: "#",
  },
];

export function HomeCategories() {
  return (
    <section className="container-shell py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
          Learning domains
        </p>
        <h2 className="section-title mt-4 text-white">
          Explore the platform by governance domain
        </h2>
        <p className="section-copy mx-auto text-slate-300">
          A structured entry point inspired by premium LMS platforms, but
          designed for governance, compliance, audit and implementation.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.title}
              href={category.href}
              className="glass-card group rounded-[30px] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">
                <Icon className="h-6 w-6 text-indigo-300" />
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white transition group-hover:text-indigo-200">
                  {category.title}
                </h3>
                <span className="font-ui rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {category.courses}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {category.description}
              </p>

              <div className="mt-6 font-ui text-sm font-medium text-indigo-300">
                Explore domain →
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}