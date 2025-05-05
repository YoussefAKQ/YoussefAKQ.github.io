import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <>
      <div className="flex gap-0 mt-20 mb-20">
        <div className="w-1/2">
          <div className="sticky top-20 h-[calc(100vh-10rem)] flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-bold">Youssef Khalifa</h1>
              <h3 className="text-xl font-semibold mt-2">Junior Developer</h3>
              <p className="mt-6 max-w-[300px]">I enjoy building websites and applications and learning new technologies. </p>
              <div className="space-y-4 flex flex-col mt-8">
                <a href="#about" className="text-blue-500 hover:underline">ABOUT</a>
                <a href="#experience" className="text-blue-500 hover:underline">EXPERIENCE</a>
                <a href="#projects" className="text-blue-500 hover:underline">PROJECTS</a>
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
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/YoussefAKQ" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-w-[600px]">
          <section id='about' className='space-y-4'>
            <p>I'm a developer passionate about creating user-friendly experiences. Currently, I'm in an internship and looking for new opportunities.</p>
            <p>Currently open for new challenges.</p>
          </section>
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
