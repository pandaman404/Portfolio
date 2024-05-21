export const Layout = ({ children }) => {
    return (
        <main className='mt-navbar container flex flex-col gap-40 text-wrap break-words px-8 py-20 lg:mt-0'>
            {children}
        </main>
    );
};
