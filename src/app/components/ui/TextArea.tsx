import { FC, forwardRef } from 'react';

type Props = {
  name: string,
  label?: string,
  placeholder: string
}

export const TextArea: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(
  ({ name, label, placeholder, ...rest }, ref) => {
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
        <textarea
          {...rest}
          ref={ref}
          name={name}
          placeholder={placeholder}
          className='w-full outline-none py-2 px-4 text-lg rounded-lg bg-c6 border-2 border-c3-1 font-primary'
        >
        </textarea>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';