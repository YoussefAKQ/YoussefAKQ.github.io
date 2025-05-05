import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="flex gap-10 mt-20">
        <div className="w-1/2">
          <div className="">
            <h1 className="text-4xl font-bold">Youssef Khalifa</h1>
            <h3 className="text-xl font-semibold mt-2">Junior Developer</h3>
            <p className="mt-6">I build websites and applications.</p>
            <div className="space-y-4 flex flex-col mt-8">
              <a href="" className="text-blue-500 hover:underline">About</a>
              <a href="" className="text-blue-500 hover:underline">Experience</a>
              <a href="" className="text-blue-500 hover:underline">Projects</a>
            </div>
            <div className="flex gap-4 mt-8 absolute bottom-20">
              <a href="" aria-label="Github"><img src="path/to/github" alt="Github" className="h-8 w-8" /></a>
              <a href="" aria-label="LinkedIn"><img src="path/to/linkedin" alt="LinkedIn" className="h-8 w-8" /></a>
              <a href="" aria-label="Twitter"><img src="path/to/twitter" alt="Twitter" className="h-8 w-8" /></a>
              <a href="" aria-label="Instagram"><img src="path/to/instagram" alt="Instagram" className="h-8 w-8" /></a>
            </div>
          </div>
        </div>

        <div className="w-1/2 space-y-4">
          <p>I'm a developer passionate about creating user-friendly experiences. Currently, I'm in an internship and looking for new opportunities.</p>
          <p>Currently open for new challenges.</p>
        </div>
      </div>
    </>
  );
}

export default App;
