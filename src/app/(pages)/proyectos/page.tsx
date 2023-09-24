import { TitleCategory, ProjectPanel } from '@/app/components';

const Page = () => {
  return (
    <section className='h-screen w-full  
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
      px-4 overflow-hidden relative'
    >
      <div className='px-6 h-full border-2'>
        <TitleCategory title='proyectos'/>
        <ProjectPanel/>
      </div>


    </section>
  );
};

export default Page;