import BlogSidebar from "./BlogSidebar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <BlogSidebar />
      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto">
        {children}
      </main>
    </div>
  );
}