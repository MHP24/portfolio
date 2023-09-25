import { ContactMedias, TitleCategory } from '@/app/components';
import { ContactForm } from '@/app/components/ui/ContactForm';
import { contactMedias } from '@/app/mocks/contact';

const Page = () => {
  return (
    <section className='min-h-screen lg:h-screen w-full  
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
      px-10 overflow-hidden animate__animated animate__fadeIn page__fadeIn'
    >
      
      <TitleCategory title='Contácto'/>

      <div className='grid lg:grid-cols-2 h-full px-4 gap-6'>
        <div className='relative'>

          <div className='flex flex-col gap-10 mt-2 bg-c6 w-full lg:w-fit 
            py-5 px-10 h-min rounded-lg border-2 border-c3-1 z-10 relative
            animate__animated animate__fadeInLeft left__fadeIn'>
          
            <h3 className='text-3xl text-start font-primary'><strong>M</strong>is redes</h3>
            <ContactMedias data={contactMedias}/>

          </div>

          <div className='hidden lg:grid items-center absolute w-[70%] h-full top-0 right-6 z-0 bg-c3-1
            animate__animated animate__fadeInUp decorator__fadeIn'>

          </div>
        </div>

        <div className='py-6 lg:py-0'>
          <ContactForm/>
        </div>

      </div>


    </section>
  );
};

export default Page;