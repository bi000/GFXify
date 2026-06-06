// ============================================================================
// sections/HeroSection.jsx
// ============================================================================

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { COLORS, STATS } from '../constants';
import CountUp from '../components/CountUp';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const handleNavigation = (sectionId) => {
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400 to-transparent rounded-full filter blur-3xl opacity-20"
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 sm:mt-10 lg:mt-20 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Creative Designs That
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Elevate Your Brand
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We craft premium branding, social media designs, print materials, and creative
            visuals that make businesses stand out in a crowded digital world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <Link to="/portfolio">
              <motion.button
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${COLORS.neonCyan}` }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 rounded-lg border-2 border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-400/10 transition-colors"
                whileHover={{ boxShadow: `0 0 30px ${COLORS.neonCyan}` }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8"
            variants={itemVariants}
          >
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur"
                whileHover={{
                  borderColor: COLORS.neonCyan,
                  boxShadow: `0 0 20px ${COLORS.glowBlue}`,
                }}
              >
                <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2">
                  <CountUp end={stat.number} />
                  {stat.suffix}
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-cyan-400" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
