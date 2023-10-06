import { TitleCategory, ProjectPanel, Rocket } from '@/app/components';
import { images } from '@/app/mocks';
import { projects } from '@/app/mocks/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miguel HP | Proyectos',
  description: 'Proyectos realizados por Miguel Henríquez Pacheco (frontend y backend)',
  openGraph: {
    title: 'Miguel HP | Proyectos',
    description: 'Proyectos realizados por Miguel Henríquez Pacheco (frontend y backend)',
    images
  }
};

const Page = () => {
  return (
    <section className='h-screen w-full  
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
      px-4 overflow-hidden relative animate__animated animate__fadeIn page__fadeIn'
    >
      <div className='px-6 h-full'>
        <TitleCategory title='proyectos'/>
        <div className='h-[70%] z-10'>
          <ProjectPanel projects={projects}/>
        </div>
      </div>

      <div className='absolute right-0 top-0 h-full w-[30%] flex'>
        <div className='hidden lg:grid items-center bg-c3-1 h-[70%] w-full m-auto
         z-0 opacity-70 lg:opacity-100
         animate__animated animate__fadeInRight decorator__fadeIn'>
          <Rocket/>
        </div>
      </div>


    </section>
  );
};

export default Page;