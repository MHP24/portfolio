'use client';

import { FC, useState } from 'react';
import { TService } from '@/app/types';

export const ServiceCard: FC<TService> = ({ title, description, startsVisible }) => {

  const [isOpen, setIsOpen] = useState(startsVisible);

  return (
    <li className={`bg-c6 p-3 rounded-md border-2 border-c3-1 relative ${!isOpen && 'hover:opacity-80 transition all delay-75'}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='select-none'
      >
        <button 
          className='absolute top-3 right-5 text-xl text-c3'
        >
          { isOpen ? '〈' : '︿'}
        </button>

        <div className='h-10'>
          <h3 className='text-3xl font-primary'><span className='font-bold'>{title.at(0)}</span>{title.slice(1, title.length)}</h3>
        </div>
      </div>

      {
        isOpen && (
          <div className='mt-1'>
            <p className='text-xl font-primary'>{description}</p>
          </div>
        )
      }
      
    </li>
  );
};
