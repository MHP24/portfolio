import { TitleCategory, ProjectPanel } from '@/app/components';
import { projects } from '@/app/mocks/projects';


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

      <div className='hidden lg:grid items-center bg-c3-1 h-[80%] w-[30%] m-auto
        md:aspect-6/7 absolute right-0 bottom-16 z-0 opacity-70 lg:opacity-100
         animate__animated animate__fadeInRight projectsDecorator__fadeIn'>
      </div>


    </section>
  );
};

export default Page;