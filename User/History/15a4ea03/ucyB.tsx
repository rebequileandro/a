import { Tabbar } from './components';
import { useObserver } from './hooks';
import { AboutMe, Contact, Home, Projects } from './pages';

const App: React.FC = () => {
  const [inView, ref, entries] = useObserver({
    root: null,
    threshold: 0.5
  });
  console.log(inView);

  return (
    <>
      <Home reference={ref} />
      <AboutMe reference={ref} />
      <Projects />
      <Contact />
      <Tabbar inView="home" />
    </>
  );
};

export default App;
