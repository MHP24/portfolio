import { Metadata } from 'next';
import { Skills, TitleCategory } from '@/app/components';
import { technologies } from '@/app/mocks';

export const metadata: Metadata = {
  title: 'Miguel HP | Tecnologías',
  description: 'Tecnologías de expertís de Miguel Henríquez Pacheco.'
};


const Page = () => {
  return (
    <section className='min-h-screen lg:h-screen w-full  
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
      px-4 relative grid items-center  animate__animated animate__fadeIn page__fadeIn'>

      <div className='grid items-center bg-c3-1 aspect-[21/9] w-6/12
       fixed left-0 md:left-28 top-0 z-0 opacity-70 lg:opacity-100'>
      </div>
    
      <div className='text-end px-6'>
        <TitleCategory title='Tecnologías'/>
      </div>


      <Skills skillSets={technologies}/>

    </section>
  );
};

export default Page;