import { FaExternalLinkAlt } from 'react-icons/fa';

export const FreelanceWorkCard = ({ title, src, url }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='border-carbon-500 group relative h-48 cursor-pointer overflow-hidden rounded-md border'
    >
      <img
        src={src}
        alt={title}
        className='h-full w-full object-cover grayscale transition-transform duration-300 group-hover:scale-110 group-hover:grayscale-0'
      />
      <div className='bg-carbon-900 absolute left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-80'>
        <p className='group-hover:text-razer text-carbon-300 flex items-center  gap-1 font-black'>
          <FaExternalLinkAlt className='group-hover:fill-razer text-carbon-300' />
          {title}
        </p>
      </div>
    </a>
  );
};
