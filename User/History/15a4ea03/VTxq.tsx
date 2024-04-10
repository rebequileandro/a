import { useState } from 'react';
import { LightBlue, LightCyan, Tabbar } from './components';
import { AboutMe, Contact, Home, Projects } from './pages';

const App: React.FC = () => {
  const [inView, serInView] = useState<string>('home');

  return (
    <>
      <Home serInView={serInView} />
      <LightBlue position={'start'} />
      <AboutMe serInView={serInView} />
      <Projects serInView={serInView} />
      <LightBlue position={'end'} />
      <Contact serInView={serInView} />
      <LightBlue position={'center'} />
      <Tabbar inView={inView} />
    </>
  );
};

export default App;
