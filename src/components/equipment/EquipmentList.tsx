'use client';

import { useState } from 'react';
import EquipmentCard from './EquipmentCard';

// Equipment categories
const categories = [
  { id: 'all', name: 'All Equipment' },
  { id: 'cameras', name: 'Cameras' },
  { id: 'lenses', name: 'Lenses' },
  { id: 'lighting', name: 'Lighting' },
  { id: 'audio', name: 'Audio' },
  { id: 'stabilizers', name: 'Stabilizers' },
  { id: 'accessories', name: 'Accessories' },
];

// Sample equipment data
const equipmentItems = [
  {
    id: 1,
    name: 'Sony FX9',
    category: 'cameras',
    image: '/images/equipment/camera-1.jpg',
    description: 'Full-frame 6K sensor camera with 15+ stops of dynamic range and dual ISO.',
    dailyRate: 350,
    weeklyRate: 1400,
    availability: true,
  },
  {
    id: 2,
    name: 'RED Komodo 6K',
    category: 'cameras',
    image: '/images/equipment/camera-2.jpg',
    description: 'Compact cinema camera with 6K Super 35mm sensor and global shutter.',
    dailyRate: 400,
    weeklyRate: 1600,
    availability: true,
  },
  {
    id: 3,
    name: 'Canon Cinema Prime Lens Set',
    category: 'lenses',
    image: '/images/equipment/lens-1.jpg',
    description: 'Set of 6 cinema prime lenses (24mm, 35mm, 50mm, 85mm, 100mm, 135mm).',
    dailyRate: 250,
    weeklyRate: 1000,
    availability: true,
  },
  {
    id: 4,
    name: 'Arri SkyPanel S60-C',
    category: 'lighting',
    image: '/images/equipment/light-1.jpg',
    description: 'LED soft light with adjustable CCT and full RGB color control.',
    dailyRate: 180,
    weeklyRate: 720,
    availability: false,
  },
  {
    id: 5,
    name: 'Sennheiser MKH 416',
    category: 'audio',
    image: '/images/equipment/audio-1.jpg',
    description: 'Professional short shotgun microphone for film and television production.',
    dailyRate: 60,
    weeklyRate: 240,
    availability: true,
  },
  {
    id: 6,
    name: 'DJI Ronin 2',
    category: 'stabilizers',
    image: '/images/equipment/stabilizer-1.jpg',
    description: 'Professional 3-axis camera stabilizer with 30lb payload capacity.',
    dailyRate: 150,
    weeklyRate: 600,
    availability: true,
  },
  {
    id: 7,
    name: 'SmallHD 702 Touch Monitor',
    category: 'accessories',
    image: '/images/equipment/accessory-1.jpg',
    description: '7" daylight viewable on-camera monitor with touchscreen interface.',
    dailyRate: 80,
    weeklyRate: 320,
    availability: true,
  },
  {
    id: 8,
    name: 'ARRI ALEXA Mini LF',
    category: 'cameras',
    image: '/images/equipment/camera-3.jpg',
    description: 'Large format camera with ARRI color science and up to 4.5K resolution.',
    dailyRate: 550,
    weeklyRate: 2200,
    availability: true,
  },
  {
    id: 9,
    name: 'Zeiss Supreme Prime Lens Set',
    category: 'lenses',
    image: '/images/equipment/lens-2.jpg',
    description: 'Set of 7 high-end cinema lenses with T1.5 aperture.',
    dailyRate: 400,
    weeklyRate: 1600,
    availability: true,
  },
];

const EquipmentList = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter equipment based on active category
  const filteredEquipment = activeCategory === 'all'
    ? equipmentItems
    : equipmentItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="equipment-list" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => {
              const isActive = category.id === activeCategory;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item) => (
            <EquipmentCard key={item.id} equipment={item} />
          ))}
        </div>
        
        {filteredEquipment.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No equipment found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EquipmentList;