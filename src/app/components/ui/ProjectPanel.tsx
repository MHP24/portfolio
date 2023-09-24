import { TProject } from '@/app/types';
import { FC } from 'react';
import { Project, ProjectHover } from '.';

type Props = {
  projects: TProject[]
};

export const ProjectPanel: FC<Props> = ({ projects }) => {
  return (
    <ul className='h-full lg:w-4/6 grid sm:grid-cols-2 gap-3 overflow-y-scroll p-4 pl-0'>
      {
        projects.map((project, i) => (
          <Project key={`project-${project.title}-${i}`} {...project}>
            <ProjectHover {...project}/>
          </Project>
        ))
      }
    </ul>
  );
};
