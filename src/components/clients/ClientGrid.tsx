import Image from 'next/image';

// Sample client data
const clients = [
  // { id: 1, name: 'CocaCola', logo: '/images/clients/client-1.svg', industry: 'Entertainment' },
  { id: 2, name: 'Fanta', logo: '/images/clients/client-2.svg', industry: 'Beverages' },
  { id: 3, name: 'OctaFx', logo: '/images/clients/client-3.svg', industry: 'Technology' },
  { id: 4, name: 'International Breweries', logo: '/images/clients/client-4.svg', industry: 'Beverages' },
  { id: 5, name: 'Eveninday', logo: '/images/clients/client-5.svg', industry: 'Entertainment' },
  { id: 6, name: 'MainlandBlock', logo: '/images/clients/client-6.svg', industry: 'Entertainment' },
  { id: 7, name: 'Glenfiddich', logo: '/images/clients/client-7.svg', industry: 'Beverages' },
  { id: 8, name: 'Balvenie', logo: '/images/clients/client-8.svg', industry: 'Beverages' },
  { id: 9, name: 'Louie 13', logo: '/images/clients/client-9.svg', industry: 'Beverages' },
  { id: 10, name: 'TravelBeta', logo: '/images/clients/client-10.svg', industry: 'Travel' },
  { id: 11, name: 'Scheweppes', logo: '/images/clients/client-11.svg', industry: 'Beverages' },
  { id: 12, name: 'Coca-Cola', logo: '/images/clients/client-12.svg', industry: 'Beverages' },
];

// Group clients by industry
const clientsByIndustry = clients.reduce((acc, client) => {
  if (!acc[client.industry]) {
    acc[client.industry] = [];
  }
  acc[client.industry].push(client);
  return acc;
}, {} as Record<string, typeof clients>);

const industries = Object.keys(clientsByIndustry).sort();

const ClientGrid = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {industries.map((industry) => (
          <div key={industry} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-800">{industry}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clientsByIndustry[industry].map((client) => (
                <div 
                  key={client.id} 
                  className="bg-gray-800 bg-opacity-50 p-6 flex items-center justify-center aspect-video"
                >
                  <div className="relative h-12 w-full opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientGrid;