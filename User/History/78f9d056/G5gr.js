import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Loading } from '../../components/global/Loader/Loader';
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
      element: (
        <Suspense fallback={<Loading />}>
          <Orders />
        </Suspense>
      )
    },
    {
      path: '/scanner',
      element: (
        <Suspense fallback={<Loading />}>
          <Scanner />
        </Suspense>
      )
    },
    {
      path: '/settings',
      element: (
        <Suspense fallback={<Loading />}>
          <Settings />
        </Suspense>
      )
    },
    {
      path: '/settings/account',
      element: (
        <Suspense fallback={<Loading />}>
          <MyAccount />
        </Suspense>
      )
    },
    {
      path: '/indications',
      element: (
        <Suspense fallback={<Loading />}>
          <ComoPedir />
        </Suspense>
      )
    },
    {
      path: '/contact-us',
      element: (
        <Suspense fallback={<Loading />}>
          <ContactUs />
        </Suspense>
      )
    }
  ])
  return (
    {
      routes
    }
  );
}