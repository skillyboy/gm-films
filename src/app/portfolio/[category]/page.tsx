import { notFound } from 'next/navigation';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';
import CategoryFilter from '@/components/portfolio/CategoryFilter';

// Define the categories for portfolio
const categories = [
  { id: 'commercials', name: 'Commercials' },
  { id: 'films', name: 'Films & Documentaries' },
  { id: 'music', name: 'Music Videos' },
  { id: 'events', name: 'Event' },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CategoryPage({ params }: any) {
  const category = categories.find((cat) => cat.id === params.category);
  
  if (!category) {
    notFound();
  }
  
  return (
    <>
      {/* Category Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url("/images/portfolio/${params.category}-hero.jpg")` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              <span className="accent-gradient">{category.name}</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore our collection of {category.name.toLowerCase()} projects.
            </p>
          </div>
        </div>
      </section>
      
      {/* Category Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <CategoryFilter activeCategory={params.category} />
          <PortfolioGallery category={params.category} />
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}