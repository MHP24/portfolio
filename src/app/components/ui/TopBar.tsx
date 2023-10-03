'use client';

import { NavContext } from '@/app/context';
import Image from 'next/image';
import { useContext } from 'react';

export const TopBar = () => {
  const { toggleMenu }  = useContext(NavContext);

  return (
    <div className='flex items-center justify-end md:hidden fixed top-3 right-3 w-full z-50'>
      <button 
        onClick={toggleMenu} 
        className='bg-black p-2 rounded-full border-2 
        border-c3-1 cursor-pointer hover:bg-c3-1 transition-all delay-75'
      >
        <Image 
          src='/svgs/menu.svg' 
          alt='menu' 
          width={35} 
          height={35}
        />
      </button>
    </div>
  );
};
