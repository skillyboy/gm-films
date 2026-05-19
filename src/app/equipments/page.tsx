'use client';

import { motion } from 'framer-motion';

const equipments = [
    {
      "item": "Drone (mini 4 pro)",
      "price": "150,000 (pilot inclusive)"
    },
    {
      "item": "GoPro 12 (per day rental)",
      "price": "30,000"
    },
    {
      "item": "Sony FX30 (Body Only)",
      "price": "30,000"
    },
    {
      "item": "Sony A7Siii (Body Only)",
      "price": "50,000"
    },
    {
      "item": "Tripod",
      "price": "10,000"
    },
    {
      "item": "GoPro 12 with full kit (per day)",
      "price": "50,000"
    },
    {
      "item": "Drone (mini 4 pro)",
      "price": "150,000 (pilot inclusive)"
    },
    {
      "item": "Matt Light (falcon eye) 2x2",
      "price": "30,000"
    },
    {
      "item": "Matt Light with C-stand",
      "price": "35,000"
    },
    {
      "item": "Small Stick Light",
      "price": "5,000"
    },
    {
      "item": "Stick Light with Stand",
      "price": "10,000"
    },
    {
      "item": "Small LED Light",
      "price": "10,000"
    },
    {
      "item": "Small LED Light with Stand",
      "price": "15,000"
    },
    {
      "item": "SL60 with C-Stand",
      "price": "30,000"
    },
    {
      "item": "Magic Arm & Clamp",
      "price": "10,000"
    },
    {
      "item": "C-Stand (per unit)",
      "price": "5,000"
    },
    {
      "item": "Rode Lapel Microphone",
      "price": "20,000"
    },
    {
      "item": "Zoom Recorder",
      "price": "20,000"
    },
    {
      "item": "Sigma (2) 24-70mm lens (per day)",
      "price": "40,000"
    },
    {
      "item": "35mm Lens (per day)",
      "price": "20,000"
    },
    {
      "item": "16mm Lens (per day)",
      "price": "15,000"
    },
    {
      "item": "ND Filter Set",
      "price": "35,000"
    },
    {
      "item": "ND Filter (Single Piece)",
      "price": "15,000"
    },
    {
      "item": "PyroSeven (single piece)",
      "price": "15,000"
    },
    {
      "item": "PyroSeven Transmitter, Receiver & Screen Box Set",
      "price": "60,000"
    },
    {
      "item": "PyroSeven Set with Stand",
      "price": "65,000"
    },
    {
      "item": "Sony FX30 with one lense",
      "price": "50,000"
    },
    {
      "item": "Sony FX30 with two lense",
      "price": "60,000"
    },
    {
      "item": "Sony GM ii 70-200mm",
      "price": "50,000"
    },
    {
      "item": "Hollyland Comms",
      "price": "150,000"
    },
    {
      "item": "Insta 360x4",
      "price": "40,000"
    },
    {
      "item": "Sand Bag",
      "price": "2,000"
    },
    {
      "item": "DJI RS 4 pro combo",
      "price": "50,000"
    },
]

export default function EquipmentPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Equipment Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: 'url("/images/equipment-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Equipment <span className="accent-gradient">Rental</span>
            </h1>
            <p className="lg:text-xl text-gray-300">
              Access professional cinematography equipment for your projects. We offer a wide range of 
              cameras, lenses, lighting setups, and accessories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-[#919191]">
        <ul className="gap-[16px] flex flex-col container mx-auto font-sans">
          {
            equipments.map((equipment, index) => {
              return (
                <li key={index}>
                  {equipment.item} - ₦{equipment.price}
                </li>
              )
            })
          }
        </ul>
      </section>
      
      {/* Contact for Rental */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-900 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Rent Equipments?</h2>
            <p className="md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us to check availability, discuss your specific requirements, or schedule a rental.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[var(--accent)] hover:bg-[var(--accent-bright)] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-8px_var(--accent-glow)] text-white text-sm font-medium tracking-wider uppercase transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}