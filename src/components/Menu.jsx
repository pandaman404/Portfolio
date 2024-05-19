import links from '../info';

export const Menu = ({ showMenu }) => {
    return (
        <ul
            id='menu'
            className={`${showMenu && 'open'} fixed right-0 top-0 flex h-screen w-full flex-col items-center gap-10 bg-shark-800 pt-56 md:relative md:h-auto md:w-auto md:flex-row md:bg-inherit md:pt-0`}
        >
            {links.map((link) => {
                const { name, section } = link;
                return (
                    <li
                        key={section}
                        className='text-shark-400 transition-all hover:text-shark-300'
                    >
                        <a href='#'>{name}</a>
                    </li>
                );
            })}
        </ul>
    );
};
