import Link from "next/link";

export default function BlogSidebar() {
  return (
    <aside className="hidden lg:block w-64 p-4 border-r border-gray-700">
      <nav className="space-y-2">
        <Link href="/blog" className="text-sm hover:text-blue-400">← All Posts</Link>
        <hr className="border-gray-600 my-2" />
        <Link href="/about" className="text-sm hover:text-blue-400">About Me</Link>
        <Link href="/projects" className="text-sm hover:text-blue-400">Projects</Link>
      </nav>
    </aside>
  );
}