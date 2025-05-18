"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "react-feather";

type LikeButtonProps = {
  initialCount?: number;
};

export default function LikeButton({ initialCount = 0 }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    if (liked) return; // prevent spamming
    setLiked(true);
    setCount((c) => c + 1);

    // TODO: call API here to persist
  };

  return (
    <button
      onClick={handleClick}
      className="group relative flex items-center gap-2 px-4 py-2 rounded-md transition-all"
    >
      <motion.div
        animate={{ scale: liked ? 1.3 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="relative"
      >
        <Heart
          size={24}
          className={`transition-colors ${liked ? "fill-red-500 stroke-red-500" : "stroke-gray-400"
            }`}
        />
        <AnimatePresence>
          {liked && (
            <motion.div
              className="absolute inset-0 bg-red-500 rounded-full z-[-1]"
              initial={{ scale: 0 }}
              animate={{ scale: 1.3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
      <span className="text-sm text-muted">{count}</span>
    </button>
  );
}