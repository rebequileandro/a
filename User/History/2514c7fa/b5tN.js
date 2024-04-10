import React from 'react';
import { Route } from 'react-router-dom';


export default function RoutesCashier() {
  return (
    <Routes>
      {Object.keys(routes).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </Routes>
  );
}