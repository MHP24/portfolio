import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../components/ui/Navbar';
import { TopBar } from '../components/ui/TopBar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <TopBar/>
      <Navbar/>
      <main className='lg:h-screen md:ml-28 z-10 border-l-[1px] border-c3'>
        { children }
      </main>
    </>
  );
};

export default Layout;