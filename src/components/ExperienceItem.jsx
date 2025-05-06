const ExperienceItem = ({ date, title, description, skills }) => {
  return (
    <div className='flex flex-row gap-6 hover:bg-white/10 p-3 rounded-lg transition duration-125 ease-in-out md:flex-row flex-col cursor-default'>
      <p className='text-gray-400 text-xs'>{date}</p>
      <div className='max-w-[450px] space-y-2 text-sm md:text-base'>
        <p className='text-xl font-bold -mt-1'>{title}</p>
        <p>{description}</p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {skills.map((skill, index) => (
            <p key={index} className='text-xs md:text-sm text-gray-500 bg-white/5 px-2 py-1 rounded cursor-default'>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
