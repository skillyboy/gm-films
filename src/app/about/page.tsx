// import Image from 'next/image';
import CeoProfile from '@/components/about/CeoProfile';
import CompanyStory from '@/components/about/CompanyStory';

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/about/about-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              About <span className="text-[#3A6E71]">GMFILMS</span>
            </h1>
            <p className="text-xl text-gray-300">
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
      
      {/* Team Section */}
      
    </>
  );
}