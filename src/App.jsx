import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';
import { FaXTwitter } from 'react-icons/fa6';

function HoverWord({ word, imgSrc, alt }) {
  const [hover, setHover] = useState(false);
  const [cursorImg, setCursorImg] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 78;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 74, 64);
      setCursorImg(canvas.toDataURL());
    };
  }, [imgSrc]);

  return (
    <span
      className="relative inline-block mx-1 group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: hover && cursorImg ? `url(${cursorImg}) 32 -64, auto` : 'inherit',
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
              <p className="mt-4 md:mt-6 max-w-[300px] text-gray-400">I enjoy building websites, applications and learning new technologies. </p>
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
              <a href="https://linkedin.com/in/YoussefAKQ" target="_blank" rel="noopener noreferrer"
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
            <p>I'm 20 years old and a <span className='text-white'>software development student</span>. Currently, I'm in my second year of an advanced degree in Application Development in Madrid, Spain.</p>
            <p>In my first year, I studied <span className='text-white'>SQL with MySQL, Java in Eclipse, Python in IDLE, Linux with VirtualBox, HTML, CSS, XML, and gained exposure to Oracle DB</span>, among other topics. In my second year, I've studied <span className='text-white'>Visual Basic .NET, Java in Android Studio, Data Access with Java, Odoo on AWS, Python, video game development with libGDX in Java</span>, and much more.</p>
            <p>Additionally, I've self-studied <span className='text-white'>JavaScript, React Native, Tailwind, Git, and Next.js</span> to further expand my skill set.</p>
            <p>Currently, I'm doing an internship as a Junior Software Developer, where I'm studying, training, and working with <span className='text-white'>PHP CodeIgniter 4, React, Tailwind, Python AI Oriented (RAG, ChromaDB, Chatbot, OpenAI API)</span>.</p>
            <p>In my free time, I enjoy playing 
              <span className='text-white no-underline'>
                <HoverWord
                  word="video games"
                  imgSrc="/src/assets/eftlogo4.png"
                  alt="EFT"
                  className="no-underline"
                />
              </span>or staying active through 
              <span className='text-white no-underline'>
                <HoverWord
                  word="sports."
                  imgSrc="/src/assets/jiujitsulogoblanco.png"
                  alt="Jiu Jitsu"
                  className="no-underline"
                />
              </span>
            </p>
            </section>
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
