
const CompanyStory = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pr-12">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.03]">
                  <div className="w-full h-full bg-[url('/images/bts-1.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.03] translate-y-8">
                  <div className="w-full h-full bg-[url('/images/bts-2.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.03] -translate-y-8">
                  <div className="w-full h-full bg-[url('/images/bts-3.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden shadow-xl ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.03]">
                  <div className="w-full h-full bg-[url('/images/bts-4.jpg')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Our <span className="accent-gradient">Story</span>
            </h2>
            {/* <p className="text-gray-300 mb-6 text-lg">
              Founded in 2015, GMFILMS began as a small team of passionate filmmakers dedicated 
              to creating powerful visual narratives.
            </p> */}
            <p className="text-gray-300 mb-6">
              At just 18, when the idea of starting a production company seemed out of reach, GMFilms was born from a bold belief: 
              defy the odds. Inspired by a relentless drive to deliver excellence, Gorilla Mentality became more than just a name — 
              it became our mindset. It’s about pushing limits, setting new standards, and consistently delivering top-tier 
              visual content to our clients and audiences.
            </p>
            <p className="text-gray-300">
              Today, GMFilms stands as a creative force, fueled by passion, resilience, and a commitment to high-quality production 
              that speaks for itself.
            </p>
            {/* <p className="text-gray-300">
              Today, GMFILMS continues to push creative boundaries, combining technical expertise 
              with artistic vision to deliver exceptional visual content for our clients.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;