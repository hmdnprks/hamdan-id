'use client';

import { useEffect } from 'react';

export default function ScrollStory({ onFlyTo }: { onFlyTo: (id: string) => void }) {
  const sections = [
    { id: 'bromo', title: 'Mount Bromo' },
    { id: 'ubud', title: 'Ubud, Bali' },
    { id: 'labuanbajo', title: 'Labuan Bajo' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 300) onFlyTo('bromo');
      else if (scrollY < 600) onFlyTo('ubud');
      else onFlyTo('labuanbajo');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onFlyTo]);

  return (
    <div className="space-y-32 py-8">
      {sections.map((s) => (
        <div key={s.id} className="h-[300px] border-l-4 border-primary pl-4">
          <h2 className="text-xl font-bold">{s.title}</h2>
          <p className="text-muted">Scroll here to focus map on this location.</p>
        </div>
      ))}
    </div>
  );
}
