'use client';

import { motion } from 'framer-motion';

const phrases = ['I DESIGN', 'I CODE', 'I CREATE'];

export default function AboutIdentity() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-neutral-900 text-black dark:text-white px-6">
      {phrases.map((phrase, index) => (
        <motion.h2
          key={phrase}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-center my-6"
        >
          {phrase}
        </motion.h2>
      ))}
    </section>
  );
}
