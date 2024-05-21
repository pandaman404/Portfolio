import { MdOutlinePersonOutline } from 'react-icons/md';
import { FaRegBuilding } from 'react-icons/fa';
import { IoIosBriefcase } from 'react-icons/io';

import { links } from '../info';

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
                            className='group relative flex items-center justify-center gap-3 rounded lg:h-10 lg:w-10 lg:hover:bg-shark-500'
                        >
                            {section === 'about' ? (
                                <MdOutlinePersonOutline
                                    size={24}
                                    fill='#9E9EA7'
                                />
                            ) : section === 'curriculum' ? (
                                <FaRegBuilding size={24} fill='#9E9EA7' />
                            ) : (
                                <IoIosBriefcase size={24} fill='#9E9EA7' />
                            )}
                            <span className='text-shark-100 lg:hidden'>
                                {name}
                            </span>
                            <div className='invisible absolute left-12 hidden w-auto min-w-full transform whitespace-nowrap rounded bg-shark-200 px-2 py-1 text-xs font-semibold text-shark-900 transition-all ease-in-out group-hover:visible lg:block'>
                                {name}
                            </div>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
