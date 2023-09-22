import { TService } from '@/app/types';
import React, { FC } from 'react';
import { ServiceCard } from '.';

type Props = {
  services: TService[]
}

export const Services: FC<Props> = ({ services }) => {
  return (
    <ul>
      {
        services.map(service => (
          <ServiceCard key={`service-mh-${service.title}`} {...service}/>
        ))
      }
    </ul>
  );
};
