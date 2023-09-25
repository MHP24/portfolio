import { Input, TextArea, TitleCategory } from '@/app/components';
import Link from 'next/link';

const Page = () => {
  return (
    <section className='min-h-screen lg:h-screen w-full  
      bg-hero bg-cover bg-no-repeat bg-fixed bg-center 
      px-10 overflow-hidden animate__animated animate__fadeIn page__fadeIn'
    >
      
      <TitleCategory title='Contáctame'/>

      <div className='grid grid-cols-2 h-full px-4'>
        <div className=''>
          
          <h3 className='text-2xl'>Mis redes</h3>
          <Link href={''}>GitHub</Link>
          <Link href={''}>Email</Link>
          <Link href={''}>WhatsApp</Link>
          <Link href={''}>Discord</Link>

        </div>

        <div>
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