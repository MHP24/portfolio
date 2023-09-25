import { TContactMedia } from '@/app/types';
import { FC } from 'react';
import { Media } from '.';

type Props = {
  data: TContactMedia[]
}

export const ContactMedias: FC<Props> = ({ data }) => {
  return (
    <ul className='flex flex-col gap-10'>
      {
        data.map((media, i) => (
          <Media key={`contact-media-${i}`} {...media}/>
        ))
      }
    
    </ul>
  );
};
