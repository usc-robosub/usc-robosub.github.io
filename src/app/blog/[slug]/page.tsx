import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostArticle } from "@/components/blog/BlogPostArticle";
import { blogPosts, getBlogPost, getSeries } from "@/lib/blog";

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

  const series = getSeries(post.series);

  return (
    <BlogPostArticle
      post={post}
      headlineWords={post.headline}
      sectionLabel={series ? `BLOG / ${series.label}` : undefined}
      backHref={series ? `/blog/series/${series.slug}` : undefined}
      backLabel={series ? `BACK TO ${series.title.toUpperCase()}` : undefined}
    />
  );
}
