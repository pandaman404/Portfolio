import { FreelanceWorkCard } from './FreelanceWorkCard';
import { freelanceWorkList } from '../info';

export const FreelanceWork = () => {
  return (
    <section>
      <h3 className='mb-10 text-xl tracking-widest text-theme-400'>
        Trabajos Freelance [WordPress]
      </h3>
      <div className='grid-cols-auto-fit-200 grid gap-8'>
        {freelanceWorkList.map((item) => {
          return <FreelanceWorkCard key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
};
