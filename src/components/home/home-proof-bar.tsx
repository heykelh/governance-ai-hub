const items = [
  "Data Governance",
  "Data Quality",
  "GDPR",
  "AI Act",
  "AI Literacy",
  "Privacy by Design",
  "Audit Readiness",
  "Governance Roadmaps",
];

const stats = [
  { value: "20+", label: "Frameworks" },
  { value: "10+", label: "Templates" },
  { value: "8", label: "Audit kits" },
  { value: "FR / EN", label: "Bilingual" },
];

export function HomeProofBar() {
  return (
    <section className="border-b border-white/10 bg-white/[0.03]">
      <div className="container-shell py-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {items.map((item) => (
            <div
              key={item}
              className="font-ui rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-[24px] p-5 text-center"
            >
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <div className="font-ui mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}