'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  'LOSS OF PERFORMANCE BUDGET DUE TO USING CSS TRANSFORMS',
  'INACCESSIBILITY FROM NO PAGE SEARCH SUPPORT AND NATIVE SCROLLBAR',
  'NO IMPROVEMENT IN FILE SIZE (12kb GZIPPED)',
];

export default function HorizontalScrollGSAP() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel');
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
    <section ref={containerRef} className="h-[100vh] bg-black overflow-hidden text-white">
      <div ref={wrapperRef} className="flex w-max">
        {items.map((text, index) => (
          <div
            key={index}
            className="panel w-screen h-screen flex flex-col items-center justify-center border border-white px-8"
          >
            <h2 className="text-5xl text-pink-400 mb-4">{String(index + 1).padStart(2, '0')}</h2>
            <p className="text-xl max-w-md text-center font-semibold">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
