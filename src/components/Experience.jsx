import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experiences = [
    {
      date: "2025 - PRESENT",
      title: "Intern at Atisa",
      description: "Worked on various projects involving web development and design.",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id='experience' className='space-y-4 mt-28'>
      <div className='flex flex-col gap-4 space-y-4'>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
