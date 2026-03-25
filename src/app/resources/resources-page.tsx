import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const resources = [
  {
    title: "Modèle de RACI Data Governance",
    type: "Template",
    description:
      "Un modèle simple pour clarifier les rôles, responsabilités et circuits de décision.",
  },
  {
    title: "Checklist Audit RGPD",
    type: "Checklist",
    description:
      "Une base pratique pour structurer un mini audit de conformité opérationnelle.",
  },
  {
    title: "Registre des cas d’usage IA",
    type: "Template",
    description:
      "Un format de départ pour inventorier finalités, outils, propriétaires et risques.",
  },
  {
    title: "Scorecard Qualité de Données",
    type: "Workbook",
    description:
      "Un support pour mesurer et piloter la qualité de données par domaine et contrôle.",
  },
];

export function ResourcesPage() {
  return (
    <main className="min-h-screen text-foreground">
      <SiteHeader />

      <section className="container-shell py-20">
        <div className="max-w-3xl">
          <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            Ressources
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white">
            Ressources réservées aux membres
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Templates, checklists et supports pratiques pour passer de
            l’apprentissage à la livraison de livrables.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {resources.map((resource) => (
            <div key={resource.title} className="glass-card rounded-[28px] p-6">
              <div className="font-ui inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                {resource.type}
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                {resource.title}
              </h2>
              <p className="mt-4 text-slate-300">{resource.description}</p>
              <button className="mt-6 text-sm font-medium text-indigo-300">
                Ouvrir la ressource →
              </button>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}