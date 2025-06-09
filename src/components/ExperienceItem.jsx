const ExperienceItem = ({ date, title, description, skills, recommendationUrl }) => {
  return (
    <div className='flex flex-row gap-6 hover:bg-white/10 p-3 rounded-lg transition duration-125 ease-in-out md:flex-row flex-col cursor-default'>
      <p className='text-gray-400 text-xs'>{date}</p>
      <div className='max-w-[450px] space-y-2 text-sm md:text-base'>
        <div className='flex items-center gap-2'>
          <p className='text-xl font-bold -mt-1'>{title}</p>
          {recommendationUrl && (
            <a
              href={recommendationUrl}
              download
              className='text-xs bg-gray-500 hover:bg-white/10 text-white px-2 py-1 rounded transition'
            >
              Recomendation Letter
            </a>
          )}
        </div>
        <p>{description}</p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {skills.map((skill, index) => (
            <p
              key={index}
              className='text-xs md:text-sm text-gray-500 bg-white/5 px-2 py-1 rounded cursor-default'
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
