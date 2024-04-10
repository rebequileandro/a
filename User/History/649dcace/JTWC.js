import React from 'react';
import { Route, Routes } from 'react-router-dom';
//import RouterOrganizers from './organizer';
import { routes } from './routes';

export default function RootRouter() {
  return (
    <Routes>
      {Object.keys(routes).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </Routes>
  );
}