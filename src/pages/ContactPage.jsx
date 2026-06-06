// ============================================================================
// pages/ContactPage.jsx
// ============================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import {Follow_Us} from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faLocationPin, faClock} from '@fortawesome/free-solid-svg-icons';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
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
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in mind? Let's create something amazing together.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>

              {/* Info Cards */}
              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} size='lg' />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-white font-medium hover:text-cyan-400 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} size='lg' />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-white font-medium hover:text-cyan-400 transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faLocationPin} size='lg' />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">{CONTACT_INFO.location}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faClock} size='lg' />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Business Hours</p>
                    <p className="text-white font-medium">{CONTACT_INFO.hours}</p>
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
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

                {/* Email */}
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

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
                    animate={
                      focused === 'subject'
                        ? {
                            boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
                            opacity: 1,
                          }
                        : { opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
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

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:shadow-lg transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
