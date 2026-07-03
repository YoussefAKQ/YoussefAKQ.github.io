const ExperienceItem = ({ date, title, description, skills, recommendationUrl }) => {
  return (
    <div className='group relative pl-6 border-l border-white/10 hover:border-white/40 transition-colors duration-300 cursor-default'>
      <span className='absolute -left-[3px] top-1.5 w-[5px] h-[5px] rounded-full bg-white/30 group-hover:bg-white transition-colors duration-300' />
      <p className='text-gray-500 text-xs tracking-widest'>{date}</p>
      <div className='mt-2 space-y-2 text-sm md:text-base'>
        <div className='flex items-center gap-2 flex-wrap'>
          <p className='text-lg md:text-xl font-bold text-white'>{title}</p>
          {recommendationUrl && (
            <a
              href={recommendationUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded transition'
            >
              Recommendation Letter
            </a>
          )}
        </div>
        <p className='text-gray-400 leading-relaxed'>{description}</p>
        <div className='flex flex-wrap gap-2 pt-1'>
          {skills.map((skill, index) => (
            <span
              key={index}
              className='text-xs text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
