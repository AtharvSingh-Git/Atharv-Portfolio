import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import Nav from './Components/Nav';
import IntroText from './Components/IntroText';
import Projects from './Components/Projects';
import Value from './Components/Value';


function App() {
  const menuItems = ['Intro' , 'Projects' , 'Value' , 'Background','About', 'Contact'];
  const topMenuItems = ['For anyone', 'Recruiters', 'Product Managers','Monkey Typers',  'Designers']

  const content = {
    'For anyone': {
      description: "Hello there, I’m a .  developer who's into .  making cool things . that work for . people"
    },
    'Recruiters': {
      /* Whether it’s backend logic or frontend flair, I’ve got the skills to ship solid products. Let’s skip the buzzwords—if you need someone who gets stuff done, I’m ready. */
      description: "Whether it’s backend logic . or frontend flair,. I’ve got the skills to .   ship solid products. Let’s skip the buzzwords;). if you need someone who. gets stuff done,I’m ready."
    },
    'Monkey Typers': {
      description: "I've led design teams at startups and big tech companies, helping to ship products that millions of people use every day."
    },
    'Product Designers': {
      description: "I've worked on complex products and design systems, always with a focus on creating intuitive and delightful user experiences."
    },
    'Product Managers': {
      /* I bring a hands-on approach that hits every detail. */
      description: "I bring a hands-on approach. that hits every detail. I’ll partner closely with . you and turn your . vision 👀into reality.."
    },
    'Designers': {
      /* I crafted (this.project) from the ground up + (this.one) && (this.too). */
      description: "I’m {design-driven}🖌️. and while(I’m ≠ designer) . I know my way around . design tools & can speak . “creatively” with you"
    }
  }

  const [activeTopMenu , setActiveTopMenu] = useState('For anyone');


  return (
    <>
      <div className="min-h-screen font-title bg-black">
      <Header />
      <div className="flex h-[calc(100vh-6rem)]">
        <Nav menuItems={menuItems} />
        <main className="flex-1 ">
          <IntroText 
            activeTopMenu={activeTopMenu} 
            setActiveTopMenu={setActiveTopMenu} 
            topMenuItems={topMenuItems} 
            content={content}
          />
        </main>
      </div>
      <div className='flex-1'>
        <Projects />
      </div>
      <div className='flex-1'>
        <Value />
      </div>
    </div>

      
    </>
  )
}

export default App
