import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    title: "HR using AI for candidate screening",
    text: "Bias risk, accountability, governance controls and documentation expectations.",
  },
  {
    title: "Marketing using GenAI with customer data",
    text: "Usage boundaries, transparency, vendor review and safe operational patterns.",
  },
  {
    title: "SMEs rolling out Copilot or ChatGPT",
    text: "Practical guardrails, literacy expectations and acceptable-use governance.",
  },
];

export function HomeUseCases() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="container-shell py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            Use cases
          </p>
          <h2 className="section-title mt-4 text-white">
            Governance explained through real business scenarios
          </h2>
          <p className="section-copy text-slate-300">
            A more enterprise-oriented alternative to generic course pages:
            actual business contexts, actual governance questions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {useCases.map((item) => (
            <Card
              key={item.title}
              className="glass-card rounded-[28px] text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl leading-tight text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}