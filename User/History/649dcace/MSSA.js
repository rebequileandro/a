import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes'

export default function RoutesOrganizer() {
  return (
    <Routes>
      {Object.keys(routes).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </Routes>
  );
}