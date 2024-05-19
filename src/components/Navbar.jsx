import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Layout } from './Layout';
import { Logo } from './Logo';
import { Menu } from './Menu';

export const Navbar = () => {
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const toggleMenuMobile = () => {
        setShowMenuMobile((state) => !state);
    };

    return (
        <nav className='fixed top-0 w-full border-b border-shark-800 bg-shark-900'>
            <Layout style='items-center justify-between px-7 py-8 xl:px-0'>
                <Logo />
                <button onClick={toggleMenuMobile} className='z-10 md:hidden'>
                    {showMenuMobile ? (
                        <XMarkIcon className='w-8' />
                    ) : (
                        <Bars3Icon className='w-8' />
                    )}
                </button>
                <Menu showMenu={showMenuMobile} />
            </Layout>
        </nav>
    );
};
