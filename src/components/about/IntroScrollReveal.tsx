'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntroScrollReveal() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=200%',
        },
      });

      tl.to(textRef.current, {
        scale: 15,
        ease: 'none',
        transformOrigin: 'center center',
        duration: 1,
      }).to(
        containerRef.current,
        {
          backgroundColor: '#ffffff',
          color: '#000000',
          duration: 1,
        },
        '<',
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <h1 ref={textRef} className="text-[10vw] md:text-[8vw] font-extrabold tracking-tighter">
        ENTER HΔNDN
      </h1>
    </section>
  );
}
