import { TService } from '@/app/types';
import React, { FC } from 'react';
import { ServiceCard } from '.';

type Props = {
  services: TService[]
}

export const Services: FC<Props> = ({ services }) => {
  return (
    <ul className='flex flex-col gap-7 animate__animated animate__fadeInLeft services__fadeIn'>
      {
        services.map(service => (
          <ServiceCard key={`service-mh-${service.title}`} {...service}/>
        ))
      }
    </ul>
  );
};
