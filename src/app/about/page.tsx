'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import ContactCTA from '@/components/about/ContactCTA';
import AboutHero from '@/components/about/AboutHero';
import AboutIdentity from '@/components/about/AboutIdentity';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import AboutTechGrid from '@/components/about/AboutTechGrid';
import AboutHorizontalJourney from '@/components/about/AboutHorizontalJourney';
import IntroScrollReveal from '@/components/about/IntroScrollReveal';

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div>
      <IntroScrollReveal />
      <AboutHero />
      <AboutIdentity />
      {/* <HorizontalScrollGSAP /> */}
      <AboutHorizontalJourney />
      <AboutTimeline />
      <AboutPhilosophy />
      <AboutTechGrid />
      <ContactCTA />
    </div>
  );
}
