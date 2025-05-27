'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TopLoadingBar() {
  const controls = useAnimationControls();
  const pathname = usePathname();

  useEffect(() => {
    const animate = async () => {
      await controls.start({ width: '30%', opacity: 1 });
      await controls.start({ width: '100%' });
      await new Promise((res) => setTimeout(res, 150));
      await controls.start({ opacity: 0, transition: { duration: 0.3 } });
      await controls.set({ width: '0%' });
    };
    animate();
  }, [pathname, controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-primary z-[9999]"
      initial={{ width: '0%', opacity: 0 }}
      animate={controls}
    />
  );
}