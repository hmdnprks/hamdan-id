'use client';

import Link from 'next/link';
import Image from 'next/image';

const journalEntries = [
  {
    slug: 'bromo-sunrise',
    title: 'Chasing Sunrise at Bromo',
    summary: 'An unforgettable morning above the clouds with a view of the volcanic caldera.',
    cover: '/images/journal/bromo.jpg',
  },
  {
    slug: 'ubud-hideaway',
    title: 'A Quiet Escape in Ubud',
    summary: 'Rice fields, hidden cafes, and a slower pace of life in the heart of Bali.',
    cover: '/images/journal/ubud.jpg',
  },
  {
    slug: 'swiss-train-dream',
    title: 'Riding Through the Swiss Alps',
    summary: 'A journey filled with scenic vistas, charming villages, and glacier views.',
    cover: '/images/journal/swiss.jpg',
  },
];

export default function TravelJournalPreview() {
  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Travel Journal</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {journalEntries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/life/travel/journal/${entry.slug}`}
            className="group block rounded-lg overflow-hidden shadow hover:shadow-xl transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={entry.cover}
                alt={entry.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{entry.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{entry.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
