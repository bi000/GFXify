// ============================================================================
// pages/AboutPage.jsx
// ============================================================================

import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS,ABOUT_VALUES } from '../constants';
import Lottie from 'lottie-react';
import CreativeDesign from '../assets/71620b30-e223-11ee-b9b5-2bfbff3e4a5d.json';
const AboutPage = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <section className="pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-gradient">GFXify</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're a team of passionate designers and creatives dedicated to transforming
            your vision into stunning visual experiences.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-4 px-6 section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2019, GFXify started with a simple mission: to create exceptional
                designs that help businesses stand out. What began as a small team of three
                passionate designers has grown into a dynamic creative agency serving clients
                worldwide.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We believe that great design is more than aesthetics—it's a strategic tool
                that drives real business results. Every project we undertake is an opportunity
                to push creative boundaries and deliver exceptional value.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, our team of 50+ talented professionals collaborates daily to deliver
                innovative solutions across branding, digital design, and creative strategy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl  flex items-center justify-center overflow-hidden">
                <motion.div
                  className="text-9xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img src='images/Logo2.png' alt='image' className=''/>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 px-6 section-spacing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Mission & Vision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: '#00D9FF',
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)',
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses through transformative design solutions that combine
                creativity, strategy, and innovation. We're committed to delivering exceptional
                results that exceed expectations and create lasting value for our clients.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                borderColor: '#00D9FF',
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)',
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the most trusted and innovative creative partner globally, recognized for
                pushing creative boundaries and delivering designs that inspire, engage, and
                drive meaningful business impact for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 px-6 section-spacing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Our Core Values</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ABOUT_VALUES.map((value, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-center group cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  borderColor: '#00D9FF',
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                  y: -8,
                }}
              >
                <div className="text-5xl mb-4"><Lottie animationData={value.icon} loop={true} autoplay={true} /></div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
    </div>
  );
};

export default AboutPage;
