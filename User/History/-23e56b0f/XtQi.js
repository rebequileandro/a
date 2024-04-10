import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Loading } from '../../components/global/Loader/Loader';
const StatisticsDetails = lazy(() => import('./Statistics/StatisticsDetails/StatisticsDetails'));
const DetailsCategories = lazy(() => import('./Menu/Categories/DetailsCategories'));
const SettingsSelection = lazy(() => import('./SettingsSelection/SettingsSelection'));
const SelectStatistics = lazy(() => import('./Statistics/SelectStatistics/SelectStatistics'));
const CashRegister = lazy(() => import("./CashRegister/CashRegister"))
const Statistics = lazy(() => import('./Statistics/Statistics'));
const Activities = lazy(() => import('./Activities/Activities'));
const Inventory = lazy(() => import('./Inventory/Inventory'))
const MyAccount = lazy(() => import('../global/MyAccount/MyAccount'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const EditRole = lazy(() => import('./SettingsSelection/Roles/EditRole'));
const NewClub = lazy(() => import('./NewClub/NewClub'));
const Clubs = lazy(() => import('./SettingsSelection/Clubs/Clubs'));
const Roles = lazy(() => import('./SettingsSelection/Roles/Roles'));
const Menu = lazy(() => import('./Menu/Menu'));
const Club = lazy(() => import('./SettingsSelection/Club/Club'));
const Home = lazy(() => import('./Home/Home'));

export default function RoutesOwner() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/activities',
      element: <Activities />
    },
    {
      path: '/statistics',
      element: <SelectStatistics />
    },
    {
      path: '/statistics/:id',
      element: <Statistics />
    },
    {
      path: "/statistics-history/:name/:type",
      element: <StatisticsDetails />
    },
    {
      path: '/settings',
      element: <SettingsSelection />
    },
    {
      path: "settings/account",
      element: <Settings />
    },
    {
      path: "/account",
      element: <MyAccount />
    },
    {
      path: '/settings/clubs',
      element: <Clubs />
    },
    {
      path: '/settings/club/:id',
      element: <Club />
    },
    {
      path: '/settings/new-club',
      element: <NewClub />
    },
    {
      path: '/settings/bartendes',
      element: <Roles role={"bartender"} />
    },
    {
      path: '/settings/bartender/:id',
      element: <EditRole role={"bartender"} />
    },
    {
      path: '/settings/bartender/new',
      element: <EditRole role={"newBartender"} />
    },
    {
      path: '/settings/cashiers',
      element: <Roles role={"cashier"} />
    },
    {
      path: '/settings/cashier/:id',
      element: <EditRole role={"cashier"} />
    },
    {
      path: '/settings/cashier/new',
      element: <EditRole role={"newCashier"} />
    },
    {
      path: '/settings/unit-manager',
      element: <EditRole role={"unitManager"} />
    },
    {
      path: '/settings/menu/:id',
      element: <Menu />
    },
    {
      path: '/settings/menu/:id/details',
      element: <DetailsCategories />
    },
    {
      path: '/settings/cash/:id',
      element: <CashRegister />
    },
    {
      path: '/settings/inventory/:id',
      element: <Inventory />
    },
    {
      path: '*',
      element: <Navigate to='/' />
    }
  ])
  return routes
}