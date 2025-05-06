// import Image from 'next/image';
import ClientGrid from '@/components/clients/ClientGrid';
// import ClientTestimonial from '@/components/clients/ClientTestimonial';

export default function ClientsPage() {
  return (
    <>
      {/* Clients Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/clients/clients-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Our <span className="text-[#3A6E71]">Clients</span>
            </h1>
            <p className="lg:text-xl text-gray-300">
              We&apos;ve had the privilege of working with renowned brands and talented individuals 
              across various industries.
            </p>
          </div>
        </div>
      </section>
      
      {/* Client Grid */}
      <ClientGrid />
      
      {/* Featured Case Study */}
      {/* <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/clients/case-study.jpg"
                  alt="Featured case study with Nike"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#3A6E71] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
                Featured <span className="text-[#3A6E71]">Case Study</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Nike - &quot;Beyond Limits&quot; Campaign
              </p>
              <p className="text-gray-300 mb-6">
                We collaborated with Nike to create a dynamic commercial for their latest product line, 
                showcasing athletes pushing beyond their limits in visually stunning environments.
              </p>
              <p className="text-gray-300 mb-8">
                Our team handled the entire production process, from concept development to final delivery, 
                resulting in a campaign that exceeded expectations and resonated with audiences worldwide.
              </p>
              <button className="inline-flex items-center text-white hover:text-[#3A6E71] transition-colors">
                <span className="mr-2">View Full Case Study</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Testimonials */}
      {/* <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Client <span className="text-[#3A6E71]">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here&apos;s what our clients have to say about working with GMFILMS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ClientTestimonial
              quote="GMFILMS delivered beyond our expectations. Their creative vision and technical prowess transformed our concept into a stunning visual narrative."
              author="Sarah Williams"
              position="Marketing Director"
              company="Nike"
              image="/images/clients/testimonial-1.jpg"
            />
            
            <ClientTestimonial
              quote="Working with GMFILMS was seamless from start to finish. Their attention to detail and commitment to quality is unmatched in the industry."
              author="Michael Chen"
              position="Creative Lead"
              company="Sony Music"
              image="/images/clients/testimonial-2.jpg"
            />
            
            <ClientTestimonial
              quote="The team at GMFILMS brought our vision to life with creativity and precision. They're not just service providers, but true creative partners."
              author="Emily Rodriguez"
              position="Brand Manager"
              company="Adidas"
              image="/images/clients/testimonial-3.jpg"
            />
          </div>
        </div>
      </section> */}
    </>
  );
}