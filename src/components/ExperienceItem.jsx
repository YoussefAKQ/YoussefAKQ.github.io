const ExperienceItem = ({ date, title, description, skills }) => {
  return (
    <div className='flex flex-row gap-3 justify-between hover:bg-white/10 p-3 rounded-lg transition duration-125 ease-in-out'>
      <p className='text-gray-400'>{date}</p>
      <div className='max-w-[350px] space-y-2'>
        <p className='text-xl font-bold'>{title}</p>
        <p>{description}</p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {skills.map((skill, index) => (
            <p key={index} className='text-sm text-gray-500 bg-white/5 px-2 py-1 rounded'>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
