'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X, Rss, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import SearchModal from './search/SearchModal';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  // { href: '/projects', label: 'Projects' },
  { href: '/life', label: 'Life' },
];

export default function Header({ isSticky = true }: { isSticky?: boolean }) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const isDark = theme === 'dark';

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isSticky) return;
      const currentScroll = window.scrollY;
      const isDesktop = window.innerWidth >= 640;

      const goingDown = currentScroll > lastScrollY.current;
      const goingUp = currentScroll < lastScrollY.current;

      if (isDesktop) {
        if (goingDown && currentScroll > 50) {
          setShowHeader(false);
        }

        if (goingUp) {
          setShowHeader(true);
        }

        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setShowHeader(true);
        }, 200);
      }

      // Always store last scroll
      lastScrollY.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playSound = (file: string) => {
    const audio = new Audio(file);
    audio.volume = 0.5;
    audio.play().catch((e) => console.warn('Audio play failed:', e));
  };

  const toggleSwitch = () => {
    const isNowDark = !isDark;
    setTheme(isNowDark ? 'dark' : 'light');
    playSound(isNowDark ? '/sounds/switch-off.wav' : '/sounds/switch-on.wav');
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) ||
        (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey))
      ) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <header
      className={clsx(
        isSticky && 'sticky top-0 z-50',
        'w-full px-6 py-4 flex justify-between items-center border-transparent bg-background transition-transform duration-300',
        !showHeader && 'sm:-translate-y-full',
      )}
    >
      <Link href="/" className="text-lg font-semibold tracking-tight">
        hamdan.id
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex relative items-center gap-6 text-sm">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/');

          return (
            <div key={href} className="relative group px-2">
              <Link
                href={href}
                className={clsx(
                  'relative z-10 py-1 transition-colors',
                  isActive ? 'text-primary font-bold' : 'hover:text-primary text-muted',
                )}
              >
                {label}
              </Link>
              {isActive && (
                <motion.svg
                  layoutId="scribble-highlight"
                  viewBox="0 0 100 40"
                  className="absolute -inset-x-2 overflow-visible -top-1 w-[130%] h-[150%] text-primary pointer-events-none"
                  fill="none"
                >
                  <motion.ellipse
                    cx="55"
                    cy="20"
                    rx="50"
                    ry="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </motion.svg>
              )}
            </div>
          );
        })}

        <button
          onClick={() => setSearchOpen(true)}
          aria-label="Search"
          className="relative w-9 h-9 flex items-center justify-center hover:bg-muted/10 rounded transition-colors cursor-pointer"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Search className="w-5 h-5 text-primary" />
          </motion.div>
        </button>

        <Link
          href="/rss.xml"
          target="_blank"
          aria-label="RSS Feed"
          className="relative w-9 h-9 flex items-center justify-center hover:bg-muted/10 rounded transition-colors cursor-pointer"
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <Rss className="w-5 h-5 text-orange-500 dark:text-orange-400" />
          </motion.div>
        </Link>

        {mounted && (
          <button
            onClick={toggleSwitch}
            aria-label="Toggle Theme"
            className="ml-0 relative w-9 h-9 flex items-center justify-center hover:bg-muted/10 rounded transition-colors cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute"
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute"
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
      </nav>

      {/* Mobile Nav Toggle */}
      <button
        className="sm:hidden p-2 rounded hover:bg-muted/10 transition z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Mobile Menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden fixed inset-0 bg-background z-40 px-6 py-20 flex flex-col gap-6 items-start"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-semibold hover:text-primary transition"
              >
                {label}
              </Link>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false);
                setSearchOpen(true);
              }}
              className="text-lg font-semibold text-primary hover:text-primary/70 transition"
            >
              Search
            </button>

            <Link
              href="/rss.xml"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-orange-500 hover:text-orange-600 transition"
            >
              RSS Feed
            </Link>

            <div className="mt-6 flex items-start flex-col gap-3">
              <span className="text-lg font-semibold text-muted transition">Switch Theme</span>

              <button
                onClick={toggleSwitch}
                aria-label="Toggle Theme"
                className="relative w-16 h-10 rounded-full bg-muted/20 flex items-center px-1 transition-colors"
              >
                {/* Toggle knob container (optional background) */}
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute w-full h-full rounded-full"
                />

                {/* Toggle knob */}
                <motion.div
                  layout
                  animate={{ x: isDark ? 24 : 0 }} // move right if dark
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white z-10"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                      <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Moon className="w-[16px] h-[16px]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sun className="w-[16px] h-[16px]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
