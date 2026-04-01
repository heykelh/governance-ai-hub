import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { DocumentsPage } from "@/components/documents/documents-page";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return <DocumentsPage />;
}