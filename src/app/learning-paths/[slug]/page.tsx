import { notFound } from "next/navigation";
import { LearningPathDetailPage } from "@/components/learn/learning-path-detail-page";
import { getLearningPathBySlug } from "@/data/learning-paths";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const path = getLearningPathBySlug(slug);

  if (!path) {
    notFound();
  }

  return <LearningPathDetailPage slug={slug} />;
}