import { useEffect, useRef } from 'react';
import { ProjectData } from '../data/data';
import ProjectCard from './ProjectCard';
import Lenis from '@studio-freight/lenis';

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pl-[200px] border-2 border-red-500 text-white" ref={containerRef}>
      <h1 className="ml-16 mb-32 font text-[60px] text-white">
        Some of the Projects I've worked on
      </h1>
      <div className="relative">
        {ProjectData.map((project, i) => (
          <ProjectCard
            key={`p_${i}`}
            title={project.title}
            description={project.description}
            time={project.time}
            website={project.website}
            github={project.github}
            tags={project.tags}
            index={i}
            totalCards={ProjectData.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;