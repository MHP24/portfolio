import { ContactMedias, Input, TextArea, TitleCategory } from '@/app/components';
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
          py-5 px-10 h-min rounded-lg border-2 border-c3-1 z-10 relative'>
          
            <h3 className='text-3xl text-start font-primary'><strong>M</strong>is redes</h3>
            <ContactMedias data={contactMedias}/>

          </div>

          <div className='hidden lg:grid items-center absolute w-[70%] h-full top-0 right-6 z-0 bg-c3-1'>

          </div>
        </div>

        <div className='py-6 lg:py-0'>
          <form className='flex flex-col items-start gap-8'>
            <Input name='email' placeholder='tucorreo@mail.com' type='email' label='Correo electrónico'/>
            <Input name='subject' placeholder='¿Qué deseas saber?' type='text' label='Asunto'/>
            <TextArea name='message' placeholder='Mensaje...' label='Mensaje'/>

            <button className='transition-opacity hover:opacity-90 delay-75 border-2 mt-4 px-8 py-2 font-primary 
              text-xl rounded-full bg-c3 text-c6 font-semibold'>Enviar</button>
          </form>
        </div>

      </div>


    </section>
  );
};

export default Page;