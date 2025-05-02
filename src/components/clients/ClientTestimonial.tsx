import Image from 'next/image';

interface ClientTestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const ClientTestimonial = ({
  quote,
  author,
  position,
  company,
  image,
}: ClientTestimonialProps) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-8 relative">
      <div className="absolute top-8 left-8 text-4xl text-[#3A6E71] opacity-40">&quot;</div>
      <div className="relative">
        <p className="text-gray-300 mb-8 relative z-10">{quote}</p>
        
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={image}
              alt={author}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="text-sm text-gray-400">{position}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;