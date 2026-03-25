import Link from "next/link";

const learnLinks = ["Parcours", "Bibliothèque", "Glossaire", "Analyses"];
const resourceLinks = ["Templates", "Kits d’audit", "Cas d’usage", "Évaluations"];
const businessLinks = ["Entreprises", "Recruteurs", "À propos", "Contact"];
const legalLinks = ["Confidentialité", "Conditions", "Cookies"];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070910]">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-sm font-semibold text-indigo-200">
              GAH
            </div>
            <div>
              <div className="text-lg font-semibold text-white">GOV-AI-HUB</div>
              <div className="font-ui text-xs text-slate-400">
                Apprendre, auditer et déployer une gouvernance fiable
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            Une plateforme premium d’apprentissage et de gouvernance pour la
            Data Governance, le RGPD, l’AI Act, la qualité des données et la
            préparation à l’audit.
          </p>
        </div>

        <FooterColumn title="Apprendre" items={learnLinks} />
        <FooterColumn title="Ressources" items={resourceLinks} />
        <FooterColumn title="Business" items={businessLinks} />
        <FooterColumn title="Légal" items={legalLinks} />
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GOV-AI-HUB. Tous droits réservés.</p>
          <div className="font-ui flex items-center gap-4">
            <span>FR</span>
            <span>EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="font-ui text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}