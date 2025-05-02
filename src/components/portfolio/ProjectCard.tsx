'use client';

import VideoPlayer from '@/components/common/VideoPlayer';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  video: string;
  client: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'commercials':
        return 'Commercial';
      case 'films':
        return 'Film';
      case 'music':
        return 'Music Video';
      case 'events':
        return 'Event';
      default:
        return category;
    }
  };
  
  return (
    <div className="group cursor-pointer overflow-hidden">
      <div className="aspect-video bg-gray-800 overflow-hidden relative">
        <VideoPlayer url={project.video} />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold group-hover:text-[#3A6E71] transition-colors">{project.title}</h3>
          <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300">
            {getCategoryLabel(project.category)}
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">{project.client}</p>
      </div>
    </div>
  );
};

export default ProjectCard;