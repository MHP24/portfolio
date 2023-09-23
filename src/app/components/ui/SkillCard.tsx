

export const SkillCard = () => {
  return (
    <div className='border-2 border-c3-1 h-full flex flex-col rounded-lg'>
      
      <div className='bg-c7 p-3'>
        <h3 className='text-center text-xl sm:text-3xl font-primary'><span className='font-bold '>F</span>rontend</h3>
      </div>

      <ul className='bg-c6 flex-1 p-3 flex flex-col gap-3'>
        <li className='text-xl'>HTML5</li>
        <li className='text-xl'>CSS3</li>
        <li className='text-xl'>JavaScript</li>
        <li className='text-xl'>TypeScript</li>
        <li className='text-xl'>Angular</li>
        <li className='text-xl'>React.js</li>
        <li className='text-xl'>Next.js</li>
      </ul>

    </div>
  );
};
