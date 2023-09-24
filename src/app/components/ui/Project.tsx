import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TProject } from '@/app/types';

export const Project: FC<TProject> = ({ title, links, asset }) => {
  return (
    <li className='w-full h-full aspect-video relative bg-c6 rounded-lg'>
      <Link href={links.repository} target='_blank' rel='noreferrer'>
        <Image 
          className='absolute rounded-xl border-c3-1 border-2'
          src={`/img/projects/${asset}`} 
          alt={`proyecto ${title}`} 
          fill 
        />
      </Link>
    </li>
  );
};
