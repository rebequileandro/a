import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Recap, Tour } from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: '/recap',
        element: <Recap />
        // loader: teamLoader,
      },
      {
        path: '/tour',
        element: <Tour />
        // loader: teamLoader,
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
