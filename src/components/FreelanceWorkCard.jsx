import { FaExternalLinkAlt } from 'react-icons/fa';

export const FreelanceWorkCard = ({ title, src, url }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='border-theme-10 group relative h-48 overflow-hidden rounded-md shadow-xl'
    >
      <img
        src={src}
        alt={title}
        className='h-full w-full object-cover grayscale transition-transform duration-300 group-hover:scale-110 group-hover:grayscale-0'
      />
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-theme-900 bg-opacity-80'>
        <h6 className='flex items-center gap-1 font-black'>
          <FaExternalLinkAlt />
          {title}
        </h6>
      </div>
    </a>
  );
};
