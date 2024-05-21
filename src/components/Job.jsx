export const Job = ({ period, position, company, bulletPoints }) => {
    return (
        <div className='relative'>
            <div className='absolute -left-[37px] top-0 h-4 w-4 rounded-full bg-lime-500'></div>
            <div className='relative -top-2'>
                <h2 className='text-lg text-shark-400'>{period}</h2>
                <h2 className='mb-5 text-lg text-shark-200'>
                    {position}{' '}
                    <span className='text-lime-500'>[{company}]</span>
                </h2>
                <ul className='list-disc'>
                    {bulletPoints.map(({ id, text }) => {
                        return (
                            <li
                                key={id}
                                className='relative left-3 text-sm text-shark-400'
                            >
                                {text}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
