import React, { FC } from 'react';

type Props = {
  title: string
}

export const TitleCategory: FC<Props> = ({ title }) => {
  return (
    <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-primary font my-10 capitalize'>
      <span className='font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl '>{title.at(0)}</span>{title.slice(1, title.length)}
    </h1>
  );
};
