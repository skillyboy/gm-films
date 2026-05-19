'use client';

import { motion } from 'framer-motion';
import CeoProfile from '@/components/about/CeoProfile';
import CompanyStory from '@/components/about/CompanyStory';

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* About Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: 'url("/images/Pattern.png")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              About <span className="accent-gradient">GMFILMS</span>
            </h1>
            <p className="lg:text-xl text-gray-300">
              Learn about our company, our journey, and the passion that drives us to create 
              exceptional visual stories.
            </p>
          </div>
        </div>
      </section>
      
      {/* CEO Profile */}
      <CeoProfile />

      {/* Company Story */}
      <CompanyStory />
    </motion.section>
  );
}