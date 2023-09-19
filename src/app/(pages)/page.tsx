import { Delorean } from '../components';

const Page = () => {
  return (
    <section className='h-full w-full bg-hero bg-cover bg-no-repeat bg-fixed bg-center px-4 flex relativ overflow-hidden'>

      <div className='h-full flex flex-col justify-center gap-40 px-6'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-primary'>
          <span className='text-6xl sm:text-8xl lg:text-9xl font-bold'>M</span>iguel&nbsp; 
          <span className='text-6xl sm:text-8xl lg:text-9xl font-bold'>H</span>enríquez <br/>
          <span className='text-6xl sm:text-8xl lg:text-9xl font-bold'>P</span>acheco
        </h1>

        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-secondary'>Desarrollador full stack</h2>
      </div>

      <div className='grid items-center bg-c3-1 h-[80%] aspect-6/7 absolute right-16 bottom-0'>
        <Delorean/>
      </div>
    </section>
  );
};

export default Page;