import Image from 'next/image';
import Button from '@/components/common/Button';

const EquipmentSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 w-full">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/dlxmedia.jpg"
                alt="Professional cinematography equipment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Professional <span className="text-[#3A6E71]">Equipment</span> Rental
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Access high-end cinematography equipment for your projects. We offer a diverse range of cameras, 
              lenses, lighting, and accessories to bring your vision to life.
            </p>
            <p className="text-gray-300 mb-8">
              Our rental service provides flexible options for filmmakers, directors, and videographers 
              looking for quality equipment without the high costs of ownership.
            </p>
            <Button href="/equipment">
              View Available Equipment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;