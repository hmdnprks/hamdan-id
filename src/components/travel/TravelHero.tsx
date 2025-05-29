'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function TravelHero() {
  return (
    <section className="relative h-[calc(100vh-64px)] w-full overflow-hidden">
      {' '}
      {/* Background Video or Image */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://ik.imagekit.io/p0v8nmaghv/short-clip.mov " type="video/mp4" />
        {/* Fallback Image */}
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Through My Lens,
          <br /> Here’s Where I Wandered.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-xl text-white/80 max-w-xl"
        >
          A collection of places, moments, and memories—curated through my eyes.
        </motion.p>
      </div>
      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        onClick={() => {
          const el = document.getElementById('filters');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white cursor-pointer z-10"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
