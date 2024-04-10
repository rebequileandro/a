import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes';

export default function RouterOrganizer() {
  return (
    <Routes>
      {Object.keys(routes.bartender).map((route) => (
        <Routee path={route.url} element={route.element} />
      ))}
    </Routes>
  );
}