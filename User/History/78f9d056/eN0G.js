import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
const Orders = lazy(() => import('./Orders/Orders'))
const Scanner = lazy(() => import('./Scanner/Scanner'))
const Settings = lazy(() => import('../global/Settings/Settings'))
const MyAccount = lazy(() => import('../global/MyAccount/MyAccount'))
const ComoPedir = lazy(() => import('../partyUser/Help/ComoPedir/ComoPedir'))
const ContactUs = lazy(() => import('../partyUser/Help/ContactUs/ContactUs'))


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