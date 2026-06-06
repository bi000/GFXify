// ============================================================================
// components/Footer.jsx
// ============================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAVIGATION_ITEMS, CONTACT_INFO } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaFacebook,FaWhatsapp,FaLinkedin,FaYoutube}  from 'react-icons/fa';

const Footer = () => {
    const icons =[
      {id:1,icon:<FaFacebook size={20}/>,link:'https://www.facebook.com/gfxify'},
      {id:2,icon:<FaWhatsapp size={20}/>,link:'https://wa.me/1234567890'},
      {id:3,icon:<FaLinkedin size={20}/>,link:'https://www.linkedin.com/company/gfxify'},
      {id:4,icon:<FaYoutube size={20}/>,link:'https://www.youtube.com/channel/gfxify'},
    ]
  const currentYear = new Date().getFullYear();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="border-t border-cyan-400/10 bg-black/50 backdrop-blur relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
                 <img src='images/Logo.png' alt='GFXify Logo' className='w-24 h-12 lg:w-44 lg:h-24' />

            <p className="text-gray-400 text-sm">
              Creating premium visual experiences that elevate brands.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Branding', 'Design', 'Social Media', 'Print'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {icons.map(({ id, icon, link }) => (
                <motion.a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg  flex items-center justify-center text-white"
                  whileHover={{
                    borderColor: '#00D9FF',
                    boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)',
                    scale: 1.1,
                  }}
                  title={name}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-cyan-400/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} GFXify. All rights reserved.
          </p>
          <motion.button
            className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-black font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
