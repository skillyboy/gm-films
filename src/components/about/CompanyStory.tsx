
const CompanyStory = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-10 md:mt-0 md:pr-12">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/about/company-1.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden translate-y-8">
                  <div className="w-full h-full bg-[url('/images/about/company-2.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden -translate-y-8">
                  <div className="w-full h-full bg-[url('/images/about/company-3.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/about/company-4.jpg')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Our <span className="text-[#3A6E71]">Story</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Founded in 2015, GMFILMS began as a small team of passionate filmmakers dedicated 
              to creating powerful visual narratives.
            </p>
            <p className="text-gray-300 mb-6">
              What started as a boutique cinematography studio quickly grew into a comprehensive 
              production company, as our commitment to quality and creative excellence attracted 
              clients from various industries.
            </p>
            <p className="text-gray-300 mb-6">
              Over the years, we&apos;ve expanded our services to include equipment rental, providing 
              fellow filmmakers with access to professional gear. We&apos;ve had the privilege of working 
              with renowned brands, studios, and artists on projects that have reached global audiences.
            </p>
            <p className="text-gray-300">
              Today, GMFILMS continues to push creative boundaries, combining technical expertise 
              with artistic vision to deliver exceptional visual content for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;