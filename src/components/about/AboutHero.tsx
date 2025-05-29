'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-5xl md:text-7xl font-bold text-center leading-tight"
      >
        HAMDAN PRAKOSO
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        className="mt-4 text-lg md:text-2xl text-muted text-center max-w-xl"
      >
        A mind in motion — scroll to explore the story behind the screen.
      </motion.p>
    </section>
  );
}
