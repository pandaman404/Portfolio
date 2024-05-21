import { Job } from './Job';
import { jobs, education } from '../info';
import { v4 as uuidv4 } from 'uuid';
import { Education } from './Education';

export const Resume = () => {
    return (
        <section id='curriculum'>
            <h3 className='mb-10 text-2xl font-semibold uppercase tracking-widest text-shark-200'>
                Experiencia
            </h3>
            <div className='ml-2 flex flex-col gap-16 border-l border-shark-500 pl-7'>
                {[...jobs].reverse().map((job) => (
                    <Job {...job} key={uuidv4()} />
                ))}
            </div>
            <h3 className='mb-10 mt-20 text-2xl font-semibold uppercase tracking-widest text-shark-200'>
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
