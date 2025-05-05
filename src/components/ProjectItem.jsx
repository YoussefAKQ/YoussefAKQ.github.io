const ProjectItem = ({ title, description, image, skills, link }) => {
  return (
    <div className='flex flex-row gap-6 hover:bg-white/10 p-4 rounded-lg transition duration-125 ease-in-out'>
      <img 
        src={image} 
        alt={title} 
        className="w-48 h-auto object-contain rounded-lg flex-shrink-0" 
      />
      <div className='space-y-2'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p>{description}</p>
        <div className='flex flex-row gap-2 mt-2'>
          {skills.map((skill, index) => (
            <span key={index} className='text-sm text-gray-500'>{skill}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" 
             className="inline-block mt-4 text-blue-500 hover:underline">
            Ver proyecto →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
