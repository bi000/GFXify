// ============================================================================
// sections/ProcessSection.jsx
// ============================================================================

import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS, COLORS } from '../constants';

const ProcessSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-6 relative section-spacing">
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
              Our Process
            </span>
          </h2>
          <p className="text-gray-400 text-lg">How we bring your vision to life</p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Connection line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0" />

            <div className="grid grid-cols-5 gap-4">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.step}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Step circle */}
                  <div className="flex justify-center mb-8">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50 relative z-10"
                      whileHover={{ scale: 1.1, boxShadow: `0 0 30px ${COLORS.neonCyan}` }}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mt-10 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.step}
                className="flex gap-6"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>
                  {step.step < PROCESS_STEPS.length && (
                    <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
