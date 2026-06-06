// ============================================================================
// pages/PortfolioPage.jsx
// ============================================================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from '../constants';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === activeFilter);

  return (
    <div className="page-transition pt-20">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcase of our best work and creative excellence
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
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
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 section-spacing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 cursor-pointer"
                  whileHover={{
                    borderColor: '#00D9FF',
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)',
                  }}
                >
                  <div className="aspect-square flex items-center justify-center text-7xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
                                     <img src={project.image} alt={project.title} className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-300 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-cyan-400 text-sm mb-2">{project.category}</p>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-xs text-cyan-300"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
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

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-400 text-lg">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: filteredProjects.length, label: 'Projects' },
              { number: PORTFOLIO_CATEGORIES.length - 1, label: 'Categories' },
              { number: 200, label: 'Happy Clients' },
              { number: 5, label: 'Years Experience' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  borderColor: '#00D9FF',
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                }}
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                  <span className="text-2xl">+</span>
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
