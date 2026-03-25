import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeFounder() {
  return (
    <section className="container-shell py-24">
      <div className="glass-card grid gap-10 rounded-[32px] p-8 lg:grid-cols-[280px_1fr] lg:p-12">
        <div className="flex items-center justify-center">
          <div className="flex h-48 w-48 items-center justify-center rounded-full border border-indigo-400/20 bg-indigo-500/10 text-4xl font-semibold text-white">
            GAH
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            About the founder
          </p>
          <h2 className="section-title mt-4 text-white">
            Governance clarity, rendered like a premium product
          </h2>
          <p className="section-copy mt-4 text-slate-300">
            GOV-AI-HUB is designed to turn Data Governance, GDPR, AI governance
            and data quality into practical systems, readable frameworks and
            delivery-ready assets.
          </p>
          <p className="mt-4 text-slate-300">
            The goal is not simply to comment on regulation, but to help people
            understand, assess and implement governance in a way that is
            credible, auditable and useful to the business.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="#">About</Link>
            </Button>
            <Button asChild variant="ghost" className="rounded-2xl text-slate-200 hover:bg-white/5">
              <Link href="#">Methodology</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}