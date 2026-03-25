import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HomeNewsletter() {
  return (
    <section className="border-t border-white/10 bg-white/[0.03]">
      <div className="container-shell py-24">
        <div className="glass-card mx-auto max-w-4xl rounded-[32px] p-8 text-center lg:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            Newsletter
          </p>
          <h2 className="section-title mt-4 text-white">
            Get practical updates on Data Governance, GDPR and the AI Act
          </h2>
          <p className="section-copy mx-auto text-slate-300">
            Useful analysis, practical frameworks and curated resources to stay
            credible, current and implementation-focused.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-slate-400"
            />
            <Button
              type="submit"
              className="h-12 rounded-2xl bg-indigo-500 px-6 text-white hover:bg-indigo-400"
            >
              Subscribe
            </Button>
          </form>

          <p className="mt-4 text-sm text-slate-400">
            No spam • Practical updates only • FR / EN
          </p>
        </div>
      </div>
    </section>
  );
}