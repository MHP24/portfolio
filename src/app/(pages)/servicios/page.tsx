import { Metadata } from 'next';
import { Coke, TitleCategory } from '@/app/components';
import { Services } from '@/app/components/ui/Services';
import { services } from '@/app/mocks';

export const metadata: Metadata = {
  title: 'Miguel HP | Servicios',
  description: 'Servicios disponibles de Miguel Henríquez Pacheco (Desarollo, diseño y mantenimiento).'
};

const Page = () => {
  return (
    <section className='grid lg:grid-cols-2 items-center min-h-screen lg:h-screen w-full  
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
      px-4 overflow-hidden relative animate__animated animate__fadeIn page__fadeIn'
    >
      <div className='h-full px-6 z-10'>
        <div className='h-full'>
          <TitleCategory title='servicios'/>
          <Services services={services}/>
        </div>
      </div>

      <div className='hidden lg:grid items-center bg-c3-1 h-[80%] m-auto md:w-auto
            md:aspect-6/7 fixed right-0 md:right-0 bottom-16 z-0 opacity-0 lg:opacity-100'>
        <Coke/>
      </div>
    </section>
  );
};

export default Page;