import fs from 'fs/promises';
import path from 'path';
import { getAllPosts } from '@/lib/getAllPosts';

async function generateSearchIndex() {
  const posts = await getAllPosts();

  const searchIndex = posts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    category: post.category,
    date: post.date,
    type: 'blog',
  }));

  const outPath = path.join(process.cwd(), 'public/search-index.json');
  await fs.writeFile(outPath, JSON.stringify(searchIndex, null, 2), 'utf8');
  console.log('✅ search-index.json generated.');
}

generateSearchIndex();