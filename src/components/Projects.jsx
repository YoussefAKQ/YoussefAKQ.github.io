import ProjectItem from './ProjectItem';

const Projects = () => {
  const projects = [
    
      {
        title: "Bamp Mobile App",
        description: "I'm currently working on the mobile version of Bamp, a web application for sending and managing school reports.",
        image: "/src/assets/bampmobile.png",
        skills: ["React Native", "JavaScript", "TailwindCSS"],
        link: "https://bampresearch.com"
      },
      {
        title: "Chatbot",
        description: "A chatbot application for enhancing user interaction.",
        image: "/src/assets/chatbot.png",
        skills: ["React", "Node.js", "AI"],
        link: "https://github.com/YoussefAKQ/Chatbot"
    },
    {
        title: "Bamp",
        description: "I contributed to the development of Bamp, a web application for sending and managing school reports.",
        image: "/src/assets/bamp.png",
        skills: ["NextJS", "JavaScript", "TailwindCSS"],
        link: "https://bampresearch.com"
      },
      {
        title: "SmartCart",
        description: "Application in React Native for managing purchases and recipes.",  
        image: "/src/assets/smartcart.png",
        skills: ["React Native", "JavaScript", "CSS"],
        link: "https://github.com/YoussefAKQ/SmartCart"
      }
  ];

  return (
    <section id='projects' className='space-y-10 mt-32'>
      <div className='grid grid-cols-1 gap-8'>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
