import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main className='h-screen ml-20'>
        { children }
      </main>
    </>
  );
};

export default Layout;