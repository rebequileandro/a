import { Tabbar } from './components';
import { useObserver } from './hooks';
import { AboutMe, Contact, Home, Projects } from './pages';

const App: React.FC = () => {
  const [inView, setReference] = useObserver({
    root: null,
    threshold: 0.5
  });
  console.log('in view', inView);
  // console.log('entries', entries);

  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Tabbar inView="home" />
    </>
  );
};

export default App;
