// src/lib/getAllPosts.ts
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { PostMeta } from "@/types/post";

export async function getAllPosts(): Promise<PostMeta[]> {
  const contentPath = path.join(process.cwd(), "src/content");
  const entries = await fs.readdir(contentPath, { withFileTypes: true });

  const posts: PostMeta[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // it's a category folder
      const category = entry.name;
      const dirPath = path.join(contentPath, category);
      const files = await fs.readdir(dirPath);

      for (const file of files) {
        if (!file.endsWith(".mdx")) continue;
        const filePath = path.join(dirPath, file);
        const raw = await fs.readFile(filePath, "utf8");
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
    }

    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      // top-level post without category
      const filePath = path.join(contentPath, entry.name);
      const raw = await fs.readFile(filePath, "utf8");
      const { data } = matter(raw);
      if (!data.title || !data.date) continue;

      posts.push({
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        slug: entry.name.replace(/\.mdx$/, ""),
        category: "general", // fallback
      });
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}