import BlogCard from "./BlogCard";

const posts = [
  {
    title: "Using Shiki with MDX",
    slug: "shiki-mdx",
    coverImage: "/blog/shiki-mdx-cover.jpg",
    date: "May 18, 2025",
    excerpt:
      "Learn how to beautifully highlight code blocks in your MDX-powered blog using rehype-pretty-code and Shiki.",
  },
  {
    title: "Font Playground with Tailwind",
    slug: "font-playground",
    coverImage: "/blog/font-playground-cover.jpg",
    date: "May 16, 2025",
    excerpt:
      "Preview and compare your favorite web fonts side by side using Tailwind and a bit of React magic.",
  },
  {
    title: "From WordPress to Next.js",
    slug: "wordpress-to-next",
    coverImage: "/blog/wp-next-cover.jpg",
    date: "May 12, 2025",
    excerpt:
      "How I migrated my old WordPress site to a custom-built Next.js website — and why it matters.",
  },
];

export default function LatestPosts() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-center mb-10">Latest Blog Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}