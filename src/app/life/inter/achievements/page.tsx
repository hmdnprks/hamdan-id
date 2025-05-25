"use client";

import AchievementModal from "@/components/inter-milan/AchievementModal";
import TrophyRecap from "@/components/inter-milan/TrophyRecap";
import { achievements } from "@/data/inter/achievements";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type AchievementItem = {
  year: string;
  title: string;
  description: string;
  image: string;
  videoId?: string;
};

export default function InterAchievementsPage() {
  const [activeItem, setActiveItem] = useState<AchievementItem | null>(null);
  return (
    <main className="py-20 px-6 max-w-5xl mx-auto">
      <TrophyRecap />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        Achievements Since 2008 🏆
      </motion.h1>

      <div className="relative pl-6 space-y-14 before:absolute before:top-0 before:left-[13px] before:h-full before:w-1 before:bg-gradient-to-b before:from-[var(--inter-accent)] before:to-transparent">
        {achievements.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Trophy Icon with Sparkle */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="left-[-28px] top-0 w-9 h-9 rounded-full bg-[var(--inter-accent)] flex items-center justify-center shadow-lg ring-2 ring-white relative overflow-visible"
            >

              <Image src={item.image} alt={item.title} width={24} height={24} />


            </motion.div>

            {/* Achievement Card */}
            <div onClick={() => setActiveItem(item)}
              className="cursor-pointer bg-[var(--surface)] rounded-xl p-6 shadow-md border border-[var(--inter-border)] transition-all group-hover:scale-[1.02] group-hover:shadow-lg group-hover:border-[var(--inter-accent)]">
              <h3 className="text-xl font-bold mb-2 text-[var(--inter-text)]">
                {item.year} – {item.title}
              </h3>
              <p className="text-sm text-[var(--inter-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <AchievementModal item={activeItem} onClose={() => setActiveItem(null)} />
    </main>
  );
}