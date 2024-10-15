import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';

const ProjectCard = ({ title, description, time, website, github, tags, index, totalCards }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="mb-[48px] ml-[180px] mr-[180px] pl-[20px] pr-[20px] text-white"
      style={{
        y,
        opacity,
        zIndex: totalCards - index,
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        padding: '20px',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl my-1">{description}</p>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, tagIndex) => (
          <button key={tagIndex} className="bg-blue-300 font-semibold text-black px-3 py-1 rounded text-[10px]">
            {tag}
          </button>
        ))}
      </div>
      <div className="relative">
        <div className="absolute -top-[140px] right-0">
          <p>{time}</p>
        </div>
      </div>
      <div className="flex flex-wrap m-1 gap-2">
        <a
          href={website}
          className="flex items-center text-[12px] bg-white text-black -ml-1 px-3 py-2 rounded hover:bg-gray-200 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>🌐</span> Website
        </a>
        <a
          href={github}
          className="flex items-center text-[12px] bg-white text-black -ml-1 px-3 py-2 rounded hover:bg-gray-200 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>🌐</span> Github
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;