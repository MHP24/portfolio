import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main className='lg:h-screen md:ml-28 z-10 border-l-[1px] border-c3'>
        { children }
      </main>
    </>
  );
};

export default Layout;