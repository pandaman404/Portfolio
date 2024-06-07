export const Education = ({ period, major, institution }) => {
  return (
    <div>
      <div className='grid sm:grid-cols-2 sm:grid-rows-2'>
        <p className='text-lg text-theme-400 sm:col-start-2 sm:col-end-3 sm:text-end'>
          {period}
        </p>
        <p className='text font-semibold text-theme-200 sm:row-start-1 sm:row-end-2'>
          {major}
        </p>
        <p className='text font-semibold text-lime-300'>{institution}</p>
      </div>
    </div>
  );
};
