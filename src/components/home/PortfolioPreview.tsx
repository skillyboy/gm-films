// import Link from 'next/link';
// import Button from '@/components/common/Button';

// const categories = [
//   { 
//     id: 'commercials', 
//     name: 'Commercials', 
//     image: '/images/portfolio/commercial-preview.jpg',
//     count: 12
//   },
//   { 
//     id: 'films', 
//     name: 'Films & Documentaries', 
//     image: '/images/portfolio/film-preview.jpg',
//     count: 8
//   },
//   { 
//     id: 'music', 
//     name: 'Music Videos', 
//     image: '/images/portfolio/music-preview.jpg',
//     count: 15
//   },
//   { 
//     id: 'events', 
//     name: 'Event Coverage', 
//     image: '/images/portfolio/event-preview.jpg',
//     count: 10
//   },
// ];

// const PortfolioPreview = () => {
//   return (
//     <section className="py-20 bg-black">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
//             Our <span className="text-[#3A6E71]">Portfolio</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Explore our diverse range of visual storytelling across different genres and formats.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//           {categories.map((category) => (
//             <Link
//               key={category.id}
//               href={`/portfolio/${category.id}`}
//               className="group relative overflow-hidden red"
//             >
//               <div className="aspect-video bg-gray-800 overflow-hidden">
//                 <div 
//                   className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                   style={{ backgroundImage: `url(${category.image})` }}
//                 ></div>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end p-6">
//                 <h3 className="text-xl font-bold mb-2">{category.name}</h3>
//                 <p className="text-sm text-gray-300">{category.count} Projects</p>
//               </div>
//             </Link>
//           ))}
//         </div>
        
//         <div className="text-center">
//           <Button href="/portfolio">
//             View All Projects
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioPreview;

import VideoPlayer from '@/components/common/VideoPlayer';
import Button from '@/components/common/Button';

// Featured projects from each category
const featuredProjects = [
  { 
    id: 1, 
    title: 'Octa How to..', 
    category: 'commercials', 
    video: 'https://youtu.be/pcXIfx9V108',
    client: 'OctaFX',
    categoryName: 'Commercials'
  },
  { 
    id: 6, 
    title: 'If the world revolves around me', 
    category: 'films', 
    video: 'https://youtu.be/TebtBJPX7mo',
    client: 'OctaFX',
    categoryName: 'Films & Documentaries'
  },
  { 
    id: 8, 
    title: 'Sounds from Vict0ny', 
    category: 'music', 
    video: 'https://youtu.be/tawp1V7M3i4',
    client: 'Vict0ny',
    categoryName: 'Music Videos'
  },
  { 
    id: 4, 
    title: 'Grand Cru Night', 
    category: 'events', 
    video: 'https://youtu.be/keoiQuOqML8',
    client: 'Glenfiddich',
    categoryName: 'Event Coverage'
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Our <span className="text-[#3A6E71]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our range of visual storytelling across different genres and formats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900 overflow-hidden">
              <div className="aspect-video bg-gray-800">
                <VideoPlayer url={project.video} />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300">
                    {project.categoryName}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{project.client}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/portfolio">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;