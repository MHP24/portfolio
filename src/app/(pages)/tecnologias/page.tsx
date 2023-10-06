import { Metadata } from 'next';
import { ReactLogo, Skills, TitleCategory } from '@/app/components';
import { images, technologies } from '@/app/mocks';

export const metadata: Metadata = {
  title: 'Miguel HP | Tecnologías',
  description: 'Tecnologías de expertís de Miguel Henríquez Pacheco.',
  openGraph: {
    title: 'Miguel HP | Tecnologías',
    description: 'Tecnologías de expertís de Miguel Henríquez Pacheco.',
    images
  }
};


const Page = () => {
  return (
    <section className='min-h-screen lg:h-screen w-full  
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
      px-4 relative grid items-center animate__animated animate__fadeIn page__fadeIn'>

      <div className='hidden lg:grid items-center bg-c3-2 aspect-square w-40 xl:w-80
       fixed right-5 top-5 z-0  rounded-2xl border-2 border-c3-1'>
        <ReactLogo/>
      </div>
    
      <div className='text-start px-6'>
        <TitleCategory title='Tecnologías'/>
      </div>


      <Skills skillSets={technologies}/>

    </section>
  );
};

export default Page;