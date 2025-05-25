"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => setMounted(true), []);

  const playSound = (file: string) => {
    const audio = new Audio(file);
    audio.volume = 0.5;
    audio.play().catch((e) => console.warn("Audio play failed:", e));
  };

  const toggleSwitch = () => {
    const isNowDark = !isDark;
    setTheme(isNowDark ? "dark" : "light");
    playSound(isNowDark ? "/sounds/switch-off.wav" : "/sounds/switch-on.wav");
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 relative z-50">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        hamdan.id
      </Link>

      <nav className="relative flex items-center gap-6 text-sm">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");

          return (
            <div key={href} className="relative group px-2">
              <Link
                href={href}
                className={clsx(
                  "relative z-10 py-1 transition-colors",
                  isActive ? "text-primary font-bold" : "hover:text-primary text-muted"
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
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </motion.svg>
              )}
            </div>
          );
        })}

        {mounted && (
          <button
            onClick={toggleSwitch}
            aria-label="Toggle Theme"
            className="ml-4 relative w-9 h-9 flex items-center justify-center hover:bg-muted/10 rounded transition-colors"
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