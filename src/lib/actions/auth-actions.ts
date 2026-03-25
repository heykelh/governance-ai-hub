"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";

export async function authenticate(formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/learn",
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Email ou mot de passe invalide." };
    }

    throw error;
  }
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}