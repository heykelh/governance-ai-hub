import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#090b14] text-white">
      <div className="container-shell flex min-h-screen items-center justify-center py-16">
        <div className="glass-card w-full max-w-md rounded-[32px] p-8">
          <h1 className="text-3xl font-semibold">Connexion</h1>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Connecte-toi avec Google ou LinkedIn.
          </p>

          <div className="mt-8 space-y-4">
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Continuer avec Google
              </button>
            </form>

            <form
              action={async () => {
                "use server";
                await signIn("linkedin", { redirectTo: "/" });
              }}
            >
              <button
                type="submit"
                className="w-full rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
              >
                Continuer avec LinkedIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}