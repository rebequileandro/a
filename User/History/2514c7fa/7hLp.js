import React from 'react';
import { useRoutes } from 'react-router-dom';



export default function RoutesCashier() {
  const routes = useRoutes([
    {
      path: '/cashier/home',
      element: <Cashier />
    },
    {
      path: '/cashier/settings',
      element: <Settings />
    },
    {
      path: '/cashier/settings/account',
      element: <MyAccount />
    },
    {
      path: '/cashier/indications',
      element: <ComoPedir />
    },
    {
      path: '/cashier/contact-us',
      element: <ContactUs />
    }
  ])
  return routes;
}