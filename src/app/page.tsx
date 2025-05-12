import HeroBanner from '@/components/home/HeroBanner';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import ClientsSection from '@/components/home/ClientsSection';
import Button from '@/components/common/Button';

export default function Home() {
  return (
    <>
      <HeroBanner />   
      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cinematic Excellence<br/>
                <span className="text-[#3A6E71]">Visual Storytelling</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                GMFILMS is a premier film company dedicated to creating visually stunning narratives. 
                Our expertise spans commercials, films, documentaries, music videos, and event coverage.
              </p>
              <p className="text-gray-300 mb-8">
                With state-of-the-art equipment and a passionate team, we transform concepts into captivating visual stories 
                that resonate with audiences and deliver your message with impact.
              </p>
              <Button href="/about" variant="outline">
                About Us
              </Button>
            </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pr-12">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-[url('/images/bts-5.jpg')] bg-cover bg-center"></div>
                  </div>
                  <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden translate-y-8">
                    <div className="w-full h-full bg-[url('/images/bts-2.jpg')] bg-cover bg-center"></div>
                  </div>
                  <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden -translate-y-8">
                    <div className="w-full h-full bg-[url('/images/bts-3.jpg')] bg-cover bg-center"></div>
                  </div>
                  <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-[url('/images/bts-6.jpg')] bg-cover bg-center"></div>
                  </div>
                </div>
              </div>
          </div>

          </div>
        </div>
      </section>
      
      <PortfolioPreview />
      <ClientsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your <span className="text-[#3A6E71]">Vision to Life</span>?
          </h2>
          <p className="md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Let&apos;s collaborate to create stunning visuals that tell your story and captivate your audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/portfolio" variant="default">
              Explore Our Work
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}