'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, TextArea } from '.';
import { regex } from '@/app/utils';

type TFormValues = {
  email: string,
  subject: string,
  message: string
}

export const ContactForm = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TFormValues>();

  const onSubmit = async (data: TFormValues) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, {
        method: 'POST',
        body: JSON.stringify(data)
      });
      
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='flex flex-col items-start gap-8' 
      onSubmit={handleSubmit(onSubmit)} noValidate>

      <Input 
        {...register('email', { required: true, pattern: regex.email })}
        name='email' 
        placeholder='tucorreo@mail.com' 
        type='email' 
        label='Correo electrónico'
        isValid={!errors.email}
      />

      <Input 
        {...register('subject', { required: true })}
        name='subject'
        placeholder='¿Qué deseas saber?'
        type='text'
        label='Asunto'
        isValid={!errors.subject}
      />

      <TextArea 
        {...register('message', { required: true })}
        name='message'
        placeholder='Mensaje...'
        label='Mensaje'
        isValid={!errors.message}
      />


      <button className='transition-opacity hover:opacity-90 delay-75 border-2 mt-4 px-8 py-2 font-primary 
      text-xl rounded-full bg-c3 text-c6 font-semibold'>Enviar</button>
    </form>
  );
};
