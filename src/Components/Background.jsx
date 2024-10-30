import React, { useState } from 'react';
import { Education } from '../data/data';
import { ChevronRight } from 'lucide-react';

const Background = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (!isExpanded) {
            setIsHovered(false);
        }
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div id="main-outer-border" className=" flex flex-col  mt-32 pl-[265px] text-white ">
                <div id="title" className='text-5xl mb-8 '>Education</div>
                <div id="logo" className="flex items-center justify-start h-32 w-32 ">
                    <div id="logo-image" className="py-4">
                        <img src='src\data\vit.jpeg' alt="" width={96} height={96} />
                    </div>
                </div>
                <div 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div id="institution-name" className="py-4 text-2xl ">
                        {Education[0].institution_name}
                    </div>
                    <div id="Degree" className="py-5 ">
                        <div className="flex items-center text-4xl">
                            {Education[0].degree}
                            {(isHovered || isExpanded) && (
                                <button
                                    onClick={toggleExpand}
                                    className="ml-4 transition-transform duration-300 focus:outline-none"
                                >
                                    <ChevronRight 
                                        className={`w-6 h-6 transform ${isExpanded ? 'rotate-90' : ''}`}
                                    />
                                </button>
                            )}
                        </div>
                        {isExpanded && (
                            <div className="mt-4 py-2 px-4 text-gray-300 text-20px rounded-md transition-all duration-300 ease-in-out">
                                <li type="bullet">Current CGPA 8.5</li>
                                
                            </div>
                        )}
                    </div>
                    <div id="when&where" className="flex flex-rows gap-4 py-2 ">
                        <div id="time" className="flex ">
                            {Education[0].time}
                        </div>
                        <div id="location" className="flex ">
                            {Education[0].location}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Background;