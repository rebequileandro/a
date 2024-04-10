import { useRoutes } from 'react-router-dom';
import { CV, Landing, NotFound } from './pages';
import Main from './pages/Main';

const App: React.FC = () => {
  const root = useRoutes([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/App',
      element: <Main />
    },
    {
      path: '/leandro-rebequi-cv',
      element: <CV />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
  return root;
};

export default App;
