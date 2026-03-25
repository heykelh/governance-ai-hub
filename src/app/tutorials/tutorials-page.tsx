import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const tutorials = [
  {
    title: "Construire un RACI de gouvernance data",
    level: "Débutant",
    description:
      "Un tutoriel étape par étape pour définir les responsabilités Data Owner, Steward et Sponsor.",
  },
  {
    title: "Lancer un mini audit RGPD",
    level: "Intermédiaire",
    description:
      "Une méthode claire pour cadrer, collecter les preuves, noter les écarts et prioriser.",
  },
  {
    title: "Créer un registre des usages IA",
    level: "Intermédiaire",
    description:
      "Une base de travail concrète pour identifier finalités, outils, responsables et risques.",
  },
  {
    title: "Bâtir une scorecard qualité de données",
    level: "Intermédiaire",
    description:
      "Définis les dimensions, contrôles, seuils et modalités de reporting à destination des métiers.",
  },
];

export function TutorialsPage() {
  return (
    <main className="min-h-screen text-foreground">
      <SiteHeader />

      <section className="container-shell py-20">
        <div className="max-w-3xl">
          <p className="font-ui text-sm font-medium uppercase tracking-[0.24em] text-indigo-300">
            Tutoriels
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white">
            Tutoriels réservés aux membres
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Des guides pratiques pour progresser vite, produire des livrables et
            devenir plus crédible en gouvernance data, RGPD et IA.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tutorials.map((tutorial) => (
            <div key={tutorial.title} className="glass-card rounded-[28px] p-6">
              <div className="font-ui inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-indigo-300">
                {tutorial.level}
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                {tutorial.title}
              </h2>
              <p className="mt-4 text-slate-300">{tutorial.description}</p>
              <button className="mt-6 text-sm font-medium text-indigo-300">
                Voir le tutoriel →
              </button>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}