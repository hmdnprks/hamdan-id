"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        hamdan.id
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        <Link href="/about" className="hover:text-primary transition">
          About
        </Link>
        <Link href="/blog" className="hover:text-primary transition">
          Blog
        </Link>
        <Link href="/projects" className="hover:text-primary transition">
          Projects
        </Link>

        {mounted && (
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark")
            }}
            className="ml-4 text-lg hover:text-primary transition cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        )}
      </nav>
    </header>
  );
}