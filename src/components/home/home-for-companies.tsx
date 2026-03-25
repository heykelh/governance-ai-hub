import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  "Governance Diagnostic",
  "GDPR Operational Review",
  "AI Governance Readiness Assessment",
  "Data Quality Framework Setup",
];

export function HomeForCompanies() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="container-shell grid gap-10 py-24 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            For companies
          </p>
          <h2 className="section-title mt-4 text-white">
            A learning platform that also works as a SaaS-style business entry point
          </h2>
          <p className="section-copy text-slate-300">
            Built to support diagnostics, governance readiness and practical
            remediation for organizations that need more than theory.
          </p>

          <ul className="mt-6 space-y-2 text-slate-300">
            <li>• AI use cases growing without governance</li>
            <li>• Unclear ownership and accountability</li>
            <li>• Fragmented data quality controls</li>
            <li>• Weak audit evidence and documentation</li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-2xl bg-indigo-500 text-white hover:bg-indigo-400">
              <Link href="#">Explore services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="#">Request a diagnostic</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {services.map((service) => (
            <Card
              key={service}
              className="glass-card rounded-[28px] text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-lg text-white">{service}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-300">
                  A practical, structured engagement focused on controls, risks,
                  operating model and next-step priorities.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}