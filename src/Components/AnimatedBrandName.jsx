import { useState } from 'react';

const AnimatedBrandName = ({ firstName, lastName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const fullName = `${firstName} ${lastName}`;

  return (
    <header className="">
      <div className="max-w-7xl mx-auto">
        <div
          className="inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="text-2xl ">
            {fullName.split('').map((char, index) => (
              <span

                key={index}
                className={` inline-block transition-all duration-300 ease-in-out
                  ${index === 0 ? '' : (isHovered ? 'opacity-100' : 'opacity-0')}
                  ${index === 0 ? 'text-white' : 'text-white'}`}
                style={{
                  transitionDelay: isHovered
                    ? `${index * 0.02}s`
                    : `${(fullName.length - index - 1) * 0.02}s`,
                }}
              >
                {char === ' ' ? '\u00A0' : char} {/* Adds a non-breaking space */}
              </span>
            ))}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default AnimatedBrandName;