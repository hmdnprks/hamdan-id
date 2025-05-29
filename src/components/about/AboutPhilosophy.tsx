'use client';

import { motion } from 'framer-motion';

const principles = [
  'Design is not decoration.',
  'Smooth is fast.',
  'Interfaces should feel alive.',
  'Every pixel tells a story.',
];

export default function AboutPhilosophy() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-900 dark:to-black px-6">
      <div className="max-w-3xl mx-auto text-center">
        {principles.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold my-10"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
