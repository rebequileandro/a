import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import routes from '../../models/routes.models';
const Orders = lazy(() => import('./Orders/Orders'))
const Scanner = lazy(() => import('./Scanner/Scanner'))
const Settings = lazy(() => import('../global/Settings/Settings'));
const MyAccount = lazy(() => import('../global/Settings/My_Account/My_Account'));
const PrivacyPolicies = lazy(() => import('../global/Settings/Privacy_Policies/Privacy_Policies'));
const TermsAndConditions = lazy(() => import('../global/Settings/Terms_And_Conditions/Terms_And_Conditions'));
const PersonalInformation = lazy(() => import('../global/Settings/My_Account/Edit_My_Account/Personal_Information'));
const MailAndNumber = lazy(() => import('../global/Settings/My_Account/Edit_My_Account/Mail_And_Number'));
const ChangePassword = lazy(() => import('../global/Settings/My_Account/Edit_My_Account/Change_Password'));
const Support = lazy(() => import('../global/Settings/Support/Support'))

export default function RoutesBartender({ socket }) {
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