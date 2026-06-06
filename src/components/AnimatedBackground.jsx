// ============================================================================
// components/AnimatedBackground.jsx
// ============================================================================

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-20">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061122] via-[#0a0e27] to-black" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, .1) 25%, rgba(0, 217, 255, .1) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .1) 75%, rgba(0, 217, 255, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, .1) 25%, rgba(0, 217, 255, .1) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .1) 75%, rgba(0, 217, 255, .1) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.12, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default AnimatedBackground;
