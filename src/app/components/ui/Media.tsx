import { TContactMedia } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Media: FC<TContactMedia> = ({ name, link, asset }) => {
  return (
    <li className='transition-opacity hover:opacity-70 delay-75'>
      <Link href={link} target='_blank' className='flex items-center gap-3'>
        <Image src={`/svgs/medias/${asset}`} alt={name} width={30} height={30}/>
        <p className='text-md'><span className='font-bold text-lg'>{name.at(0)}</span>{name.slice(1, name.length)}</p>
      </Link>
    </li>
  );
};
