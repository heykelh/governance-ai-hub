import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { TutorialDetailPage } from "@/components/tutorials/tutorial-detail-page";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const { slug } = await params;

  return <TutorialDetailPage slug={slug} />;
}