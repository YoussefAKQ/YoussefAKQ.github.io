import ExperienceItem from './ExperienceItem';

const Experience = () => {
  const experiences = [
        {
      date: "09/2025 - Present",
      title: "Developer at Atisa",
      description:
        "I’m currently working as a Developer at Atisa, developing innovative solutions and improving processes through automation and modern tools.",
      skills: [
        "React",
        "Python",
        "JavaScript",
        "TypeScript",
        "Tailwind",
        "HTML",
        "CSS",
        "NodeJS",
        "MySQL",
        "Git",
        "GitHub",
        "PostgreSQL",
        "FastAPI",
        "Docker"
      ]
    },
            {
      date: "03/2025 - 06/2025",
      title: "Intenrship Developer at Atisa",
      description:
        "As an intern at Atisa, I gained experience in Python, RAG, ChromaDB, AI projects, Supabase, Docker, and had some exposure to PHP.",
      skills: [
        "React",
        "Python",
        "JavaScript",
        "Tailwind",
        "HTML",
        "CSS",
        "MySQL",
        "Git",
        "GitHub",
        "Supabase",
        "Docker"
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
