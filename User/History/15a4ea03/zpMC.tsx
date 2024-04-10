import { Tabbar } from './components';
import { useObserver } from './hooks';
import { AboutMe, Contact, Home, Projects } from './pages';

const App: React.FC = () => {
  const [inView, setReference, entries] = useObserver({
    root: null,
    threshold: 0.5
  });
  // console.log('in view', inView);
  // console.log('entries', entries);

  return (
    <>
      <Home reference={setReference} entries={entries} />
      <AboutMe reference={setReference} entries={entries} />
      <Projects />
      <Contact />
      <Tabbar inView="home" />
    </>
  );
};

export default App;
