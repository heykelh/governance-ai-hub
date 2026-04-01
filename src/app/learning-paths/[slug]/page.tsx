import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { LearningPathDetailPage } from "@/components/learn/learning-path-detail-page";

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

  return <LearningPathDetailPage slug={slug} />;
}