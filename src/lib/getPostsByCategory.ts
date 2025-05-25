import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { PostMeta } from "@/types/post";

export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const categoryDir = path.join(process.cwd(), "src/content", category);

  let files: string[];
  try {
    files = await fs.readdir(categoryDir);
  } catch {
    return [];
  }

  const posts: PostMeta[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;

    const filePath = path.join(categoryDir, file);
    const raw = await fs.readFile(filePath, "utf-8");
    const { data } = matter(raw);

    if (!data.title || !data.date) continue;

    posts.push({
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      slug: file.replace(/\.mdx$/, ""),
      category,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}