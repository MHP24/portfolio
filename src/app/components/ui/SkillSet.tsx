import { Technologies } from '@/app/types';
import Image from 'next/image';
import { FC } from 'react';



export const SkillSet: FC<Technologies> = ({ title, stack, percent }) => {
  return (
    <div className={'border-2 border-c3-1 h-auto  flex flex-col rounded-lg animate__animated animate__fadeInUp'}>
      
      <div className='bg-c7 p-3 rounded-tl-lg rounded-tr-lg'>
        <h3 className='text-center text-xl sm:text-3xl font-primary'><span className='font-bold '>{title.at(0)}</span>{title.slice(1, title.length)}</h3>
      </div>

      <ul className={`bg-c6 flex-1 p-6 flex flex-col gap-8  lg:${Number(percent) < 100 && 'pb-16'}`}>
        {
          stack.map(({ name, asset }, i) => (
            <li key={`technology-${i}-${name}`} className='flex items-center gap-4'>
              <Image src={`${asset}.svg`} alt={name} width={35} height={35}/>
              <p className='text-xl font-primary'>{name}</p>
            </li>
          ))
        }
      </ul>

    </div>
  );
};
