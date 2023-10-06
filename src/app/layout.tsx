import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'animate.css';
import './globals.css';
import { NavProvider } from './context';
import { images } from './mocks';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Miguel HP',
  description: 'Portafolio de Miguel Henríquez Pacheco',
  openGraph: {
    title: 'Miguel HP',
    description: 'Portafolio de Miguel Henríquez Pacheco',
    images
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavProvider>
      <html lang='en' className='bg-c1 text-c3'>
        <body className={`${inter.className} w-full max-w-[120rem] m-auto`}>{children}</body>
      </html>
    </NavProvider>
  );
}