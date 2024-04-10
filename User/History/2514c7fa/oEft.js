import React from 'react';
import { useRoutes } from 'react-router-dom';



export default function RoutesCashier() {
  const routes = useRoutes([
    {
      url: '/cashier/home',
      element: <Cashier />
    },
    {
      url: '/cashier/settings',
      element: <Settings />
    },
    {
      url: '/cashier/settings/account',
      element: <MyAccount />
    },
    {
      url: '/cashier/indications',
      element: <ComoPedir />
    },
    {
      url: '/cashier/contact-us',
      element: <ContactUs />
    }
  ])
  return routes;
}