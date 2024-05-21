import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';

import { Logo } from './Logo';
import { Menu } from './Menu';

export const Navbar = () => {
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const toggleMenu = () => {
        setShowMenuMobile((state) => !state);
    };

    return (
        <nav
            id='navbar'
            className='fixed top-0 z-20 flex w-full justify-between border-b border-r border-shark-500 bg-shark-800 px-5 py-4 lg:h-screen lg:max-w-[73px] lg:flex-col lg:justify-center lg:border-b-0'
        >
            <span className='lg:absolute lg:top-5'>
                <Logo />
            </span>
            <button onClick={toggleMenu} className='z-10 lg:hidden'>
                {showMenuMobile ? <FaXmark size={25} /> : <FaBars size={25} />}
            </button>
            <Menu showMenu={showMenuMobile} toggleMenu={toggleMenu} />
        </nav>
    );
};
