// ============================================================================
// sections/WhyChooseUsSection.jsx
// ============================================================================

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Rocket, Zap, Clock, Star, Users } from 'lucide-react';
import { WHY_CHOOSE, COLORS } from '../constants';

const IconMap = {
  Palette,
  Rocket,
  Zap,
  Clock,
  Star,
  Users,
};

const WhyChooseUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
              Why Choose GFXify
            </span>
          </h2>
          <p className="text-gray-400 text-lg">What sets us apart from the rest</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {WHY_CHOOSE.map((item, idx) => {
            const Icon = IconMap[item.icon];
            return (
              <motion.div
                key={idx}
                className="group p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  borderColor: COLORS.neonCyan,
                  boxShadow: `0 0 30px ${COLORS.glowBlue}`,
                  y: -8,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
