import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([{ path: '*', Component: Root }]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
