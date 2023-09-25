import { FC } from 'react';

type Props = {
  name: string,
  type: 'text' | 'email',
  label?: string,
  placeholder: string
}

export const Input: FC<Props> = ({ name, type, label, placeholder }) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      {
        label && (
          <label 
            htmlFor={name}
            className='font-primary text-lg'
          >
            {label}
          </label>
        )
      }
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        aria-label={placeholder} 
        autoComplete='off'
        className='w-full outline-none py-2 px-4 text-lg rounded-lg bg-c6 border-2 border-c3-1 font-primary'
      />
    </div>
  );
};
