import Image from 'next/image';
import Button from '@/components/common/Button';

const clients = [
  { id: 2, name: 'evenintheday', logo: '/images/evenintheday.png' },
  { id: 3, name: 'Balvenie', logo: '/images/balvenie.png' },
  { id: 5, name: 'CocaCola', logo: '/images/CocaCola.png' },
  { id: 6, name: 'Fanta', logo: '/images/fanta.png' },
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Trusted by <span className="text-[#3A6E71]">Leading Brands</span>
          </h2>
          <p className="md:text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;ve collaborated with renowned brands and individuals across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 mb-15 ">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="flex items-center justify-center"
            >
              <div className="relative h-12 w-full hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/clients" variant="outline" className='text-sm'>
            View All Clients
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;