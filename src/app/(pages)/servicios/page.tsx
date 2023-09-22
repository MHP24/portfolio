import { Services } from '@/app/components/ui/Services';
import { services } from '@/app/mocks';

const Page = () => {
  return (
    <section className='h-full w-full bg-hero bg-cover bg-no-repeat bg-fixed bg-center px-4 flex relativ overflow-hidden'>
      <h1 className='text-9xl font-secondary font'><span className='font-bold'>S</span>ervicios</h1>
      <Services services={services}/>
    </section>
  );
};

export default Page;