import Image from 'next/image';

const CeoProfile = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Meet Our <span className="text-[#3A6E71]">CEO</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              John Foster is the visionary leader behind GMFILMS, with over 15 years of 
              experience in the film and cinematography industry.
            </p>
            <p className="text-gray-300 mb-6">
              After graduating from the New York Film Academy, John worked on numerous 
              high-profile projects for major studios before founding GMFILMS in 2015.
            </p>
            <p className="text-gray-300">
              His passion for visual storytelling and commitment to technical excellence 
              has established GMFILMS as a leading name in the industry. John personally 
              oversees each project, ensuring the highest quality standards are maintained.
            </p>
            
            <div className="mt-8 flex items-center">
              <div className="mr-4">
                <svg className="w-8 h-8 text-[#3A6E71]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Watch John&apos;s director&apos;s reel</p>
                <p className="text-sm text-gray-400">Discover his unique visual style</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="relative">
              <div className="aspect-[3/4] max-w-md relative z-10 mx-auto">
                <Image
                  src="/images/ceo-portrait.jpg"
                  alt="John Foster - CEO of GMFILMS"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover border-2 border-[#3A6E71]"
                />
              </div>
              {/* <div className="absolute top-8 -left-8 w-full h-full border-2 border-[#3A6E71]"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoProfile;