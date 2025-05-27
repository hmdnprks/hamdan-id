'use client';

import { motion } from 'framer-motion';
import { useRouteLoading } from '@/hooks/useRouteLoading';

export default function LoadingDots() {
  const isLoading = useRouteLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}