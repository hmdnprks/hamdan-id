'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const featuredLocations = [
  {
    id: 'bali',
    title: 'Bali, Indonesia',
    subtitle: 'Ubud · Canggu · Uluwatu · Nusa Penida',
    image: '/images/featured/bali.jpg',
  },
  {
    id: 'italy',
    title: 'Italy',
    subtitle: 'Milan · Rome · Venice · Lakes',
    image: '/images/featured/italy.jpg',
  },
  {
    id: 'france',
    title: 'France',
    subtitle: 'Paris and beyond',
    image: '/images/featured/france.jpg',
  },
  {
    id: 'switzerland',
    title: 'Switzerland',
    subtitle: 'Lakes, Alps, and stunning train journeys',
    image: '/images/featured/switzerland.jpg',
  },
];

export default function FeaturedLocationCarousel() {
  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Destinations</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        {featuredLocations.map((loc) => (
          <motion.div
            key={loc.id}
            whileHover={{ scale: 1.05 }}
            className="relative min-w-[280px] max-w-[320px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-black/10"
          >
            <Image
              src={loc.image}
              alt={loc.title}
              width={320}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{loc.title}</h3>
              <p className="text-sm text-gray-600">{loc.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
