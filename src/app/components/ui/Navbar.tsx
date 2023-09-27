'use client';

import Link from 'next/link';
import { NavItem } from './NavItem';
import { useContext } from 'react';
import { NavContext } from '@/app/context';

const options = [
  {
    path: 'servicios',
    label: 'servicios',
    asset: 'services'
  }, 
  {
    path: 'tecnologias',
    label: 'tecnologías',
    asset: 'technologies'
  }, 
  {
    path: 'proyectos',
    label: 'proyectos',
    asset: 'projects'
  }, 
  {
    path: 'contacto',
    label: 'contacto',
    asset: 'contact'
  },
  {
    path: 'compartir',
    label: 'compartir',
    asset: 'share'
  }
];

export const Navbar = () => {

  const { isOpen } = useContext(NavContext);

  return (
    <nav className={`animate__animated animate__fadeNav 
      ${isOpen ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'}
      border-r-2 border-c3-1 md:border-none 
      md:block fixed left-0 top-0 w-20 h-screen bg-c8 z-50`
    }>

      <ul className='flex flex-col gap-8 h-full'>

        <li>
          <Link 
            href={'/'}
            className='w-full aspect-square p-3 bg-black grid items-center text-center select-none'>
            <h2 className='text-5xl font-primary font-bold'>M</h2>
          </Link>
        </li>

        <li className='flex flex-col items-center gap-6'>
          {
            options.map((option, key) => (
              <NavItem key={`nav-item-${option}-${key}`} {...option}/>
            ))
          }
        </li>

      </ul>
    </nav>
  );
};
