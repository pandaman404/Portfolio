import { v4 as uuidv4 } from 'uuid';

export const FeaturedProjectCard = ({
  title,
  year,
  type,
  description,
  src,
  tags,
  url,
}) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex min-h-64 cursor-crosshair flex-col justify-between overflow-hidden rounded-md border border-theme-500 bg-theme-800 md:flex-row'
    >
      <div className='p-5 md:w-1/2'>
        <span className='mb-1 text-sm'>
          {year} • {type}
        </span>
        <h6 className='mb-3 text-xl font-bold text-theme-100'>{title}</h6>
        <div className='mb-3 flex gap-2'>
          {tags.map((tag) => (
            <p
              key={uuidv4()}
              className='rounded-xl border border-theme-400 px-3 py-1 text-xs'
            >
              {tag}
            </p>
          ))}
        </div>
        <p className='text-sm'>{description}</p>
      </div>
      <img
        src={src}
        alt={title}
        className='relative h-full max-h-64 w-full object-cover object-top transition-transform duration-500 group-hover:rotate-0 md:-right-6 md:top-16 md:h-full md:w-1/2 md:rotate-[-8deg]'
      />
    </a>
  );
};
