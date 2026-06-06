// ============================================================================
// sections/PortfolioSection.jsx
// ============================================================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO, PORTFOLIO_CATEGORIES, COLORS } from '../constants';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6 mt-10 relative section-spacing">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Showcase of our best work</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {PORTFOLIO_CATEGORIES.map((cat, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/50'
                  : 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-gray-300 hover:border-cyan-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div className="grid md:grid-cols-3 gap-6" layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur cursor-pointer"
                whileHover={{
                  borderColor: COLORS.neonCyan,
                  boxShadow: `0 0 30px ${COLORS.glowBlue}`,
                }}
              >
                <div className="aspect-square flex items-center justify-center text-7xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-cyan-400 text-sm mb-4">{project.category}</p>
                    <motion.button
                      className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
