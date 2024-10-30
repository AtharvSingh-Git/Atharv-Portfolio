import { useState,useRef } from 'react'
import './App.css'
import Header from './Components/Header';
import Nav from './Components/Nav';
import IntroText from './Components/IntroText';
import Projects from './Components/Projects';
import Value from './Components/Value';
import Background from './Components/Background';
import About from './Components/About';
import Contact from './Components/Contact';


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
      description: "Atharv_types here. 296 tests, 3+ hours. well spent (maybe),. and still coming back. for more..Race you?"
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

  /* Adding References for each section */

  const IntroSection = useRef(null);
  const ProjectsSection = useRef(null);
  const ValueSection = useRef(null);
  const BackgroundSection = useRef(null);
  const AboutSection = useRef(null);
  const ContactSection = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    
      <div className="min-h-screen font-title bg-black">
      <Header />
      <div className="flex h-[calc(100vh-6rem)]">
        <Nav 
            menuItems={menuItems}
            scrollToSection = {scrollToSection}
            IntroSection = {IntroSection}
            ProjectsSection = {ProjectsSection}
            ValueSection = {ValueSection}
            BackgroundSection = {BackgroundSection}
            AboutSection = {AboutSection}
            ContactSection = {ContactSection} />
        <main className="flex-1 " ref={IntroSection}>
          <IntroText 
            activeTopMenu={activeTopMenu} 
            setActiveTopMenu={setActiveTopMenu} 
            topMenuItems={topMenuItems} 
            content={content}
          />
        </main>
      </div>
      <div className='flex-1' ref={ProjectsSection}>
        <Projects />
      </div>
      <div className='flex-1' ref={ValueSection}>
        <Value />
      </div>
      <div className='flex-1' ref = {BackgroundSection}>
        <Background />
      </div>
      <div className='flex-1' ref={AboutSection}>
        <About/>
      </div>
      <div className='flex-1' ref={ContactSection}>
        <Contact />
      </div>
    </div>

      
    </>
  )
}

export default App
