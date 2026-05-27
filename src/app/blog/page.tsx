import type { Metadata } from "next";
import { BlogPostArticle } from "@/components/blog/BlogPostArticle";
import { blogPosts } from "@/lib/blog";

const post = blogPosts[0];

export const metadata: Metadata = {
  title: "Development Blog 2026 | USC AUV",
  description: post.excerpt,
};

export default function BlogPage() {
  return (
    <BlogPostArticle
      post={post}
      sectionLabel="BLOG / DEVELOPMENT BLOG 2026"
      headlineWords={["DEVELOPMENT", "BLOG", "2026"]}
      backHref="/"
      backLabel="BACK TO HOME"
    />
  );
}
