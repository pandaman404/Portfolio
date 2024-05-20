import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from './Logo';
import { Menu } from './Menu';

export const Navbar = () => {
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const toggleMenuMobile = () => {
        setShowMenuMobile((state) => !state);
    };

    return (
        <nav className='border-shark-500 fixed top-0 flex w-full justify-between border-b border-r bg-shark-800 px-5 py-4 lg:h-screen lg:max-w-[73px] lg:flex-col lg:justify-center lg:border-b-0'>
            <span className='lg:absolute lg:top-5'>
                <Logo />
            </span>
            <button onClick={toggleMenuMobile} className='z-10 lg:hidden'>
                {showMenuMobile ? (
                    <XMarkIcon className='w-8' />
                ) : (
                    <Bars3Icon className='w-8' />
                )}
            </button>
            <Menu showMenu={showMenuMobile} />
        </nav>
    );
};
