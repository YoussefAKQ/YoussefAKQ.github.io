import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experiences = [
    {
      date: "2025 - PRESENT",
      title: "Junior Developer Intern at Atisa",
      description: "Worked on various projects involving webdevelopment, software development, and database management. Gained experience in collaborating with a team and using version control systems.",
      skills: ["React", "Python AI Oriented", "JavaScript", "TypeScript", "Flutter", "TailwindCSS", "PHP", "HTML", "CSS", "NodeJS", "MySQL"]
    }
  ];

  return (
    <section id='experience' className='space-y-6 mt-32'>
      <div className='flex flex-col gap-5 space-y-6'>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
