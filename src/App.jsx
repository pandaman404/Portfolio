import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { About } from './components/About';
import { Experience } from './components/Experience';

export const App = () => {
    return (
        <>
            <Navbar />
            <Layout>
                <About />
                <Experience />
            </Layout>
        </>
    );
};
