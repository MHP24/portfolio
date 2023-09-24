'use client';

import { FC, PropsWithChildren, useState } from 'react';
import Image from 'next/image';
import { TProject } from '@/app/types';


export const Project: FC<PropsWithChildren<TProject>> = ({ children, asset, title }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  
  return (
    <li className='w-full h-full aspect-video relative bg-c6 rounded-lg'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {
        isHover &&  (
          <>
            { children }
          </>
        )
      }
      <div className='z-10'>
        <Image 
          className='absolute rounded-xl border-c3-1 border-2'
          src={`/img/projects/${asset}`} 
          alt={`proyecto ${title}`} 
          fill 
        />
      </div>
    </li>
  );
};
