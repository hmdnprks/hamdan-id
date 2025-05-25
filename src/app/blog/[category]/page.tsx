import BlogCard from "@/components/BlogCard";
import { notFound } from "next/navigation";
import { getPostsByCategory } from "@/lib/getPostsByCategory";

export default async function BlogCategoryPage({ params }: { params: { category: string } }) {
  const posts = await getPostsByCategory(params.category);

  if (!posts.length) notFound();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 capitalize">
        {params.category} Posts
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
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