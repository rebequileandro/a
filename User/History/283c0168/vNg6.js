import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getCurrentUser } from '../../redux/store/slices/user';

export default function RoutesGlobal() {
  const currentUser = useSelector(getCurrentUser);

  return (
    <>
     {currentUser &&
        <Route exact path={routes.login.url} element={routes.login.element} />}
     {Object.keys(routes).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </>
  );
}