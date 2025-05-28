"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Fuse from "fuse.js";
import Link from "next/link";

interface SearchItem {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  tags: string[];
  type: string;
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data: SearchItem[]) => {
        const fuseInstance = new Fuse(data, {
          keys: ["title", "excerpt", "tags"],
          threshold: 0.3,
        });
        setFuse(fuseInstance);
      });
  }, []);

  useEffect(() => {
    if (fuse && query.trim()) {
      const result = fuse.search(query).map((r) => r.item);
      setResults(result);
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="search-modal"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-background/90 backdrop-blur z-[9999] flex items-start justify-center p-4"
          onClick={onClose}
        >
          <div
            className="max-w-xl w-full mt-20 bg-background rounded-lg shadow-xl p-6 border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search</h2>
              <button
                onClick={onClose}
                className="hover:text-red-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to search..."
              className="w-full px-4 py-2 border rounded-md bg-white mb-4"
            />
            <ul className="space-y-2">
              {results.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.category}/${item.slug}`}
                    onClick={onClose}
                    className="block px-4 py-2 rounded hover:bg-muted"
                  >
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-muted">{item.excerpt}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}