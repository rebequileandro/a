import React from 'react';
import { Routes } from 'react-router-dom';
import { routes } from '../routes';

export default function RouterOrganizer() {
  return (
    <Routes>
      {Object.keys(routes.cashier).map((route) => (
        <Route path={route.url} element={route.element} />
      ))}
    </Routes>
  );
}