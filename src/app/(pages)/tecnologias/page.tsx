import { Skills, TitleCategory } from '@/app/components';
import { technologies } from '@/app/mocks';

const Page = () => {
  return (
    <section className='flex flex-col gap-5 min-h-screen lg:h-screen w-full  
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
      px-4'
    >
      <div className='text-end px-6'>
        <TitleCategory title='Tecnologías'/>
      </div>


      <Skills skillSets={technologies}/>

    </section>
  );
};

export default Page;