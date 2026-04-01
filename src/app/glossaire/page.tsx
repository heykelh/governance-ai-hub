import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { GlossaryPage } from "@/components/glossary/glossary-page";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return <GlossaryPage />;
}