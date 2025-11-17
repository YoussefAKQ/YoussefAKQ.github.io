import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';
import { FaXTwitter } from 'react-icons/fa6';
import { Analytics } from "@vercel/analytics/react"

function HoverWord({ word, imgSrc, alt }) {
  const [hover, setHover] = useState(false);
  const [cursorImg, setCursorImg] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 104;
      canvas.height = 72;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 104, 72);
      setCursorImg(canvas.toDataURL());
    };
  }, [imgSrc]);

  return (
    <span
      className="relative inline-block mx-1 group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: hover && cursorImg ? `url(${cursorImg}) 32 -86, auto` : 'inherit',
      }}
    >
<span
  className={`
    relative transition-all duration-500
    ${hover
      ? 'bg-gradient-to-r from-purple-400 via-blue-500 to-gray-500 bg-clip-text text-transparent'
      : 'text-white'}
  `}
>
  {word}
</span>
    </span>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Analytics/>
      <div 
        className="cursor-light" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }} 
      />
      <div className="min-w-[320px] max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-0 mt-10 md:mt-20 mb-10 md:mb-20 px-6 md:px-4">
        <div className="w-full md:w-1/2">
          <div className="md:sticky md:top-20 md:h-[calc(100vh-10rem)] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Youssef Khalifa</h1>
              <h3 className="text-lg md:text-xl font-semibold mt-2">Junior Developer</h3>
              <p className="mt-4 md:mt-6 max-w-[300px] text-gray-400">I’m passionate mainly about backend development and AI projects, but I also enjoy front-end development.</p>
              <div className="hidden md:flex md:flex-col space-y-3 md:space-y-4 mt-8 md:mt-14">
                <div className="flex items-center gap-2">
                  <div className={`h-[1px] bg-white transition-all duration-300 ${activeSection === 'about' ? 'w-8' : 'w-4'}`} />
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className={`${activeSection === 'about' ? 'text-white' : 'text-gray-400'} hover:text-white text-left focus:outline-none border-none bg-transparent cursor-pointer font-bold transition-colors`}>
                    ABOUT
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-[1px] bg-white transition-all duration-300 ${activeSection === 'experience' ? 'w-8' : 'w-4'}`} />
                  <button 
                    onClick={() => scrollToSection('experience')} 
                    className={`${activeSection === 'experience' ? 'text-white' : 'text-gray-400'} hover:text-white text-left focus:outline-none border-none bg-transparent cursor-pointer font-bold transition-colors`}>
                    EXPERIENCE
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-[1px] bg-white transition-all duration-300 ${activeSection === 'projects' ? 'w-8' : 'w-4'}`} />
                  <button 
                    onClick={() => scrollToSection('projects')} 
                    className={`${activeSection === 'projects' ? 'text-white' : 'text-gray-400'} hover:text-white text-left focus:outline-none border-none bg-transparent cursor-pointer font-bold transition-colors`}>
                    PROJECTS
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 mt-8 md:mt-0">
              <a href="https://github.com/YoussefAKQ" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white">
                <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/youssef-alexander-khalifa-quispe-622a6b2bb" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://twitter.com/YoussefAKQ" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaXTwitter className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://instagram.com/YoussefAKQ" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:max-w-[600px]">
          <section id='about' className='space-y-4 md:space-y-6 text-gray-400 text-sm md:text-base'>
            <p>I'm a 21-year-old <span className='text-white'>software developer</span> based in Madrid, Spain, graduated in Multiplatform Application Development.</p>

            <p>During my studies, I worked with technologies such as <span className='text-white'>SQL with MySQL, Java in Eclipse, Python in IDLE, Linux with VirtualBox, HTML, CSS, XML, and Oracle DB</span>. Later, I expanded my experience with <span className='text-white'>Visual Basic .NET, Java for Android Studio, data access with Java, Odoo on AWS, Python, and game development using libGDX</span>.</p>

            <p>In addition to my academic background, I've self-taught <span className='text-white'>JavaScript, React Native, Tailwind, Git, and Next.js</span> to strengthen and broaden my skill set.</p>

            <p>I'm currently working as a <span className='text-white'>Junior Software Developer</span> at Atisa, where I contribute to projects using mainly Python and others like<span className='text-white'>PHP CodeIgniter 4, React, JavaScript, Tailwind, and Python with AI-focused tools (RAG, ChromaDB, Chatbots, OpenAI API, Ollama)</span>, among others.</p>

            <p>In my free time, I enjoy playing <span className='text-white no-underline'>
                <HoverWord
                  word="video games"
                  imgSrc="/eftlogo4.png"
                  alt="EFT"
                />
              </span> or staying active through <span className='text-white no-underline'>
                <HoverWord
                  word="sports."
                  imgSrc="/jiujitsulogoBLANCO.png"
                  alt="Jiu Jitsu"
                />
              </span> and constantly improving my programming skills.</p>
          </section>
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
