// import EquipmentList from '@/components/equipment/EquipmentList';

export default function EquipmentPage() {
  return (
    <>
      {/* Equipment Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/equipment/equipment-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Equipment <span className="text-[#3A6E71]">Rental</span>
            </h1>
            <p className="lg:text-xl text-gray-300">
              Access professional cinematography equipment for your projects. We offer a wide range of 
              cameras, lenses, lighting setups, and accessories.
            </p>
          </div>
        </div>
      </section>
      
      {/* Rental Information */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-800 bg-opacity-50 p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">Rental Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Rental Period
                </h3>
                <p className="text-gray-300">
                  Our standard rental period is 24 hours (1 day). We also offer weekend, weekly, and monthly rates.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Payment
                </h3>
                <p className="text-gray-300">
                  We accept credit/debit cards and bank transfers. A security deposit is required for all rentals.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Insurance
                </h3>
                <p className="text-gray-300">
                  All renters must provide proof of insurance coverage for rented equipment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Reservations
                </h3>
                <p className="text-gray-300">
                  Equipment should be reserved at least 48 hours in advance to ensure availability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Pickup & Return
                </h3>
                <p className="text-gray-300">
                  Equipment can be picked up and returned at our studio during business hours (9 AM - 6 PM).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Cancellation
                </h3>
                <p className="text-gray-300">
                  Cancellations must be made at least 24 hours before the scheduled pickup time to avoid fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Equipment List */}
      {/* <EquipmentList /> */}
      
      {/* Contact for Rental */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-900 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Rent Equipment?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us to check availability, discuss your specific requirements, or schedule a rental.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#3A6E71] hover:bg-[#2d5456] text-white text-sm font-medium tracking-wider uppercase transition-all duration-200"
              >
                Contact Us
              </a>
              <a 
                href="#equipment-list" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#3A6E71] text-white hover:bg-red-600/10 text-sm font-medium tracking-wider uppercase transition-all duration-200"
              >
                View Equipment
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}