import ExperienceItem from './ExperienceItem';
import Reveal from './Reveal';

const Experience = () => {
  const experiences = [
    {
      date: "JUN 2026 — PRESENT",
      title: "Junior AI Engineer · Arktic",
      description:
        "R&D on RAG architectures: building proofs of concept with vector databases to optimize search and retrieval over internal documents. Prototyping with the Model Context Protocol (MCP) to connect external data sources and developing custom skills for Claude.",
      skills: [
        "RAG",
        "Vector DBs",
        "MCP",
        "Anthropic API",
        "Claude",
        "Python",
      ]
    },
    {
      date: "SEP 2025 — JUN 2026",
      title: "Software Developer · Atisa",
      description:
        "Built an AI-powered invoice extraction app (FastAPI, React, Tailwind, OpenAI API) with semaphore-based concurrency control to optimize costs and RBAC security. Developed an internal LLM playground with prompt versioning and an analytics dashboard to compare models by latency, tokens and cost. Fullstack development of a corporate helpdesk portal giving technical support to 300+ employees.",
      skills: [
        "Python",
        "FastAPI",
        "React",
        "Tailwind",
        "OpenAI API",
        "MySQL",
        "Docker",
        "Git",
      ]
    },
    {
      date: "MAR 2025 — JUN 2025",
      title: "Software Developer Intern · Atisa",
      description:
        "Designed chatbots with ChromaDB and the OpenAI API, and analyzed the feasibility of local LLMs for chatbots and OCR on legal documents. Built Python scripts to automate the download, processing and AI-driven analysis of collective agreements.",
      skills: [
        "Python",
        "RAG",
        "ChromaDB",
        "OpenAI API",
        "OCR",
        "Supabase",
        "Docker",
      ]
    }
  ];

  return (
    <section id='experience' className='pt-24 md:pt-32'>
      <Reveal>
        <h2 className='text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-8'>Experience</h2>
      </Reveal>
      <div className='flex flex-col gap-10'>
        {experiences.map((experience, index) => (
          <Reveal key={index} delay={index * 100}>
            <ExperienceItem {...experience} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
