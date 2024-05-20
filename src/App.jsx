import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { About } from './components/About';

export const App = () => {
    return (
        <>
            <Navbar />
            <Layout>
                <About />
            </Layout>
        </>
    );
};
