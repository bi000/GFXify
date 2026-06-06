// ============================================================================
// pages/HomePage.jsx
// ============================================================================

import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import ServicesSection from '../sections/ServicesSection';
import PortfolioSection from '../sections/PortfolioSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ProcessSection from '../sections/ProcessSection';
import ContactSection from '../sections/ContactSection';
import LogosSection from '../sections/LogosSection';
const HomePage = () => {
  return (
    <div className="page-transition">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ProcessSection />
            <LogosSection/>
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
