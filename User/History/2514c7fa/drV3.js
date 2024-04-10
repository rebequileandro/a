import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Loading } from '../../components/global/Loader/Loader';
const MyAccount = lazy(() => import('../global/MyAccount/MyAccount'));
const ComoPedir = lazy(() => import('../partyUser/Help/ComoPedir/ComoPedir'));
const ContactUs = lazy(() => import('../partyUser/Help/ContactUs/ContactUs'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const Home = lazy(() => import('./Home/Home'));

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