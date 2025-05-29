'use client';

import { motion } from 'framer-motion';

const timeline = [
  { year: '2012', text: 'Started coding with HTML & CSS' },
  { year: '2018', text: 'Joined Telkom as a Frontend Developer' },
  { year: '2023', text: 'Joined Telkomsel as a Frontend Developer' },
  { year: '2025', text: 'Blending tech & art into immersive experiences' },
];

export default function AboutTimeline() {
  return (
    <section className="py-24 bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 px-6">
      <div className="max-w-4xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">{item.year}</h3>
            <p className="text-lg text-muted mt-2 max-w-prose">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
