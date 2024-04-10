import React from 'react';
import { Route } from 'react-router-dom';
import { useRoutes } from '../useRoutes'

export default function RoutesBartender() {
  const routes = useRoutes()
  return (
    <>
      {Object.keys(routes.bartender).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </>
  );
}