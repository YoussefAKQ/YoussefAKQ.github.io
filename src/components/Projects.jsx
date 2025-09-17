import ProjectItem from './ProjectItem';

const Projects = () => {
  const projects = [
    
      {
        title: "Bamp Mobile App",
        description: "I developed Bamp Mobile, a mobile application for sending and managing school reports.",
        image: "/bamp.png",
        skills: ["React Native", "JavaScript", "TailwindCSS"],
        link: "https://github.com/YoussefAKQ/bamp-mobile"
      },
    {
        title: "Bamp",
        description: "I contributed to the development of Bamp, a web application for sending and managing school reports.",
        image: "/bamp.png",
        skills: ["NextJS", "JavaScript", "TailwindCSS"],
        link: "https://bampresearch.com"
      },
      {
        title: "SmartCart",
        description: "Application in React Native for managing purchases and recipes.",  
        image: "/smartcart.png",
        skills: ["React Native", "JavaScript", "CSS"],
        link: "https://github.com/YoussefAKQ/SmartCart"
      }
  ];

  return (
    <section id='projects' className='space-y-10 mt-20 md:mt-32'>
      <div className='grid grid-cols-1 gap-8'>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
