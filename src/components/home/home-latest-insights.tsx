import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const insights = [
  {
    category: "AI Governance",
    title: "What companies get wrong about AI governance",
    excerpt:
      "A practical review of the governance gaps that appear when AI usage scales faster than controls.",
  },
  {
    category: "Data Governance",
    title: "How to start data governance without bureaucracy",
    excerpt:
      "A lean operating model for ownership, stewardship and evidence without overbuilding.",
  },
  {
    category: "Regulation",
    title: "AI Act readiness for SMEs",
    excerpt:
      "The controls and documentation priorities that matter first for smaller organizations.",
  },
];

export function HomeLatestInsights() {
  return (
    <section className="container-shell py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
          Latest insights
        </p>
        <h2 className="section-title mt-4 text-white">
          A knowledge hub inspired by LMS structure, but built for governance expertise
        </h2>
        <p className="section-copy text-slate-300">
          Articles, explainers and practical notes that feel more like an expert
          knowledge system than a standard blog.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {insights.map((insight) => (
          <Card
            key={insight.title}
            className="glass-card rounded-[28px] text-white transition-transform duration-300 hover:-translate-y-1"
          >
            <CardHeader>
              <p className="text-sm text-indigo-300">{insight.category}</p>
              <CardTitle className="text-xl leading-tight text-white">
                {insight.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">{insight.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}