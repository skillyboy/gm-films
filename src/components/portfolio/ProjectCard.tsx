'use client';

import VideoPlayer from '@/components/common/VideoPlayer';

interface Project {
  id: number;
  title: string;
  category: string;
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
    <div className="surface-card group cursor-pointer">
      <div className="aspect-video bg-gray-800 overflow-hidden relative">
        <VideoPlayer url={project.video} />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-accent">{project.title}</h3>
          <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent-soft)] text-accent border border-[var(--surface-border)] whitespace-nowrap">
            {getCategoryLabel(project.category)}
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-2">{project.client}</p>
      </div>
    </div>
  );
};

export default ProjectCard;