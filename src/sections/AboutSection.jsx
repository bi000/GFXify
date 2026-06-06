// ============================================================================
// sections/AboutSection.jsx
// ============================================================================

import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_VALUES, COLORS } from '../constants';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative section-spacing">
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
              About GFXify
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Transforming ideas into stunning visual experiences</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-28 mb-5 lg:mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              At GFXify, we believe that great design is more than aesthetics—it's a strategic tool
              that drives business growth. Our team of creative professionals is dedicated to delivering
              designs that not only look stunning but also achieve your business objectives.
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the most trusted creative partner for businesses worldwide, known for pushing
              boundaries and delivering exceptional results that exceed expectations.
            </p>
          </motion.div>

          {/* Values Grid */}
<motion.div 
       animate={{
      scale: [1, 1.05, 1],
      rotate: [0, 2, -2, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  className=" sm:w-[80%] sm:w-[80%] md:w-[100%] md:h-[80%] lg:w-[60%] lg:h-[90%] overflow-hidden border border-[#00D9FF] rounded-full shadow-[0_0_35px_rgba(0,217,255,0.35)]"
>
  <motion.img
    src="images/target.png"
    className="object-contain rounded-sm mix-blend-multiply drop-shadow-lg shadow"

  />
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
