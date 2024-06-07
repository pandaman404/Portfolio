import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { ProjectsList } from './components/ProjectsList';

export const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <About />
        <Resume />
        <ProjectsList />
      </Layout>
    </>
  );
};
