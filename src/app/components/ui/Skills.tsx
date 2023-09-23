import { FC } from 'react';
import { Technologies } from '@/app/types';
import { SkillSet } from '.';

type Props = {
  skillSets: Technologies[]
}

export const Skills: FC<Props> = ({ skillSets }) => {
  return (
    <ul className='w-full h-full grid items-end lg:grid-cols-2 xl:grid-cols-4 gap-10 px-6 overflow-y-auto'>
      {
        skillSets.map((skillSet, i) => (
          <SkillSet key={`skillset-${skillSet.title}-${i}`} {...skillSet} />
        ))
      }
    </ul>
  );
};
