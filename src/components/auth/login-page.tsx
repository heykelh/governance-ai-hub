import { LoginForm } from "@/components/auth/login-form";

export function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container-shell flex min-h-screen items-center justify-center py-16">
        <div className="glass-card w-full max-w-md rounded-[32px] p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-lg font-semibold text-indigo-200">
              GAH
            </div>
            <h1 className="mt-5 text-3xl font-semibold text-white">
              Connexion
            </h1>
            <p className="mt-3 text-sm text-slate-300">
              Connecte-toi pour accéder au quiz, aux ressources et aux tutoriels.
            </p>
          </div>

          <LoginForm />

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            <p className="font-ui text-xs uppercase tracking-[0.18em] text-indigo-300">
              Compte démo
            </p>
            <p className="mt-2">Email : admin@gov-ai-hub.com</p>
            <p>Mot de passe : Governance2026!</p>
          </div>
        </div>
      </div>
    </main>
  );
}