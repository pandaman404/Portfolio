import { FaExternalLinkAlt } from 'react-icons/fa';

export const FreelanceWorkCard = ({ title, src, url }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='group relative h-48 cursor-crosshair overflow-hidden rounded-md border border-theme-500'
    >
      <img
        src={src}
        alt={title}
        className='h-full w-full object-cover grayscale transition-transform duration-300 group-hover:scale-110 group-hover:grayscale-0'
      />
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-theme-900 bg-opacity-80'>
        <p className='flex items-center gap-1 font-black  text-theme-300 group-hover:text-lime-300'>
          <FaExternalLinkAlt className='text-theme-300 group-hover:fill-lime-300' />
          {title}
        </p>
      </div>
    </a>
  );
};
