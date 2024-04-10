import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export default function RoutesBartender() {
  return (
    <>
      {Object.keys(routes.bartender).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </>
  );
}