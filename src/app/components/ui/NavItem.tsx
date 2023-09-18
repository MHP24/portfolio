import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
  path: string,
  asset: string
}

export const NavItem: FC<Props> = ({ path, asset }) => {
  return (
    <Link href={path}
      className='grid place-items-center m-auto'
    >
      <Image 
        className='bg-c6 transition-all delay-75 hover:opacity-80 p-3 rounded-full border-[1px] border-c3-1'
        src={`/svgs/${asset}.svg`} alt={path} width={54} height={54}
      />
    </Link>
  );
};
