import React from 'react';
import { useRoutes } from 'react-router-dom';
import MyAccount from '../global/MyAccount/MyAccount';
import Settings from '../global/Settings/Settings';
import ComoPedir from '../partyUser/Help/ComoPedir/ComoPedir';
import ContactUs from '../partyUser/Help/ContactUs/ContactUs';



export default function RoutesCashier() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
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