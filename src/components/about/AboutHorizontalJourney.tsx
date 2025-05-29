'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    image: '/about/start.jpg',
    title: 'The First Line',
    caption: 'Wrote my first HTML line at 14. It blinked. I blinked back.',
  },
  {
    image: '/about/pro.jpg',
    title: 'The Professional',
    caption: 'Shipped apps, scaled systems, made mistakes, learned fast.',
  },
  {
    image: '/about/creative.jpg',
    title: 'The Pivot',
    caption: 'Code in the morning, clouds by evening. HΔNDN was born.',
  },
  {
    image: '/about/future.jpg',
    title: 'The Vision',
    caption: 'I want to build things that move people — with code & camera.',
  },
];

export default function AboutHorizontalJourney() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = (panels.length - 1) * 100;

      gsap.to(wrapperRef.current, {
        xPercent: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${window.innerWidth * panels.length}`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-[100vh] bg-neutral-950 overflow-hidden text-white">
      <div ref={wrapperRef} className="flex w-max">
        {panels.map((panel, i) => (
          <div key={i} className="w-screen h-screen relative flex items-center justify-center">
            <Image
              src={panel.image}
              alt={panel.title}
              fill
              className="object-cover brightness-[0.6]"
              priority={i === 0}
            />
            <div className="absolute z-10 text-center max-w-xl px-6">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">{panel.title}</h2>
              <p className="text-lg md:text-xl text-muted italic">{panel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
