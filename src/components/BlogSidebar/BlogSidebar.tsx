export default function BlogSidebar() {
  return (
    <aside className="hidden lg:block w-64 p-4 border-r border-gray-700">
      <nav className="space-y-2">
        <a href="/blog" className="text-sm hover:text-blue-400">← All Posts</a>
        <hr className="border-gray-600 my-2" />
        <p className="text-xs text-gray-400 uppercase tracking-wide">Other Links</p>
        <a href="/about" className="text-sm hover:text-blue-400">About Me</a>
        <a href="/projects" className="text-sm hover:text-blue-400">Projects</a>
      </nav>
    </aside>
  );
}