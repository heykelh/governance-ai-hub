import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { LearnPage } from "@/components/learn/learn-page";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return <LearnPage />;
}