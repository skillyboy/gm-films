'use client';
import ProjectCard from './ProjectCard';


const portfolioItems = [
  {
    id: 1,
    title: 'Octa How to..',
    category: 'commercials',
    video: ' https://youtu.be/pcXIfx9V108',
    client: 'OctaFX',
  },
  {
    id: 2,
    title: 'The Balvenie x Cigars',
    category: 'events',
    video: 'https://youtu.be/zRVyu58eT9o',
    client: 'Balvenie',
  },
  {
    id: 3,
    title: 'Entity Fashion Film',
    category: 'commercials',
    video: 'https://youtu.be/_hekaNQ6-zU',
    client: 'Entity',
  },
  {
    id: 4,
    title: 'Grand Cru Night',
    category: 'events',
    video: 'https://youtu.be/keoiQuOqML8',
    client: 'Glenfiddich',
  },
  {
    id: 5,
    title: 'Balvenie Networking Event',
    category: 'events',
    video: 'https://youtu.be/k4l22qSuyZ8',
    client: 'Balvenie',
  },
  {
    id: 6,
    title: 'If the world revolves around me',
    category: 'commercials',
    video: 'https://youtu.be/TebtBJPX7mo',
    client: 'OctaFX',
  },
  {
    id: 7,
    title: 'Ready to Choose Financial Freedom?',
    category: 'commercials',
    video: 'https://youtu.be/xmOGaCZH7a8',
    client: 'OctaFx',
  },
  {
    id: 8,
    title: 'Sounds from Vict0ny',
    category: 'music',
    video: 'https://youtu.be/tawp1V7M3i4',
    client: 'Vict0ny',
  },
  {
    id: 9,
    title: 'Chess in Slums Makoko',
    category: 'films',
    video: 'https://youtu.be/scHxpzxmQQw',
    client: 'Chess in Slums',
  },
  {
    id: 10,
    title: 'Travel Beta Ad',
    category: 'commercials',
    video: 'https://youtu.be/tSTGizFwJ6U',
    client: 'TravelBeta',
  },
  {
    id: 11,
    title: 'Travel Beta Spec Ad',
    category: 'commercials',
    image: '/images/portfolio/commercial-3.jpg',
    video: 'https://youtu.be/sKwNMcCHu5Q',
    client: 'TravelBeta',
  },
  {
    id: 12,
    title: 'Balvenie Luxury Wine tasting',
    category: 'events',
    video: 'https://youtu.be/RayzG7M4B_w',
    client: 'Balvenie',
  },
  {
    id: 13,
    title: 'Octa celebrates 11 years',
    category: 'events',
    video: 'https://youtu.be/EI0snblr7q8',
    client: 'OctaFX',
  },
  {
    id: 14,
    title: 'OctaFX Q&A Session',
    category: 'commercials',
    video: 'https://youtu.be/caHYdPG0sCI',
    client: 'OctaFX',
  },
  {
    id: 15,
    title: 'Embrace Equity (IWD)',
    category: 'films',
    video: 'https://youtu.be/9VYTNYg7_30',
    client: 'KVLT',
  },
];

interface PortfolioGalleryProps {
  category?: string;
}

const PortfolioGallery = ({ category }: PortfolioGalleryProps) => {
  // const [selectedProject, setSelectedProject] = useState<number | null>(null);
  // const router = useRouter();
  
  // Filter portfolio items based on category
  const filteredItems = category && category !== 'all'
    ? portfolioItems.filter(item => item.category === category)
    : portfolioItems;
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleProjectClick = (id: number) => {
    // setSelectedProject(id);
    // Here you would typically open a modal or navigate to a project detail page
    // For simplicity, we'll just set the selected project ID for now
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <ProjectCard
            key={item.id}
            project={item}
            onClick={() => handleProjectClick(item.id)}
          />
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;