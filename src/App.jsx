import { useState } from 'react'
import './App.css'
import AnimatedBrandName from './Components/AnimatedBrandName';

function App() {
  const menuItems = ['Intro' , 'Projects' , 'Value' , 'Background','About', 'Contact'];
  const topMenuItems = ['For anyone', 'Recruiters', 'Monkey Typers', 'Product Designers', 'Product Managers', 'Designers']

  const content = {
    'For anyone': {
      description: "Hello there, I’m a .  designer who cares . about making .  beautiful things that .  help people."
    },
    'Recruiters': {
      description: "I’m a product designer with . 15 years of experience. across brand and product,.  at companies large and. small I’m  actively looking. for a new role."
    },
    'Monkey Typers': {
      description: "I've led design teams at startups and big tech companies, helping to ship products that millions of people use every day."
    },
    'Product Designers': {
      description: "I've worked on complex products and design systems, always with a focus on creating intuitive and delightful user experiences."
    },
    'Product Managers': {
      description: "I work closely with product managers to ensure that we're building the right things for our users and our business."
    },
    'Designers': {
      description: "I have a deep understanding of front-end technologies and work closely with engineering teams to ensure smooth handoffs and implementation."
    }
  }

  const [activeTopMenu , setActiveTopMenu] = useState('For anyone');


  return (
    <>
      <div className="min-h-screen">
        <div id="grid-container" className='grid grid-cols-1 md:grid-cols-[200px,1fr] grid-rows-[auto,1fr] h-screen bg-slate-800 '>

          <header className=' col-span-2 h-24 text-3xl border-2 border-red-500 font-bold text-cyan-400'>

            <div className='flex flex-wrap px-4 py-9 border-2  border-green-400'>
              <AnimatedBrandName firstName={'Atharv'} lastName={' Singh'}/>
            </div>

          </header>

          <aside className=' inset-y-0 left-0 font-16px mt-6 border-2 border-red-500 font-bold text-black'>
            <div>
              Navigation
              <ul className="mt-4 px-4 space-y-2">
                {menuItems.map((item) => <div className='border-2 border-green-400 text-white'key={item}>{item}</div>)}
              </ul>
            </div>
          </aside>
          <main className=" inset-y-0 right-0 mt-6 border-2 border-red-500 font-bold text-white">
            <div id="intro-text" className='flex flex-wrap mt-10 mx-16 border-2 border-green-400'>
            {topMenuItems.map((item) => (
              <div
                key={item}
                className={`cursor-pointer mr-8 mb-4 font-16px ${activeTopMenu === item ? 'font-bold' : 'opacity-50'}`}
                onClick={() => setActiveTopMenu(item)}
              >
                {item}
              </div>
            ))}
            </div>
            <div id="content" className='flex-grow text-[70px] mx-16 border-2 border-green-400'>
              {content[activeTopMenu].description.split('. ').map((text,index) => (
                <h1 key={index} className='-mb-10'>{text.trim()}</h1>
              ))}
              </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
