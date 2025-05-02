import CategoryFilter from '@/components/portfolio/CategoryFilter';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';

export default function PortfolioPage() {
  return (
    <>
      {/* Portfolio Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/portfolio/portfolio-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Our <span className="text-[#3A6E71]">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore our diverse collection of projects spanning commercials, films, documentaries, 
              music videos, and event coverage.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <CategoryFilter />
          <PortfolioGallery />
        </div>
      </section>
    </>
  );
}
