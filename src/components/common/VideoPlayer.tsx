'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  url: string;
  autoPlay?: boolean;
}

const VideoPlayer = ({ url, autoPlay = false }: VideoPlayerProps) => {
  const [loading, setLoading] = useState(true);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Extract video ID from YouTube URL
  const getYouTubeId = (youtubeUrl: string) => {
    // Handle multiple YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = youtubeUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  };

  const youtubeId = getYouTubeId(url);
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&rel=0&modestbranding=1`;

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Store reference to current value to avoid the React hooks warning
    const currentRef = playerRef.current;

    if (currentRef) {
      currentRef.addEventListener('load', handleLoad);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-bright)]"></div>
        </div>
      )}
      <iframe
        ref={playerRef}
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;