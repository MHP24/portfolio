import Link from 'next/link';
import { FC } from 'react';

type Props = {
  title: string,
  links: {
    repository: string,
    production?: string
  }
}

export const ProjectHover: FC<Props> = ({ title, links: { repository, production = null } }) => {
  return (
    <div className='grid grid-rows-3 grid-cols-1 items-center justify-items-center
      z-20 absolute w-full h-full rounded-lg bg-c1-1'>
      <h4 className='text-xl xl:text-2xl font-primary'>{title}</h4>

      <Link 
        href={repository} 
        target='_blank'
        className='transition-transform delay-75 hover:scale-105 text-md xl:text-lg font-primary
         bg-c2 py-2 px-4 rounded-full border-2 border-c3-1' >
          Respositorio
      </Link>
      {
        production &&
        <Link 
          href={production} 
          target='_blank'
          className='transition-transform delay-75 hover:scale-105 text-md xl:text-lg font-primary
           bg-c1 py-2 px-4 rounded-full border-2 border-c3-1' >
          Visitar
        </Link>
      }
    </div>
  );
};
