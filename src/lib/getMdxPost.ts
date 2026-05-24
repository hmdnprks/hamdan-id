import fs from 'fs/promises';
import path from 'path';
import { compileMdx } from './mdx';

export async function getPostBySlug(category: string, slug: string) {
  const possiblePaths = [
    path.join(process.cwd(), 'src/content', `${slug}.mdx`),
    path.join(process.cwd(), 'src/content', category, `${slug}.mdx`),
  ];

  let filePath = '';
  for (const p of possiblePaths) {
    try {
      await fs.access(p);
      filePath = p;
      break;
    } catch {
      continue;
    }
  }

  if (!filePath) {
    throw new Error(`Post not found: ${category}/${slug}`);
  }

  const source = await fs.readFile(filePath, 'utf8');
  const { content, frontmatter } = await compileMdx(source);

  return { content, frontmatter };
}
