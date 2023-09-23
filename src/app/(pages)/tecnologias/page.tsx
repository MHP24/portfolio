import { SkillCard, TitleCategory } from '@/app/components';

const Page = () => {
  return (
    <section className='flex flex-col min-h-screen lg:h-screen w-full  
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
      px-4'
    >
      <div className='text-end px-6'>
        <TitleCategory title='Tecnologías'/>
      </div>

      <div className='h-full w-full grid grid-cols-4 flex-1'>
        <SkillCard/>

      </div>

    </section>
  );
};

export default Page;