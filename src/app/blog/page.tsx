import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/getAllPosts";

const POSTS_PER_PAGE = 6;

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const paginatedPosts = allPosts.slice(0, POSTS_PER_PAGE);

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">All Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <BlogCard
            key={`${post.category}/${post.slug}`}
            category={post.category}
            title={post.title}
            slug={post.slug}
            coverImage={post.coverImage || "/image-fallback.png"}
            date={post.date}
            excerpt={post.excerpt || ""}
          />
        ))}
      </div>
    </section>
  );
}