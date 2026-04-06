import { notFound } from "next/navigation";
import { TutorialDetailPage } from "@/components/tutorials/tutorial-detail-page";
import { getTutorialBySlug } from "@/data/tutorials";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  return <TutorialDetailPage slug={slug} />;
}