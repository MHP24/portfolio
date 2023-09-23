import { FC } from 'react';
import { Technologies } from '@/app/types';
import { SkillSet } from '.';

type Props = {
  skillSets: Technologies[]
}

export const Skills: FC<Props> = ({ skillSets }) => {
  return (
    <ul className='h-full w-full grid grid-cols-4 flex-1 gap-10 px-6'>
      {
        skillSets.map((skillSet, i) => (
          <SkillSet key={`skillset-${skillSet.title}-${i}`} {...skillSet} />
        ))
      }
    </ul>
  );
};
