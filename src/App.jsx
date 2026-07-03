import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Reveal from './components/Reveal';
import './App.css';
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

const NAV_SECTIONS = ['about', 'experience', 'projects'];

const SOCIALS = [
  { href: "https://github.com/YoussefAKQ", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/youssef-alexander-khalifa-quispe-622a6b2bb", Icon: FaLinkedin, label: "LinkedIn" },
];

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
      const currentSection = NAV_SECTIONS.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 350;
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

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#242424]/70 border-b border-white/5">
        <nav className="max-w-2xl mx-auto flex items-center justify-between px-6 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white font-bold tracking-widest text-sm bg-transparent border-none cursor-pointer focus:outline-none"
          >
            YK
          </button>
          <div className="flex gap-5 md:gap-8">
            {NAV_SECTIONS.map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-xs tracking-[0.2em] uppercase bg-transparent border-none cursor-pointer focus:outline-none transition-colors duration-300 pb-1
                  ${activeSection === section ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                {section}
                <span className={`absolute left-0 -bottom-0.5 h-[1px] bg-white transition-all duration-300 ${activeSection === section ? 'w-full' : 'w-0'}`} />
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-6 pb-24">
        <section className="pt-20 md:pt-28 hero-enter">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Youssef Khalifa</h1>
          <h3 className="text-base md:text-lg font-medium text-gray-400 mt-3 tracking-wide">AI Engineer · Software Developer</h3>
          <p className="mt-6 max-w-md text-gray-400 leading-relaxed">
            I build AI-powered products — RAG systems, LLM tooling and fullstack apps — from Madrid, Spain.
          </p>
          <div className="flex gap-5 mt-8">
            {SOCIALS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </section>

        <section id='about' className='pt-24 md:pt-32'>
          <Reveal>
            <h2 className='text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-8'>About</h2>
          </Reveal>
          <Reveal>
            <div className='space-y-5 text-gray-400 text-sm md:text-base leading-relaxed'>
              <p>I'm a <span className='text-white'>software developer</span> based in Madrid, Spain, graduated in Multiplatform Application Development.</p>

              <p>I'm currently working as a <span className='text-white'>Junior AI Engineer at Arktic</span>, doing R&D on <span className='text-white'>RAG architectures with vector databases</span> and prototyping with the <span className='text-white'>Model Context Protocol (MCP)</span> and custom skills for Claude within the Anthropic ecosystem.</p>

              <p>Before that, at Atisa I built <span className='text-white'>AI-powered fullstack applications</span> with FastAPI, React and the OpenAI API — from invoice extraction with OCR to an internal LLM playground and a corporate helpdesk supporting 300+ employees.</p>

              <p>My toolbox includes <span className='text-white'>Python (FastAPI), React, Tailwind, MySQL, ChromaDB, HuggingFace and Git</span>, and I'm constantly exploring new AI tools and frameworks.</p>

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
                </span>
              </p>
            </div>
          </Reveal>
        </section>

        <Experience />
        <Projects />

        <footer className="pt-24 md:pt-32 text-center">
          <p className="text-gray-600 text-xs tracking-widest uppercase">Built with React & Tailwind — Youssef Khalifa</p>
        </footer>
      </main>
    </>
  );
}

export default App;
