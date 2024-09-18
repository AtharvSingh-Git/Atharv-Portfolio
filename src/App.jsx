import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Nav from './Components/Nav';
import IntroText from './Components/IntroText';

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
      <div className="min-h-screen font-title">
        <div id="grid-container" className='grid grid-cols-1 md:grid-cols-[200px,1fr] grid-rows-[auto,1fr] h-screen bg-black '>
          <Header/>

          <Nav menuItems={menuItems}/>

          <IntroText activeTopMenu={activeTopMenu} setActiveTopMenu={setActiveTopMenu} topMenuItems={topMenuItems} content={content}/>


        </div>
      </div>
    </>
  )
}

export default App
