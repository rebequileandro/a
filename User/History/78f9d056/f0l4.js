import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../../models/routes.models';
const Orders = lazy(() => import('./Orders/Orders'))
const Scanner = lazy(() => import('./Scanner/Scanner'))
const Settings = lazy(() => import('../global/Settings/Settings'))
const MyAccount = lazy(() => import('../global/MyAccount/MyAccount'))
const ComoPedir = lazy(() => import('../global/Help/ComoPedir/ComoPedir'))
const ContactUs = lazy(() => import('../global/Help/ContactUs/ContactUs'))
const Help = lazy(() => import('../global/Help/Help'))

export default function RoutesBartender() {
  const routesBartender = useRoutes([
    {
      path: routes.bartender.home,
      element: <Orders />
    },
    {
      path: routes.bartender.scanner,
      element: <Scanner />
    },
    {
      path: routes.global.settings,
      element: <Settings />
    },
    {
      path: routes.global.account,
      element: <MyAccount />
    },
    {
      path: routes.global.help,
      element: <Help />
    },
    {
      path: routes.global.indications,
      element: <ComoPedir />
    },
    {
      path: routes.global.contact,
      element: <ContactUs />
    }
  ])
  return routesBartender;
}