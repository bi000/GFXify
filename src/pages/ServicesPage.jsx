// ============================================================================
// pages/ServicesPage.jsx
// ============================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES, PRICING_PLANS, FAQ } from '../constants';
import { ChevronDown } from 'lucide-react';

const ServicesPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

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
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive design solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 section-spacing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 group cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  borderColor: '#00D9FF',
                  boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)',
                  y: -8,
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.fullDesc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6 section-spacing">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Pricing Plans</span>
            </h2>
            <p className="text-gray-300 text-lg">Flexible packages for every budget</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PRICING_PLANS.map((plan) => (
              <motion.div
                key={plan.id}
                className={`relative rounded-xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20'
                    : 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20'
                }`}
                variants={itemVariants}
                whileHover={{
                  y: plan.popular ? -12 : -8,
                  boxShadow: `0 0 30px rgba(0, 217, 255, ${plan.popular ? 0.3 : 0.2})`,
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                  {plan.duration && <span className="text-gray-400 ml-2">per {plan.duration}</span>}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:shadow-lg hover:shadow-cyan-500/50'
                      : 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 hover:border-cyan-400'
                  }`}
                >
                  Get Started
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 section-spacing">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {FAQ.map((item) => (
              <motion.div
                key={item.id}
                className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 overflow-hidden"
                variants={itemVariants}
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === item.id ? null : item.id)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-cyan-500/5 transition-colors text-left"
                >
                  <h3 className="font-bold text-white text-lg">{item.question}</h3>
                  <motion.div
                    animate={{
                      rotate: expandedFAQ === item.id ? 180 : 0,
                    }}
                  >
                    <ChevronDown className="text-cyan-400" size={24} />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFAQ === item.id ? 'auto' : 0,
                    opacity: expandedFAQ === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-cyan-400/10"
                >
                  <p className="p-6 text-gray-300">{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
