import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const templates = [
  { title: "Data Governance RACI", type: "Template", access: "Free" },
  { title: "AI Use Case Register", type: "Workbook", access: "Free" },
  { title: "GDPR Audit Checklist", type: "Checklist", access: "Free" },
  { title: "Data Quality Scorecard", type: "Template", access: "Premium" },
  { title: "Privacy by Design Checklist", type: "Checklist", access: "Free" },
  { title: "Governance Roadmap One-Pager", type: "Template", access: "Premium" },
];

export function HomeFeaturedTemplates() {
  return (
    <section className="container-shell py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            Templates & deliverables
          </p>
          <h2 className="section-title mt-4 text-white">
            Operational assets, not just reading material
          </h2>
          <p className="section-copy text-slate-300">
            RACI models, checklists, scorecards and roadmaps designed for
            professionals who want to deliver governance work, not only study it.
          </p>
          <Link href="#" className="mt-6 inline-block text-sm font-medium text-indigo-300">
            Browse all templates →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {templates.map((template) => (
            <Card
              key={template.title}
              className="glass-card rounded-[28px] text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="secondary" className="bg-white/10 text-slate-200">
                    {template.type}
                  </Badge>
                  <Badge
                    variant={template.access === "Free" ? "outline" : "default"}
                    className={
                      template.access === "Free"
                        ? "border-white/15 text-slate-200"
                        : "bg-indigo-500 text-white"
                    }
                  >
                    {template.access}
                  </Badge>
                </div>
                <CardTitle className="pt-3 text-lg text-white">
                  {template.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Link href="#" className="text-sm font-medium text-indigo-300">
                  View template →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}