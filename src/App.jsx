import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';
import { FaXTwitter } from 'react-icons/fa6';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <div className="flex gap-0 mt-20 mb-20">
        <div className="w-1/2">
          <div className="sticky top-20 h-[calc(100vh-10rem)] flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-bold">Youssef Khalifa</h1>
              <h3 className="text-xl font-semibold mt-2">Junior Developer</h3>
              <p className="mt-6 max-w-[300px]">I enjoy building websites and applications and learning new technologies. </p>
              <div className="space-y-4 flex flex-col mt-14">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-white hover:text-gray-400 text-left focus:outline-none border-none bg-transparent cursor-pointer">
                  ABOUT
                </button>
                <button 
                  onClick={() => scrollToSection('experience')} 
                  className="text-white hover:text-gray-400 text-left focus:outline-none border-none bg-transparent cursor-pointer">
                  EXPERIENCE
                </button>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-white hover:text-gray-400 text-left focus:outline-none border-none bg-transparent cursor-pointer">
                  PROJECTS
                </button>
              </div>
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com/YoussefAKQ" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/YoussefAKQ" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/YoussefAKQ" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/YoussefAKQ" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-w-[600px]">
          <section id='about' className='space-y-5 text-gray-400 text-1xl'>
            <p>I'm 20 years old and a <span className='text-white'>software development student</span>. Currently, I'm in my second year of an advanced degree in Application Development in Madrid, Spain.</p>
            <p>In my first year, I studied <span className='text-white'>SQL with MySQL, Java in Eclipse, Python in IDLE, Linux with VirtualBox, HTML, CSS, XML, and gained exposure to Oracle DB</span>, among other topics. In my second year, I’ve studied <span className='text-white'>Visual Basic .NET, Java in Android Studio, Data Access with Java, Odoo on AWS, Python, video game development with libGDX in Java</span>, and much more.</p>
            <p>Additionally, I’ve self-studied <span className='text-white'>JavaScript, React Native, Tailwind, Git, and Next.js</span> to further expand my skill set.</p>
            <p>Currently, I'm doing an internship as a Junior Software Developer, where I’m studying, training, and working with <span className='text-white'>PHP CodeIgniter 4, React, Tailwind, Python AI Oriented (RAG, ChromaDB, Chatbot, OpenAI API)</span>.</p>
          </section>
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
