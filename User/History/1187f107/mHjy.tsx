// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { Recap, Tour } from './pages';

function Root() {
  // const [count, setCount] = useState(0);
  const root = useRoutes([
    {
      path: '/',
      element: <Recap />
    },
    {
      path: '/tour',
      element: <Tour />
    }
  ]);
  return root;
}

export default Root;
