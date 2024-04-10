import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { getCurrentUser } from '../redux/store/slices/user';

export default function RoutesOrganizer() {
  const currentUser = useSelector(getCurrentUser);

  return (
    <Routes>
      {Object.keys(routes).map((route) => (
        <Route exact path={route.url} element={route.element} />
      ))}
    </Routes>
  );
}