import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes'


export default function RoutesCashier() {
  return (
    <Routes>
      {Object.keys(routes.cashier.home).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </Routes>
  );
}