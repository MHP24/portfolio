import { FC, forwardRef } from 'react';

type Props = {
  name: string,
  type: 'text' | 'email',
  label?: string,
  placeholder: string,
  isValid: boolean
}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ name, type, label, placeholder, isValid, ...rest }, ref) => {
    return (
      <div className='flex flex-col gap-2 w-full'>
        {
          label && (
            <label 
              htmlFor={name}
              className={`font-primary text-lg ${isValid ? 'text-white' : 'text-red-700 font-bold'}`}
            >
              {label}
            </label>
          )
        }
        <input 
          {...rest}
          type={type} 
          name={name} 
          placeholder={placeholder} 
          aria-label={placeholder} 
          ref={ref}
          autoComplete='off'
          className='w-full outline-none py-2 px-4 text-lg rounded-lg 
            bg-c6 border-2 border-c3-1 font-primary'
        />
      </div>
    );
  }
);

Input.displayName = 'Input';