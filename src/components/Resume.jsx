import { Job } from './Job';
import { jobs, education } from '../info';
import { v4 as uuidv4 } from 'uuid';
import { Education } from './Education';

export const Resume = () => {
  return (
    <section id='curriculum'>
      <h3 className='text-carbon-200 mb-10 text-2xl font-semibold uppercase tracking-widest'>
        Experiencia
      </h3>
      <div className='border-carbon-500 ml-2 flex flex-col gap-16 border-l pl-7'>
        {[...jobs].reverse().map((job) => (
          <Job {...job} key={uuidv4()} />
        ))}
      </div>
      <h3 className='text-carbon-200 mb-10 mt-20 text-2xl font-semibold uppercase tracking-widest'>
        Estudios
      </h3>
      <div className='flex flex-col gap-8'>
        {[...education].reverse().map((education) => (
          <Education {...education} key={uuidv4()} />
        ))}
      </div>
    </section>
  );
};
