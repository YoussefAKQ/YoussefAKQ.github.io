import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experiences = [
        {
      date: "March 2025 - Present",
      title: "Junior Developer at Atisa",
      description:
        "I’m currently working as a Junior Developer at Atisa, developing innovative solutions and improving processes through automation and modern tools.",
      skills: [
        "React",
        "Python",
        "JavaScript",
        "TypeScript",
        "Flutter",
        "TailwindCSS",
        "PHP",
        "HTML",
        "CSS",
        "NodeJS",
        "MySQL",
        "Git",
        "GitHub",
        "MariaDB",
        "PostgreSQL",
        "Dart",
        "REST APIs",
      ]
    }
  ];

  return (
    <section id='experience' className='space-y-6 mt-20 md:mt-32'>
      <div className='flex flex-col gap-5 space-y-6'>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
