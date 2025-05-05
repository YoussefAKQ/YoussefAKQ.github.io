import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="flex gap-10 mt-20 mb-20">
        <div className="w-1/2">
          <div className="sticky top-20 h-[calc(100vh-10rem)] flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-bold">Youssef Khalifa</h1>
              <h3 className="text-xl font-semibold mt-2">Junior Developer</h3>
              <p className="mt-6 max-w-[300px]">I enjoy building websites and applications and learning new technologies. </p>
              <div className="space-y-4 flex flex-col mt-8">
                <a href="#about" className="text-blue-500 hover:underline">About</a>
                <a href="#experience" className="text-blue-500 hover:underline">Experience</a>
                <a href="#projects" className="text-blue-500 hover:underline">Projects</a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="" aria-label="Github"><img src="path/to/github" alt="Github" className="h-8 w-8" /></a>
              <a href="" aria-label="LinkedIn"><img src="path/to/linkedin" alt="LinkedIn" className="h-8 w-8" /></a>
              <a href="" aria-label="Twitter"><img src="path/to/twitter" alt="Twitter" className="h-8 w-8" /></a>
              <a href="" aria-label="Instagram"><img src="path/to/instagram" alt="Instagram" className="h-8 w-8" /></a>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-w-[500px]">
        <section id='about' className='space-y-4'>
            <p>I'm a developer passionate about creating user-friendly experiences. Currently, I'm in an internship and looking for new opportunities.</p>
            <p>Currently open for new challenges.</p>
          </section>
          <section id='experience' className='space-y-4 mt-28'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-row gap-4 justify-between'>
                <p>2025 - PRESENT</p>
                <div className='max-w-[300px] space-y-2'>
                  <p className='text-2xl font-bold'>Intern at Atisa</p>
                  <p className=''>Worked on various projects involving web development and design.</p>
                  <div className='flex flex-row gap-2 mt-2'>
                    <p className='text-sm text-gray-500'>HTML</p>
                    <p className='text-sm text-gray-500'>CSS</p>
                    <p className='text-sm text-gray-500'>JavaScript</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='projects' className='space-y-4'>
            
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
