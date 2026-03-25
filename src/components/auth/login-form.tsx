"use client";

import { useState, useTransition } from "react";
import { authenticate } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [error, setError] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setError("");

        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
          const result = await authenticate(formData);

          if (result?.error) {
            setError(result.error);
          }
        });
      }}
    >
      <div>
        <label className="mb-2 block text-sm text-slate-300">Email</label>
        <input
          name="email"
          type="email"
          required
          className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-500"
          placeholder="admin@gov-ai-hub.com"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Mot de passe</label>
        <input
          name="password"
          type="password"
          required
          className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-500"
          placeholder="••••••••••"
        />
      </div>

      {error ? (
        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      <Button
        type="submit"
        disabled={isPending}
        className="h-12 w-full rounded-2xl bg-indigo-500 text-white hover:bg-indigo-400"
      >
        {isPending ? "Connexion..." : "Se connecter"}
      </Button>
    </form>
  );
}