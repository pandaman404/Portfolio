export const Layout = ({ children, style }) => {
    return <div className={`container relative flex ${style}`}>{children}</div>;
};
