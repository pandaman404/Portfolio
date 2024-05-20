export const Layout = ({ children }) => {
    return (
        <main className='mt-navbar container flex flex-col text-wrap break-words px-8 lg:mt-0'>
            {children}
        </main>
    );
};
