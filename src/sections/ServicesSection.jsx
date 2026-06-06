// ============================================================================
// sections/ServicesSection.jsx
// ============================================================================

import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, COLORS } from '../constants';
const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 relative section-spacing">
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
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Comprehensive design solutions for every need</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: COLORS.neonCyan,
                boxShadow: `0 0 30px ${COLORS.glowBlue}`,
                y: -8,
              }}
            >
              <div className="text-5xl mb-6 group-hover:scale-100 transition-transform flex justify-center">
                <img src={service.image} alt={service.title} className="w-full h-full rounded-md" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex justify-center">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
