import { Tabbar } from './components';
import { useObserver } from './hooks';
import { AboutMe, Contact, Home, Projects } from './pages';

const App: React.FC = () => {
  const [inView, setReference, entries] = useObserver({
    root: null,
    threshold: 0.5
  });
  console.log('in view', inView);
  console.log('entry', entries);

  return (
    <>
      <Home reference={setReference} />
      <AboutMe reference={setReference} />
      <Projects />
      <Contact />
      <Tabbar inView="home" />
    </>
  );
};

export default App;
