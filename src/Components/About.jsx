import React from 'react'
import { AboutMe } from '../data/data'
const About = () => {

    return (
        <>
            <div id="main-outer-border" className="2 mt-32 pl-[200px] border-2 border-green-400 grid grid-cols-2 gap-2">
                <div className="grid  text-white items-center justify-center">
                    <div id="pic" className='items-center justify-center px-4 '>
                        {/* <img src="src\data\20240808_060702.bmp" alt=""  /> */}
                    </div>
                </div>
                <div className="grid  justify-center  text-white ">
                    <p className='pb-24 '>{AboutMe.content()}</p>

                </div>

            </div>
        </>
    )
}

export default About