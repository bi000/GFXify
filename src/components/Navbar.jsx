// ============================================================================
// components/Navbar.jsx
// ============================================================================

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, COLORS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaFacebook,FaWhatsapp,FaLinkedin,FaYoutube}  from 'react-icons/fa';
const Navbar = ({ scrollY }) => {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navBg =
    scrollY > 50
      ? 'bg-black/40 backdrop-blur-md border-b border-cyan-500/10'
      : 'bg-transparent';

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <img src='images/Logo.png' alt='GFXify Logo' className='w-24 h-12 lg:w-44 lg:h-24 mix-blend-multiply' />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {NAVIGATION_ITEMS.map((item) => (
            <motion.div
              key={item.path}
              className="relative"
              whileHover={{ y: -2 }}
            >
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.path)
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: isActive(item.path) ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact">
          <motion.button
            className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${COLORS.neonCyan}` }}
            whileTap={{ scale: 0.95 }}
          >
            Start Project
          </motion.button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-cyan-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors block ${
                      isActive(item.path)
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                className="mt-4 w-full px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
              >
                Start Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
