"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface AchievementModalProps {
  item: {
    title: string;
    description: string;
    videoId?: string;
  } | null;
  onClose: () => void;
}

export default function AchievementModal({ item, onClose }: AchievementModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-[var(--background)] rounded-lg shadow-2xl max-w-3xl w-full p-6 relative"
        >
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 right-4 text-[var(--inter-muted)] hover:text-white"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
          <p className="text-sm mb-6">{item.description}</p>

          {item.videoId && (
            <div className="aspect-video w-full rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.title}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}