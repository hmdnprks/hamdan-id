import { PostMeta } from '@/types/post';
import { getAllPosts } from './getAllPosts';

export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.category === category);
}
