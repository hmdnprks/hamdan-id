"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full max-w-2xl mx-auto text-center py-20 px-6">
      <motion.div
        className="relative w-32 h-32 mx-auto mb-6 cursor-pointer perspective-1000"
        onClick={() => setFlipped(!flipped)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          y: [0, -4, 0, 3, 0], // float loop
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        {/* Glow Ring Pulse */}
        <motion.div
          className="absolute inset-0 rounded-full bg-dark opacity-50 blur-2xl z-0"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <AnimatePresence>
          {hovered && !flipped && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded shadow z-10"
            >
              👆 Tap Me
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Card Flip */}
        <motion.div
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: flipped ? 180 : 0,
          }}
          transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src="/profile.jpg"
              alt="Hamdan Prakoso"
              fill
              sizes="128px"
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>

          {/* Back Face (3D PNG + shine overlay) */}
          <div
            className="absolute inset-0 rotate-y-180 backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src="/3d-profile-stand.png"
              alt="Hamdan 3D"
              fill
              sizes="128px"
              className="rounded-full object-cover object-top shadow-2xl"
            />
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/10 pointer-events-none"
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Hi, I&apos;m Hamdan.
      </motion.h1>

      <motion.p
        className="text-lg text-muted max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        A Software Engineer crafting thoughtful, performant web experiences — blending engineering and creativity with curiosity and clarity.
      </motion.p>
    </section>
  );
}