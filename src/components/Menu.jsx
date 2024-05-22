import { MdOutlinePersonOutline } from 'react-icons/md';
import { FaRegBuilding } from 'react-icons/fa';
import { IoIosBriefcase } from 'react-icons/io';
import { links } from '../info';
import { useRef } from 'react';
import { scrollToTop, scrollIntoViewWithOffset } from '../utils/scroll';

const FIRST_SECTION = 'about';

export const Menu = ({ showMenu, toggleMenu }) => {
    const ulRef = useRef(null);

    const getMenuMobileIsOpen = () => {
        if (ulRef && ulRef.current.classList) {
            const menuMobileIsOpen = [...ulRef.current.classList].some(
                (c) => c === 'open',
            );

            if (menuMobileIsOpen) {
                return true;
            }

            return false;
        }

        return false;
    };

    const scrollToSection = (event) => {
        event.preventDefault();

        const target = event.target;
        const id = target.getAttribute('href').replace('#', '');

        const menuIsOpen = getMenuMobileIsOpen();

        if (menuIsOpen) {
            toggleMenu();
        }

        if (id === FIRST_SECTION) {
            return scrollToTop();
        }

        return scrollIntoViewWithOffset(id, 20);
    };

    return (
        <ul
            id='menu'
            ref={ulRef}
            onClick={scrollToSection}
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
                            className='group relative flex items-center justify-center gap-3 rounded transition-all lg:h-10 lg:w-10 lg:hover:bg-shark-500'
                        >
                            {section === 'about' ? (
                                <MdOutlinePersonOutline
                                    className='pointer-events-none fill-shark-400 transition-all group-hover:fill-shark-200'
                                    size={24}
                                />
                            ) : section === 'curriculum' ? (
                                <FaRegBuilding
                                    size={24}
                                    className='pointer-events-none fill-shark-400 transition-all group-hover:fill-shark-200'
                                />
                            ) : (
                                <IoIosBriefcase
                                    size={24}
                                    className='pointer-events-none fill-shark-400 transition-all group-hover:fill-shark-200'
                                />
                            )}
                            <span className='pointer-events-none text-shark-100 transition-all group-hover:fill-shark-200 lg:hidden'>
                                {name}
                            </span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
