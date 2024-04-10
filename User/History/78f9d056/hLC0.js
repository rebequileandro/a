import React from 'react';
import { Route, useRoutes } from 'react-router-dom';
import { routes } from '../routes'

export default function RoutesBartender() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Orders />
    },
    {
      path: '/scanner',
      element: <Scanner />
    },
    {
      path: '/settings',
      element: <Settings />
    },
    {
      path: '/settings/account',
      element: <MyAccount />
    },
    {
      path: '/indications',
      element: <ComoPedir />
    },
    {
      path: '/contact-us',
      element: <ContactUs />
    }

  ])
  return routes;
}