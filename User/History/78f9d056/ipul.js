import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import routes from '../../models/routes.models';
const Orders = lazy(() => import('./Orders/Orders'))
const Scanner = lazy(() => import('./Scanner/Scanner'))
// const Settings = lazy(() => import('./Settings/Settings'))
// const MyAccount = lazy(() => import('./MyAccount/MyAccount'))
// const ComoPedir = lazy(() => import('../global/Help/ComoPedir/ComoPedir'))
// const ContactUs = lazy(() => import('../global/Help/ContactUs/ContactUs'))
// const Help = lazy(() => import('../global/Help/Help'))

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
      path: routes.global.personalInformation,
      element: <PersonalInformation />
    },
    {
      path: routes.global.mailAndNumber,
      element: <MailAndNumber />
    },
    {
      path: routes.global.changePassword,
      element: <ChangePassword />
    },
    {
      path: routes.global.support,
      element: <Support />
    },
    {
      path: routes.global.termsAndConditions,
      element: <TermsAndConditions />
    },
    {
      path: routes.global.privacyPolicies,
      element: <PrivacyPolicies />
    },
    {
      path: '*',
      element: <Navigate to="/" />
    }
  ])
  return routesBartender;
}