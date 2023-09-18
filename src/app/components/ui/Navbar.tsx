import Link from 'next/link';
import { NavItem } from '.';

const options = [
  {
    path: 'servicios',
    asset: 'services'
  }, 
  {
    path: 'tecnologías',
    asset: 'technologies'
  }, 
  {
    path: 'proyectos',
    asset: 'projects'
  }, 
  {
    path: 'contacto',
    asset: 'contact'
  },
  {
    path: 'compartir',
    asset: 'share'
  }
];

export const Navbar = () => {
  return (
    <nav className='fixed left-0 w-20 h-screen bg-c5'>
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