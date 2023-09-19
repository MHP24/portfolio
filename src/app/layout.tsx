import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Miguel HP',
  description: 'Portafolio de Miguel Henríquez Pacheco',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='bg-c1 text-c3'>
      <body className={`${inter.className} w-full max-w-[120rem] m-auto`}>{children}</body>
    </html>
  );
}
