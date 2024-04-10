import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export default function RoutesGlobal() {
  const currentUser = useSelector(getCurrentUser);

  return (
    <Routes>
      {Object.keys(routes).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </Routes>
  );
}