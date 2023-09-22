import { FC } from 'react';
import { TService } from '@/app/types';

export const ServiceCard: FC<TService> = ({ title, description }) => {
  return (
    <li>
      
      <div>
        <h3>{title}</h3>
      </div>

      <div>
        <p>{description}</p>
      </div>
      
    </li>
  );
};
