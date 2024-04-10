import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Loading } from '../../components/global/Loader/Loader';
const MyAccount = lazy(() => import('../global/MyAccount/MyAccount'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const newClub = lazy(() => import('./newClub/newClub'));
const Activities = lazy(() => import('./OrganizerActivities/OrganizerActivities'));
const DetailsCategories = lazy(() => import('./OrganizerMenu/Categories/DetailsCategories'));
const OrganizerMenu = lazy(() => import('./OrganizerMenu/OrganizerMenu'));
const Club = lazy(() => import('./OrganizerSettings/Club/Club'));
const Clubs = lazy(() => import('./OrganizerSettings/Clubs/Clubs'));
const OrganizerSettings = lazy(() => import('./OrganizerSettings/OrganizerSettings'));
const EditRole = lazy(() => import('./OrganizerSettings/Roles/EditRole'));
const Roles = lazy(() => import('./OrganizerSettings/Roles/Roles'));
const SelectStatistics = lazy(() => import('./Statistics/SelectStatistics/SelectStatistics'));
const Statistics = lazy(() => import('./Statistics/Statistics'));
const StatisticsDetails = lazy(() => import('./Statistics/StatisticsDetails/StatisticsDetails'));
const  OrganizerHome = lazy(() => import('./OrganizerHome/OrganizerHome'));


export default function RoutesOwner() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<Loading />}>
          <OrganizerHome />
        </Suspense>
      )
    },
    {
      path: '/activities',
      element: (
        <Suspense fallback={<Loading />}>
          <Activities />
        </Suspense>
      )
    },
    {
      path: '/statistics',
      element: (
        <Suspense fallback={<Loading />}>
          <SelectStatistics />
        </Suspense>
      )
    },
    {
      path: '/statistics/:id',
      element: (
        <Suspense fallback={<Loading />}>
          <Statistics />
        </Suspense>
      )
    },
    {
      path: "/statistics-history/:name/:type",
      element: (
        <Suspense fallback={<Loading />}>
          <StatisticsDetails />
        </Suspense>
      )
    },
    {
      path: '/settings',
      element: (
        <Suspense fallback={<Loading />}>
          <OrganizerSettings />
        </Suspense>
      )
    },
    {
      path: "settings/account",
      element: (
        <Suspense fallback={<Loading />}>
          <Settings />
        </Suspense>
      )
    },
    {
      path: "/account",
      element: (
        <Suspense fallback={<Loading />}>
          <MyAccount />
        </Suspense>
      )
    },
    {
      path: '/settings/clubs',
      element: (
        <Suspense fallback={<Loading />}>
          <Clubs />
        </Suspense>
      )
    },
    {
      path: '/settings/club/:id',
      element: (
        <Suspense fallback={<Loading />}>
          <Club />
        </Suspense>
      )
    },
    {
      path: '/settings/new-club',
      element: (
        <Suspense fallback={<Loading />}>
          <newClub />
        </Suspense>
      )
    },
    {
      path: '/settings/bartendes',
      element: (
        <Suspense fallback={<Loading />}>
          <Roles role={"bartender"} />
        </Suspense>
      )
    },
    {
      path: '/settings/bartender/:id',
      element: (
        <Suspense fallback={<Loading />}>
          <EditRole role={"bartender"} />
        </Suspense>
      )
    },
    {
      path: '/settings/bartender/new',
      element: (
        <Suspense fallback={<Loading />}>
          <EditRole role={"newBartender"} />
        </Suspense>
      )
    },
    {
      path: '/settings/cashiers',
      element: (
        <Suspense fallback={<Loading />}>
          <Roles role={"cashier"} />
        </Suspense>
      )
    },
    {
      path: '/cashier/:id',
      element: (
        <Suspense fallback={<Loading />}>
          <EditRole role={"cashier"} />
        </Suspense>
      )
    },
    {
      path: '/cashier/new',
      element: (
        <Suspense fallback={<Loading />}>
          <EditRole role={"newCashier"} />
        </Suspense>
      )
    },
    {
      path: '/unit-manager',
      element: (
        <Suspense fallback={<Loading />}>
          <EditRole role={"unitManager"} />
        </Suspense>
      )
    },
    {
      path: '/menu/:id',
      element: (
        <Suspense fallback={<Loading />}>
          <OrganizerMenu />
        </Suspense>
      )
    },
    {
      path: '/menu/:id/details',
      element: (
        <Suspense fallback={<Loading />}>
          <DetailsCategories />
        </Suspense>
      )
    }
  ])
  return routes
}