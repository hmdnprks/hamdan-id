import BlogLayout from "@/components/BlogLayout/BlogLayout";

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <BlogLayout>{children}</BlogLayout>;
}