// ============================================================================
// pages/NotFoundPage.jsx
// ============================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="page-transition pt-20 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <div className="text-9xl mb-8">🎨</div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">404</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Page Not Found
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Oops! The page you're looking for doesn't exist. But don't worry, let's get you back
          on track.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/">
            <motion.button
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home <ArrowRight size={20} />
            </motion.button>
          </Link>
          <Link to="/portfolio">
            <motion.button
              className="px-8 py-4 rounded-lg border-2 border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-400/10 transition-colors"
              whileHover={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </Link>
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-500 opacity-5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-500 opacity-5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
