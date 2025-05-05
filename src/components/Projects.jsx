import ProjectItem from './ProjectItem';

const Projects = () => {
  const projects = [
    {
      title: "SmartCart",
      description: "Application in React Native for managing purchases and recipes.",  
      image: "/src/assets/smartcart.png",
      skills: ["React Native", "JavaScript", "CSS"],
      link: "https://github.com/YoussefAKQ/SmartCart"
    },
    {
        title: "Bamp",
        description: "I contributed to the development of Bamp, a web application for sending and managing school reports.",
        image: "/src/assets/bamp.png",
        skills: ["NextJS", "JavaScript", "TailwindCSS"],
        link: "https://bampresearch.com"
      }
  ];

  return (
    <section id='projects' className='space-y-8 mt-28'>
      <div className='grid grid-cols-1 gap-6'>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
