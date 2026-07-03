import ProjectItem from './ProjectItem';
import Reveal from './Reveal';

const Projects = () => {
  const projects = [
    {
      title: "SmartCart",
      description: "Application in React Native for managing purchases and recipes.",
      image: "/smartcart.png",
      skills: ["React Native", "JavaScript", "CSS"],
      link: "https://github.com/YoussefAKQ/SmartCart"
    }
  ];

  return (
    <section id='projects' className='pt-24 md:pt-32'>
      <Reveal>
        <h2 className='text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-8'>Projects</h2>
      </Reveal>
      <div className='flex flex-col gap-10'>
        {projects.map((project, index) => (
          <Reveal key={index} delay={index * 100}>
            <ProjectItem {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
