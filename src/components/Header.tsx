"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);

  const playSound = (file: string) => {
    const audio = new Audio(file)
    audio.volume = 0.5
    audio.play().catch((e) => {
      console.warn("Audio play failed:", e)
    });
  }

  const toggleSwitch = () => {
    const isNowDark = !isDark;
    setTheme(isNowDark ? "dark" : "light");
    playSound(isNowDark ? "/sounds/switch-off.wav" : "/sounds/switch-on.wav");
  }

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
            onClick={toggleSwitch}
            aria-label="Toggle Theme"
            className="relative w-9 h-9 flex items-center justify-center hover:bg-muted/10 rounded transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
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
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute"
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
      </nav>
    </header>
  );
}