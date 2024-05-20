import {
    BriefcaseIcon,
    BuildingOffice2Icon,
    Square3Stack3DIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import links from '../info';

export const Menu = ({ showMenu }) => {
    return (
        <ul
            id='menu'
            className={`${showMenu && 'open'} fixed right-0 top-0 flex h-screen w-full flex-col items-start gap-10 bg-shark-800 px-12 pt-56 lg:relative lg:h-auto lg:w-auto lg:gap-8 lg:p-0`}
        >
            {links.map((link) => {
                const { name, section } = link;
                return (
                    <li key={section}>
                        <a
                            href={`#${section}`}
                            aria-label={name}
                            aria-current='page'
                            className='lg:hover:bg-shark-500 group relative flex items-center justify-center gap-2 rounded lg:h-10 lg:w-10'
                        >
                            {section === 'about' ? (
                                <UserIcon className='h-5 w-5 stroke-shark-400 lg:h-6 lg:w-6' />
                            ) : section === 'experience' ? (
                                <BuildingOffice2Icon className=' h-5 w-5 stroke-shark-400 lg:h-6 lg:w-6' />
                            ) : section === 'stack' ? (
                                <Square3Stack3DIcon className='h-5 w-5 stroke-shark-400 lg:h-6 lg:w-6' />
                            ) : (
                                <BriefcaseIcon className='h-5 w-5 stroke-shark-400 lg:h-6 lg:w-6' />
                            )}
                            <span className='lg:hidden'>{name}</span>
                            <div className='invisible absolute left-12 hidden w-auto min-w-full transform whitespace-nowrap rounded bg-shark-200 px-2 py-1 text-xs font-medium text-shark-900 transition-all ease-in-out group-hover:visible lg:block'>
                                {name}
                            </div>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
