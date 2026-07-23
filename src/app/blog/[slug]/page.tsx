import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostArticle } from "@/components/blog/BlogPostArticle";
import { blogPosts, getBlogPost } from "@/lib/blog";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | USC AUV Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostArticle post={post} headlineWords={post.headline} />;
}
