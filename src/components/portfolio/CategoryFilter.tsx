'use client';

import { useEffect, useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface CategoryFilterProps {
  activeCategory?: string;
}

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'commercials', name: 'Commercials' },
  { id: 'films', name: 'Films & Documentaries' },
  // { id: 'documentaries', name: 'Films & Documentaries' },
  { id: 'music', name: 'Music Videos' },
  { id: 'events', name: 'Event Coverage' },
];

const CategoryFilter = ({ activeCategory }: CategoryFilterProps) => {
  const [active, setActive] = useState(activeCategory || 'all');
  // const router = useRouter();
  // const pathname = usePathname();

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
              className={`px-6 py-2 text-sm transition-colors duration-200 ${
                isActive
                  ? 'bg-[#3A6E71] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
