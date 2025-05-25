import { getAllPosts } from "@/lib/getAllPosts";
import BlogCard from "./BlogCard";
import Link from "next/link";

const MAX_LATEST_POSTS = 3;

export default async function LatestPosts() {
  const posts = await getAllPosts();
  const latest = posts.slice(0, MAX_LATEST_POSTS);

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-center mb-10">Latest Blog Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <BlogCard
            key={`${post.category}/${post.slug}`}
            title={post.title}
            slug={post.slug}
            category={post.category}
            coverImage={post.coverImage || "/image-fallback.png"}
            date={post.date}
            excerpt={post.excerpt || ""}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-block text-sm font-medium text-primary hover:underline transition"
        >
          Read all posts →
        </Link>
      </div>
    </section>
  );
}