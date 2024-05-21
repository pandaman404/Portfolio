import { FaCheck } from 'react-icons/fa6';
import { v4 as uuidv4 } from 'uuid';

export const Job = ({ period, position, company, bulletPoints }) => {
    return (
        <div className='relative'>
            <div className='absolute -left-[37px] top-0 h-4 w-4 rounded-full bg-lime-500'></div>
            <div className='relative -top-2'>
                <div className='mb-5 grid md:grid-cols-2 md:grid-rows-2'>
                    <h4 className='text-lg text-shark-400 md:col-start-2 md:col-end-3 md:text-end'>
                        {period}
                    </h4>
                    <h4 className='text-lg font-semibold text-lime-500'>
                        {position}
                    </h4>
                    <h4 className='text-lg font-semibold text-shark-200 md:row-start-1 md:row-end-2'>
                        {company}
                    </h4>
                </div>
                <ul className='flex flex-col gap-2'>
                    {bulletPoints.map((bulletPoint) => {
                        return (
                            <li
                                key={uuidv4()}
                                className='relative left-5 text-sm text-shark-400'
                            >
                                <FaCheck
                                    className='absolute -left-5 top-1'
                                    fill='white'
                                />
                                {bulletPoint}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
