"use client";

import { motion } from "framer-motion";
import { Hammer, HardHat, Lightbulb } from "lucide-react";

export default function UnderDevelopmentPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-white relative -top-20">
      <motion.div
        initial={{ y: -20, opacity: 0 }
        }
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center justify-center gap-4 mb-6"
      >
        <HardHat className="w-10 h-10 text-yellow-500 animate-bounce" />
        <Hammer className="w-10 h-10 text-gray-300 animate-pulse" />
      </motion.div >

      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold mb-3 text-center"
      >
        This Page Is Under Construction 🚧
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-lg text-gray-300 text-center max-w-md mb-6"
      >
        I had a brilliant idea at 2AM, wrote half the code, and then got distracted by coffee. I’ll finish it before the next Inter match kicks off. Probably.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-2 text-sm text-gray-400"
      >
        <Lightbulb className="w-4 h-4 text-yellow-300 animate-ping" />
        Feature still brewing... check back soon!
      </motion.div>
    </div >
  );
}