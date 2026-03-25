import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AuditSimulatorPage } from "@/components/audit-simulator/audit-simulator-page";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return <AuditSimulatorPage />;
}