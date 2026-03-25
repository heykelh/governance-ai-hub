import {
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  FileSpreadsheet,
  Shield,
  Waypoints,
} from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Governance frameworks",
    text: "Structured methods for ownership, controls, roles and accountability.",
  },
  {
    icon: FileSpreadsheet,
    title: "Operational templates",
    text: "RACI, scorecards, checklists and practical governance assets.",
  },
  {
    icon: BookOpenText,
    title: "Learning-first platform",
    text: "A premium educational experience designed for real expertise.",
  },
  {
    icon: Waypoints,
    title: "Audit-oriented approach",
    text: "Readiness checks, evidence thinking and remediation logic.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business-ready outputs",
    text: "Built for companies, consultants, recruiters and governance teams.",
  },
  {
    icon: BadgeCheck,
    title: "Trust by design",
    text: "Privacy, AI governance, data quality and implementation maturity.",
  },
];

export function HomeTrustSection() {
  return (
    <section className="container-shell py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
          Why GOV-AI-HUB
        </p>
        <h2 className="section-title mt-4 text-white">
          Built like a learning platform, positioned like a governance product
        </h2>
        <p className="section-copy mx-auto text-slate-300">
          Less generic course marketplace, more trusted governance platform for
          learning, audit and implementation.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="glass-card rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10">
                <Icon className="h-5 w-5 text-indigo-300" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}