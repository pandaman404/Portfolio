import { Job } from './Job';
import { jobs } from '../info';

export const Experience = () => {
    return (
        <section>
            <h3 className='mb-10 text-2xl text-shark-100'>
                Experiencia {'</>'}
            </h3>
            <div className='ml-2 flex flex-col gap-16 border-l border-shark-500 px-7'>
                {jobs.map((job) => (
                    <Job {...job} key={job.id} />
                ))}
            </div>
        </section>
    );
};
