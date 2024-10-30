import { h4, p } from "framer-motion/client";

export const ProjectData = [
    {
        title:"ParaLang",
        description:"A paralinguistic prompting system that detects human emotions through vocal cues like pitch and tone. It processes audio, extracts key features, and applies machine learning for real-time emotion classification, ideal for enhancing virtual assistants and customer support. ",
        time:"Dec 2022 - Apr 2023",
        website:"aaaaaaa",
        github:"aaaaaaaaa",
        tags:['React','Node.js','Express','TailwindCSS','MongoDB','Docker','NLP','Huggingface','OpenAI']

    },
    {
        title:"portfolio",
        description:"A paralinguistic prompting system that detects human emotions through vocal cues like pitch and tone. It processes audio, extracts key features, and applies machine learning for real-time emotion classification, ideal for enhancing virtual assistants and customer support. ",
        time:"2022-2023",
        website:"aaaaaaaaa",
        github:"aaaaaaaaa",
        tags:['React','Node.js','Express','TailwindCSS','MongoDB','Docker','NLP','Huggingface','OpenAI']

    },
    {
        title:"EveSpark",
        description:"A paralinguistic prompting system that detects human emotions through vocal cues like pitch and tone. It processes audio, extracts key features, and applies machine learning for real-time emotion classification, ideal for enhancing virtual assistants and customer support. ",
        time:"2022-2023",
        website:"aaaaaaaaa",
        github:"aaaaaaaaa",
        tags:['React','Node.js','Express','TailwindCSS','MongoDB','Docker','NLP','Huggingface','OpenAI']

    },
    {
        title:"Coursify",
        description:"A course generator that creates personalized learning paths based on user preferences and goals. It curates courses, suggests resources, and structures step-by-step plans, helping users efficiently achieve their learning objectives in various fields. ",
        time:"2022-2023",
        website:"aaaaaaaaa",
        github:"aaaaaaaaa",
        tags:['React','Node.js','Express','TailwindCSS','MongoDB','Docker','NLP','Huggingface','OpenAI']

    }
]

export const cards = [
    {
      description: "Dec 2022 - Apr 2023",
      title: "ParaLang",
      src: "https://static.vecteezy.com/system/resources/previews/013/709/851/original/outline-brain-design-silhouette-logo-design-hand-drawn-minimalist-brain-vector.jpg",
      ctaText_before: "Website",
      ctaText_after: "Github",
      ctaLink_before: "https://ui.aceternity.com/templates",
      ctaLink_after: "https://ui.aceternity.com/templates",
      content: () => (
        <p>
          A paralinguistic prompting system that detects human emotions through vocal cues like pitch and tone.
          It processes audio, extracts key features, and applies machine learning for real-time emotion classification, 
          ideal for enhancing virtual assistants and customer support. <br /> <br />
          
        </p>
      ),
    },
    {
      description: "Dec 2022 - Apr 2023",
      title: "EveSpark",
      src: "https://static.vecteezy.com/system/resources/previews/015/150/683/original/head-with-brain-icon-design-for-artificial-intelligence-technology-theme-png.png",
      ctaText_before: "Website",

      ctaText_after: "Github",
      ctaLink_before: "https://ui.aceternity.com/templates",
      ctaLink_after: "https://ui.aceternity.com/templates",
      content: () => (
        <p>
          A paralinguistic prompting system that detects human emotions through vocal cues like pitch and tone.
          It processes audio, extracts key features, and applies machine learning for real-time emotion classification,
          ideal for enhancing virtual assistants and customer support.<br /> <br />
        </p>
      ),
    },
    {
      description: "Dec 2022 - Apr 2023",
      title: "Portfolio",
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText_before: "Website",

      ctaText_after: "Github",
      ctaLink_before: "https://ui.aceternity.com/templates",
      ctaLink_after: "https://ui.aceternity.com/templates",

      content: () => (
        <p>
          A paralinguistic prompting system that detects human emotions through vocal cues like pitch and tone.
          It processes audio, extracts key features, and applies machine learning for real-time emotion classification,
          ideal for enhancing virtual assistants and customer support. <br /> <br />
        </p>
      ),
    },
    {
      description: "Dec 2022 - Apr 2023",
      title: "Course Generator",
      src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
      ctaText_before: "Website",

      ctaText_after: "Github",
      ctaLink_before: "https://ui.aceternity.com/templates",
      ctaLink_after: "https://ui.aceternity.com/templates",

      content: () => (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br />
        </p>
      ),
    },
  ];

export const Education = [
  {
    // logo_link:"https://college4u.in/wp-content/uploads/2019/07/1200px-Vellore_Institute_of_Technology_seal_2017.svg_-830x876.png",
    logo_link:"https://images.shiksha.com/mediadata/images/1631881854phpmNdZnG.jpeg",
    institution_name:<h4>VIT</h4>,
    degree:<h1>BTech in Computer Science and Engineering </h1>,
    time:"Now",
    location:"India",
  },
]

export const AboutMe = {
    content: () => (
      <p>I'm a 20-year-old pre-final year Computer Science student at VIT, focused on backend development with a strong foundation in C++ and web technologies. With experience across front-end essentials and backend frameworks like Node.js and Express, I’ve built practical applications, including an event management system called EveSpark for my college.
        <br />
        <br />
        <br />

    Currently, I’m actively seeking opportunities in full-stack and backend roles to further apply and grow my skills. Beyond coding, I have a keen interest in finance and stock analysis, always looking to learn something new. Up next on my learning path is Go, as I continue expanding my backend expertise
    </p>
    ),
    
  }

export const SocialHandles = [
  {
    id: 1,
    name: "Gmail",
    designation: "singhatharv1919@gmail.com",
    image:
      "https://img.icons8.com/clouds/100/gmail-new.png",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];