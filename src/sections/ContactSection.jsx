// ============================================================================
// sections/ContactSection.jsx
// ============================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {Follow_Us} from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faLocationPin} from '@fortawesome/free-solid-svg-icons';
const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-6 relative section-spacing">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <span><FontAwesomeIcon icon={faEnvelope} size='lg'/></span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href="mailto:hello@gfxify.com"
                        className="text-white font-medium hover:text-cyan-400 transition-colors"
                      >
                        gfxify.creative@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <span><FontAwesomeIcon icon={faPhone} size='lg'/></span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-white font-medium hover:text-cyan-400 transition-colors"
                      >
                        +977-9805177172
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <span><FontAwesomeIcon icon={faLocationPin} size='lg'/></span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">Kathmandu,Nepal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white font-bold mb-4">Follow Us</h3>
                                <div className="flex gap-2">
                                  {Follow_Us.map((social) => (
                                    <motion.div
                                      key={social.id}
                                      href={social.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="w-12 h-12 rounded-lg  flex items-center justify-center text-cyan-400 hover:text-white transition-colors"
                                      whileHover={{
                                        borderColor: '#00D9FF',
                                        boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                                        scale: 1.1,
                                      }}
                                    >
                                    < img src ={social.image} alt={social.name} className="w-auto h-auto object-cover" />
                                    </motion.div>
                                  ))}
                                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                  required
                />
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
                  animate={
                    focused === 'name'
                      ? {
                          boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                          opacity: 1,
                        }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                  required
                />
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
                  animate={
                    focused === 'email'
                      ? {
                          boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                          opacity: 1,
                        }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                  required
                />
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
                  animate={
                    focused === 'message'
                      ? {
                          boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                          opacity: 1,
                        }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
