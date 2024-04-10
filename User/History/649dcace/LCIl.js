import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRoutes } from '../useRoutes'

export default function RoutesOrganizer() {
  const routes = useRoutes()
  return (
    <Routes>
      {Object.keys(routes.organizer.home).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </Routes>
  );
}