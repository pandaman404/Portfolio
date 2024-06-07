import { freelanceWorkList, FeaturedProjectsList } from '../info';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { FreelanceWorkCard } from './FreelanceWorkCard';

export const ProjectsList = () => {
  return (
    <section id='projects'>
      <div className='flex flex-col gap-20'>
        <div>
          <h3 className='mb-10 text-2xl font-semibold uppercase tracking-widest text-theme-200'>
            Freelance
          </h3>
          <div className='grid grid-cols-auto-fit-200 gap-8'>
            {freelanceWorkList.map((item) => {
              return <FreelanceWorkCard key={item.title} {...item} />;
            })}
          </div>
        </div>
        <div>
          <h3 className='mb-10 text-2xl font-semibold uppercase tracking-widest text-theme-200'>
            Proyectos
          </h3>
          <div className='flex flex-col gap-10'>
            {FeaturedProjectsList.map((item) => {
              return <FeaturedProjectCard key={item.title} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
