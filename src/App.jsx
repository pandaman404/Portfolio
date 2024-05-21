import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';

export const App = () => {
    return (
        <>
            <Navbar />
            <Layout>
                <About />
                <Resume />
                <Projects />
            </Layout>
        </>
    );
};
