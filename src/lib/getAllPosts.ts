// src/lib/getAllPosts.ts
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { PostMeta } from '@/types/post';

async function readPostMeta(filePath: string, fileSlug: string): Promise<PostMeta | null> {
  const raw = await fs.readFile(filePath, 'utf8');
  const { data } = matter(raw);
  if (!data.title || !data.date) return null;
  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    slug: fileSlug,
    category: data.category || 'general',
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const contentPath = path.join(process.cwd(), 'src/content');
  const entries = await fs.readdir(contentPath, { withFileTypes: true });

  const posts: PostMeta[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const dirPath = path.join(contentPath, entry.name);
      const files = await fs.readdir(dirPath);
      for (const file of files) {
        if (!file.endsWith('.mdx')) continue;
        const post = await readPostMeta(path.join(dirPath, file), file.replace(/\.mdx$/, ''));
        if (post) posts.push(post);
      }
    }

    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      const post = await readPostMeta(
        path.join(contentPath, entry.name),
        entry.name.replace(/\.mdx$/, ''),
      );
      if (post) posts.push(post);
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
