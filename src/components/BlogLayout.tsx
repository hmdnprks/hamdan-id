"use client";

import { motion } from "framer-motion";
import BlogSidebar from "./BlogSidebar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row flex-1">
        <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
          <BlogSidebar />
        </aside>

        <main className="flex-1 px-4 sm:px-6 py-10 max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}


          </motion.div>
        </main>
      </div>
    </div>
  );
}