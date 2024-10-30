import { useEffect, useRef } from 'react';
import { ProjectData } from '../data/data';
import ProjectCard from './ProjectCard';
import Lenis from '@studio-freight/lenis';
import ExpandableCardDemo from './ExpandableProjectCard';

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
      <div id="pic" className='items-center justify-center'>
        {/* <img src="src\data\afterIntro.bmp" alt=""  /> */}
      </div>
      <h1 className="ml-16 font text-[60px] text-white">
        Some of the Projects 
      </h1>
      <h1 className="ml-16 -mt-6 mb-32 font text-[60px] text-white">I've worked on</h1>
      <ExpandableCardDemo />
    </div>
  );
};

export default Projects;