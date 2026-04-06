import { notFound } from "next/navigation";
import { DocumentDetailPage } from "@/components/documents/document-detail-page";
import { getDocumentBySlug } from "@/data/documents";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocumentBySlug(slug);

  if (!doc) {
    notFound();
  }

  return <DocumentDetailPage slug={slug} />;
}