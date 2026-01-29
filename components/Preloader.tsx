'use client';

import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-accent/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative flex flex-col items-center gap-8">
        {/* Name / Logo Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold tracking-widest"
        >
          <span className="text-accent">PETER</span>
          <span className="text-foreground">NNADI</span>
        </motion.h1>

        {/* Animated Bars */}
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 10 }}
              animate={{ height: [10, 40, 10] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
              }}
              className="w-2 rounded-full bg-accent"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
