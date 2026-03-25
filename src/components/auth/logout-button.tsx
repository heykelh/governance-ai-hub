"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions/auth-actions";

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="outline"
      className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10"
      onClick={() =>
        startTransition(async () => {
          await logout();
        })
      }
      disabled={isPending}
    >
      {isPending ? "Déconnexion..." : "Déconnexion"}
    </Button>
  );
}