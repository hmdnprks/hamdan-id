'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TravelCTASection() {
  return (
    <section className="w-full py-16 px-6 text-center bg-muted rounded-xl my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Explore More?</h2>
      <p className="text-muted-foreground mb-6">
        Dive into the full journal or wander through the interactive map.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          href="/life/travel/journal"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition"
        >
          Read the Journal <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
        <Link
          href="/life/travel/map"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md border border-primary text-primary hover:bg-primary/5 transition"
        >
          View the Map <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
