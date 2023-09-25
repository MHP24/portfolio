import { Delorean } from '../components';

const Page = () => {
  return (
    <section className='h-screen w-full bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
    px-4 flex relative overflow-hidden'>

      <div className='h-full flex flex-col justify-center gap-40 px-6 z-10'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-primary animate__animated animate__fadeInLeft'>
          <span className='text-6xl sm:text-8xl lg:text-9xl font-bold'>M</span>iguel&nbsp; <br className='block sm:hidden'/>
          <span className='text-6xl sm:text-8xl lg:text-9xl font-bold'>H</span>enríquez <br/>
          <span className='text-6xl sm:text-8xl lg:text-9xl font-bold'>P</span>acheco
        </h1>

        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-secondary animate__animated animate__flipInX'>Desarrollador full stack</h2>
      </div>

      <div className='grid items-center bg-c3-1 h-[80%] w-8/12 m-auto md:w-auto
      md:aspect-6/7 absolute right-0 md:right-16 bottom-0 z-0 opacity-70 lg:opacity-100
       animate__animated animate__fadeInUp decorator__fadeIn'>
        <Delorean/>
      </div>
    </section>
  );
};

export default Page;