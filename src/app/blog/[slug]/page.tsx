import { notFound } from "next/navigation";
import { BlogPostDetailPage } from "@/components/blog/blog-post-detail-page";
import { getBlogPostBySlug } from "@/data/blog-posts";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostDetailPage slug={slug} />;
}