"use client";

import { motion } from "framer-motion";

export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="w-80 max-w-[90%] space-y-6">
        {/* Shimmer effect */}
        {[1, 2, 3].map((_, idx) => (
          <motion.div
            key={idx}
            className="h-6 w-full rounded-md bg-gray-200 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
