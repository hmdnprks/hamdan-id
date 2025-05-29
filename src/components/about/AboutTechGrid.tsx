'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Next.js', logo: '/logos/nextjs.svg' },
  { name: 'Framer Motion', logo: '/logos/framer.svg' },
  { name: 'Tailwind CSS', logo: '/logos/tailwind.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'DJI Osmo', logo: '/logos/dji.svg' },
  { name: 'Figma', logo: '/logos/figma.svg' },
];

export default function AboutTechGrid() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-900 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Tools I Work With
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="hover:scale-105 transition-transform"
            >
              <Image
                src={tool.logo}
                alt={tool.name}
                width={80}
                height={80}
                className="object-contain"
              />
              <p className="mt-2 text-center text-sm text-black dark:text-white">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
