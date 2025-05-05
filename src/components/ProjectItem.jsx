const ProjectItem = ({ title, description, image, skills, link }) => {
  return (
    <div className='group flex flex-row gap-4 hover:bg-white/10 p-4 rounded-lg transition duration-125 ease-in-out'>
      <img 
        src={image} 
        alt={title} 
        className="w-32 md:w-40 h-20 md:h-28 object-cover rounded-xl border-2 border-slate-200/10 transition group-hover:border-slate-200/30 flex-shrink-0" 
      />
      <div className='space-y-2 flex-grow min-w-0'>
        <h3 className='text-lg md:text-xl font-bold -mt-1'>{title}</h3>
        <p className='text-sm md:text-base'>{description}</p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {skills.map((skill, index) => (
            <span key={index} className='text-xs md:text-sm text-gray-500 bg-white/5 px-2 py-1 rounded'>{skill}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" 
             className="inline-block mt-2 md:mt-4 text-white hover:underline text-sm">
            Watch Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
