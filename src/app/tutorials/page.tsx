import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { TutorialsPage } from "@/components/tutorials/tutorials-page";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return <TutorialsPage />;
}