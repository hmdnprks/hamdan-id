'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Ghost, ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const suggestions = [
  { label: 'Explore My Blog', href: '/blog' },
  { label: 'Check Out Projects', href: '/projects' },
  { label: 'Discover My Life Interests', href: '/life' },
];

export default function NotFoundPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [suggestion, setSuggestion] = useState(suggestions[0]);

  useEffect(() => {
    setMounted(true);
    setSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)]);
  }, []);

  const isDark = theme === 'dark';

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-[var(--surface)] p-6 rounded-full shadow-xl mb-6"
      >
        <Ghost className="w-12 h-12 text-[var(--foreground)] animate-bounce" />
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-5xl font-bold text-center mb-4"
      >
        404 – Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-[var(--muted)] text-center max-w-md mb-6"
      >
        Nope. Nada. Not here. We triple-checked. <br /> We can&apos;t find what you&apos;re looking
        for.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mb-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-lg font-medium hover:bg-opacity-80 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Safety
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-sm text-[var(--muted)] mb-6"
      >
        Or maybe you&apos;d like to...
        <Link href={suggestion.href} className="ml-1 underline hover:text-[var(--foreground)]">
          {suggestion.label}
        </Link>
      </motion.div>

      {mounted && (
        <motion.button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="mt-4 p-3 rounded-full dark:bg-[var(--surface)] bg-amber-100 hover:bg-[var(--muted)] transition"
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-yellow-400" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-600" />
          )}
        </motion.button>
      )}
    </main>
  );
}
