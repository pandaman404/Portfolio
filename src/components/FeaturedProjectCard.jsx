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
      className='border-carbon-500 bg-carbon-800 group flex min-h-64 cursor-pointer flex-col justify-between overflow-hidden rounded-md border md:flex-row'
    >
      <div className='p-5 md:w-1/2'>
        <span className='mb-1 text-sm'>
          {year} • {type}
        </span>
        <h6 className='text-carbon-100 mb-3 text-xl font-bold'>{title}</h6>
        <div className='mb-3 flex gap-2'>
          {tags.map((tag) => (
            <p
              key={uuidv4()}
              className='border-carbon-400 rounded-xl border px-3 py-1 text-xs'
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
