import { MdOutlinePersonOutline } from 'react-icons/md';
import { FaRegBuilding } from 'react-icons/fa';
import { IoIosBriefcase } from 'react-icons/io';
import { links } from '../info';
import { useRef } from 'react';
import { scrollToTop, scrollIntoViewWithOffset } from '../utils/scroll';

const FIRST_SECTION = 'about';
const ICON_FILL = '#9E9EA7';

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
            ref={ulRef}
            onClick={scrollToSection}
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
                                    className='pointer-events-none'
                                    size={24}
                                    fill={ICON_FILL}
                                />
                            ) : section === 'curriculum' ? (
                                <FaRegBuilding
                                    size={24}
                                    fill={ICON_FILL}
                                    className='pointer-events-none'
                                />
                            ) : (
                                <IoIosBriefcase
                                    size={24}
                                    fill={ICON_FILL}
                                    className='pointer-events-none'
                                />
                            )}
                            <span className='pointer-events-none text-shark-100 lg:hidden'>
                                {name}
                            </span>
                            <div className='pointer-events-none invisible absolute left-12 hidden w-auto min-w-full transform whitespace-nowrap rounded bg-shark-200 px-2 py-1 text-xs font-semibold text-shark-900 transition-all ease-in-out group-hover:visible lg:block'>
                                {name}
                            </div>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
