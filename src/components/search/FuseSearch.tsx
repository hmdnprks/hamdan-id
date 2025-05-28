'use client';

import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

interface SearchItem {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  tags: string[];
  type: string;
}

export default function FuseSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);

  useEffect(() => {
    fetch('/search-index.json')
      .then((res) => res.json())
      .then((data: SearchItem[]) => {
        const fuseInstance = new Fuse(data, {
          keys: ['title', 'excerpt', 'tags'],
          threshold: 0.3,
        });
        setFuse(fuseInstance);
      });
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (fuse && value.trim()) {
      const result = fuse.search(value).map((r) => r.item);
      setResults(result);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search blog posts..."
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-background"
      />

      {results.length > 0 && (
        <ul className="mt-4 space-y-3">
          {results.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/blog/${item.category}/${item.slug}`}
                className="block p-3 rounded border hover:bg-muted transition"
              >
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-muted">{item.excerpt}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}