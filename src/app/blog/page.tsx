import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { BlogPage } from "@/components/blog/blog-page";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return <BlogPage />;
}