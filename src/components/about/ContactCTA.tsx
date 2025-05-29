'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center bg-black text-white text-center px-6">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Let’s Build Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-muted max-w-xl mb-8"
      >
        Whether it’s a collaboration, a project, or just a good chat — I’m always open.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link
          href="mailto:hello@hamdan.id"
          className="inline-block px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
        >
          Say Hello
        </Link>
      </motion.div>
    </section>
  );
}
