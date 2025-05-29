'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const moments = [
  {
    image: '/travel/bromo.jpg',
    title: 'Sunrise at Bromo',
    caption: 'Golden silence before the world awakens.',
  },
  {
    image: '/travel/jeep.jpg',
    title: 'The Jeep Trail',
    caption: 'Dust dancing behind roaring engines.',
  },
  {
    image: '/travel/savana.jpg',
    title: 'Whispers of the Savana',
    caption: 'A wind-swept sea of green, infinite and free.',
  },
  {
    image: '/travel/crater.jpg',
    title: 'Crater Ascent',
    caption: 'Each step, a heartbeat closer to the sky.',
  },
];

export default function CinematicTravelScroll() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = (moments.length - 1) * 100;

      gsap.to(wrapperRef.current, {
        xPercent: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${window.innerWidth * moments.length}`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-[100vh] bg-black overflow-hidden text-white">
      <div ref={wrapperRef} className="flex w-max">
        {moments.map((m, i) => (
          <div key={i} className="w-screen h-screen relative flex items-center justify-center">
            <Image
              src={m.image}
              alt={m.title}
              fill
              className="object-cover brightness-[0.6]"
              priority={i === 0}
            />
            <div className="absolute z-10 text-center max-w-xl px-6">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">{m.title}</h2>
              <p className="text-lg md:text-xl text-muted italic">{m.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
