'use client';
import { useForm } from 'react-hook-form';
import { Input, TextArea } from '.';

type TFormValues = {
  email: string,
  subject: string,
  message: string
}

export const ContactForm = () => {

  const { register, handleSubmit } = useForm<TFormValues>();

  const onSubmit = (data: TFormValues) => {
    console.log({ data });
  };

  return (
    <form className='flex flex-col items-start gap-8' onSubmit={handleSubmit(onSubmit)}>
      <Input 
        {...register('email')}
        name='email' 
        placeholder='tucorreo@mail.com' 
        type='email' 
        label='Correo electrónico'
      />
      <Input 
        {...register('subject')}
        name='subject'
        placeholder='¿Qué deseas saber?'
        type='text'
        label='Asunto'
      />
      <TextArea 
        {...register('message')}
        name='message'
        placeholder='Mensaje...'
        label='Mensaje'
      />

      <button className='transition-opacity hover:opacity-90 delay-75 border-2 mt-4 px-8 py-2 font-primary 
      text-xl rounded-full bg-c3 text-c6 font-semibold'>Enviar</button>
    </form>
  );
};
