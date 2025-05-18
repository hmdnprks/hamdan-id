/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPostBySlug } from "@/lib/getMdxPost";
import fs from "fs/promises";
import path from "path";

export default async function BlogPostPage({ params }: any) {
  const { content, frontmatter } = await getPostBySlug(params.slug);

  return (
    <main className="prose prose-invert max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{frontmatter.date}</p>
      {content}
    </main>
  );
}

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), "src", "content"));

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}