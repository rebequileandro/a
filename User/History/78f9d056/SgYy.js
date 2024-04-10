import React from 'react';
import { Route } from 'react-router-dom';

export default function RoutesBartender() {
  return (
    <>
      {Object.keys(routes.bartender).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </>
  );
}