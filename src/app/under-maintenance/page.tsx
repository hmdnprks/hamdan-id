"use client";

import { motion } from "framer-motion";
import { Wrench, Loader2 } from "lucide-react";

export default function UnderMaintenancePage() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6">
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-800 p-6 rounded-full shadow-lg mb-6"
      >
        <Wrench className="w-10 h-10 text-yellow-400 animate-pulse" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Hold Tight! We’re Tightening Some Bolts 🛠️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-lg text-gray-300 text-center max-w-md mb-6"
      >
        Our engineers are currently arguing about semicolons, fixing a button that doesn’t do anything, and deploying something they’re 97% sure won’t crash. Be back soon!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-2 text-sm text-gray-400"
      >
        <Loader2 className="w-4 h-4 animate-spin" />
        Estimated restart: once we find the missing semicolon
      </motion.div>
    </main>
  );
}