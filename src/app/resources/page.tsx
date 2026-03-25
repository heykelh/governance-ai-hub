import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { ResourcesPage } from "@/components/resources/resources-page";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return <ResourcesPage />;
}