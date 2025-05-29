'use client';

import { useState } from 'react';

const categories = ['Mountains', 'Cities', 'Beach', 'Hidden Gems', 'Culture', 'Food', 'Nature'];

export default function TravelCategoryFilters() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="filters" className="w-full py-12 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Explore by Category</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat === selected ? null : cat)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              selected === cat
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Showing places tagged with <strong>{selected}</strong>
        </p>
      )}
    </section>
  );
}
