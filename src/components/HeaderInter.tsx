"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/life/inter/blog", label: "Blog" },
  { href: "/life/inter/matches", label: "Matches" },
  { href: "/life/inter/achievements", label: "Achievements" },
];

export default function HeaderInter() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
      <Link href="/life/inter" className="text-lg font-semibold tracking-tight">
        <Image src="/hamdanxinter.png" alt="Logo Hamdan Inter" width={120} height={40} />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex relative items-center gap-6 text-sm">
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
            className="ml-4 relative w-9 h-9 flex items-center justify-center hover:bg-muted/10 rounded transition-colors cursor-pointer"
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
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute w-full h-full rounded-full"
                />

                {/* Toggle knob */}
                <motion.div
                  layout
                  animate={{ x: isDark ? 24 : 0 }} // move right if dark
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
    </header>
  );
}