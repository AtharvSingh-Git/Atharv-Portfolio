import React from "react";


const Value = () => {
  const Values = {
    description:"Useful. Reliable. Scalable. Well made"
  }
  return (
    <div id="main-outer-border" className="min-h-screen  mt-32 pl-[200px]  grid grid-cols-2 grid-rows-2 gap-2 ">
      <div className=" pl-12 pb-12 flex-grow items-center justify-center text-[70px] text-white">
      {Values.description.split('. ').map((text, index) => (
          <h1 key={index} className='font-title pl-4 -mb-9 text-white'>
            {text.trim()}
          </h1>
        ))}

      </div>
      <div className=" flex items-center justify-center text-3xl text-white"></div>
      <div className="flex items-center justify-center text-3xl text-white"></div>
      <div className=" flex items-center justify-center text-white">
      <p className="text-[16px]">These are my <strong>core development</strong> values, and I strive to bring them into every project I work on. As a third-year Computer Science student, I've learned a lot from building projects from the ground up, and this hands-on experience has ignited a drive in me to leave no stone unturned. I’m passionate about crafting efficient, reliable, and scalable solutions that meet real needs, blending functionality with thoughtful design. Working with a team inspires me—I believe that <strong>collaboration leads to outcomes far greater than what we can achieve individually</strong>. I like to think big, work quickly but thoughtfully, and always keep an eye on the bigger picture. I’m constantly growing, improving, and pushing myself to execute at the highest level.</p>
      </div>
    </div>
  )
}

export default Value 