'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CategoryFilterProps {
  activeCategory?: string;
}

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'commercials', name: 'Commercials' },
  { id: 'films', name: 'Films & Documentaries' },
  { id: 'music', name: 'Music Videos' },
  { id: 'events', name: 'Events' },
];

const CategoryFilter = ({ activeCategory }: CategoryFilterProps) => {
  const [active, setActive] = useState(activeCategory || 'all');

  useEffect(() => {
    setActive(activeCategory || 'all');
  }, [activeCategory]);

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
        {categories.map((category) => {
          const isActive = category.id === active;
          const href = category.id === 'all' ? '/portfolio' : `/portfolio/${category.id}`;
          
          return (
            <Link
              key={category.id}
              href={href}
              className={`px-6 py-2 text-sm rounded-full border transition-all duration-300 ${
                isActive
                  ? 'bg-[var(--accent)] border-[var(--accent)] text-white shadow-[0_8px_20px_-8px_var(--accent-glow)]'
                  : 'bg-transparent border-[var(--surface-border)] text-gray-300 hover:border-[var(--accent)] hover:text-white'
              }`}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
