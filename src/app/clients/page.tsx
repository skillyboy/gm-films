import ClientGrid from '@/components/clients/ClientGrid';

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
    </>
  );
}