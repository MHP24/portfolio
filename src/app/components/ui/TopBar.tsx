'use client';

import { NavContext } from '@/app/context';
import { useContext } from 'react';

export const TopBar = () => {
  const { toggleMenu }  = useContext(NavContext);

  return (
    <div className='flex items-center justify-end md:hidden sticky top-0 left-0 
    bg-black w-full px-5 py-4 border-l-[1px] z-40 border-l-c3'>
      <button onClick={toggleMenu}>Menu</button>
    </div>
  );
};
