// ============================================================================
// components/CursorGlow.jsx
// ============================================================================

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl pointer-events-none opacity-10 -z-10"
      animate={{ x: position.x - 160, y: position.y - 160 }}
      transition={{ type: 'spring', stiffness: 500, damping: 140 }}
    />
  );
};

export default CursorGlow;
