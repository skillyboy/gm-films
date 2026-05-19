'use client';

import { motion } from 'framer-motion';
import ClientGrid from '@/components/clients/ClientGrid';

export default function ClientsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Clients Hero */}
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
              Our <span className="accent-gradient">Clients</span>
            </h1>
            <p className="lg:text-xl text-gray-300">
              We&apos;ve had the privilege of working with renowned brands and talented individuals 
              across various industries.
            </p>
          </div>
        </div>
      </section>
      
      {/* Client Grid */}
      <ClientGrid />
    </motion.section>
  );
}