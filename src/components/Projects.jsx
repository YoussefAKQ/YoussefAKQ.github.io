import ProjectItem from './ProjectItem';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Personal",
      description: "Mi sitio web personal construido con React y Tailwind CSS",
      image: "/src/assets/prueba1.png",
      skills: ["React", "Tailwind", "Vite"],
      link: "https://github.com/yourusername/portfolio"
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
