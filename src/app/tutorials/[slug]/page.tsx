import { notFound } from "next/navigation";
import { TutorialDetailPage } from "@/components/tutorials/tutorial-detail-page";
import { getTutorialBySlug } from "@/data/tutorials";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  return <TutorialDetailPage slug={slug} />;
}