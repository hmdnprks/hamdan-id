/* eslint-disable @typescript-eslint/no-explicit-any */
import LikeButton from '@/components/atomic/LikeButton';
import GiscusComments from '@/components/GiscusComments';
import BlogPostSchema from '@/components/SEO/BlogPostSchema';
import CanonicalTag from '@/components/SEO/CanonicalTag';
import { getPostBySlug } from '@/lib/getMdxPost';
import { getAllPosts } from '@/lib/getAllPosts';

export default async function BlogPostPage({ params }: any) {
  const { category, slug } = params;
  const { content, frontmatter } = await getPostBySlug(category, slug);

  return (
    <>
      <CanonicalTag />
      <BlogPostSchema
        frontmatter={{
          ...frontmatter,
          slug: params.slug,
          category: params.category,
          excerpt: frontmatter.excerpt || '',
          date: frontmatter.date || '',
        }}
      />

      <article className="prose prose-invert max-w-3xl mx-auto py-10">
        <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{frontmatter.date}</p>
        {content}

        <div className="mt-12">
          <LikeButton />
        </div>

        <div className="mt-20 border-t border-gray-300 dark:border-gray-700 pt-10">
          <h2 className="text-xl font-semibold mb-6">Join the discussion</h2>
          <GiscusComments />
        </div>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}
