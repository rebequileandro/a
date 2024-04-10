import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../../models/routes.models';
const MyAccount = lazy(() => import('../global/MyAccount/MyAccount'));
const ComoPedir = lazy(() => import('../global/Help/ComoPedir/ComoPedir'));
const ContactUs = lazy(() => import('../global/Help/ContactUs/ContactUs'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const Home = lazy(() => import('./Home/Home'));
const Help = lazy(() => import('../global/Help/Help'))

export default function RoutesCashier() {
  const routesCashier = useRoutes([
    {
      path: routes.cashier.home,
      element: <Home />
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
      path: routes.global.indications,
      element: <ComoPedir />
    },
    {
      path: routes.global.contact,
      element: <ContactUs />
    }
  ])
  return routesCashier;
}