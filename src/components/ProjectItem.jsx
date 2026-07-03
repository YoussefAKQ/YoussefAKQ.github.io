const ProjectItem = ({ title, description, image, skills, link }) => {
  return (
    <div className='group flex flex-col sm:flex-row gap-5 cursor-default'>
      <div className="w-28 md:w-32 h-20 md:h-24 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-xl border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:scale-[1.03]"
        />
      </div>
      <div className='space-y-2 flex-grow min-w-0'>
        <h3 className='text-lg md:text-xl font-bold text-white'>{title}</h3>
        <p className='text-sm md:text-base text-gray-400 leading-relaxed'>{description}</p>
        <div className='flex flex-wrap gap-2 pt-1'>
          {skills.map((skill, index) => (
            <span key={index} className='text-xs text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full'>{skill}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1 mt-2 text-white text-sm group/link">
            <span className="border-b border-transparent group-hover/link:border-white transition-all duration-300">View project</span>
            <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
