import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import routes from '../../models/routes.models';
const StatisticsDetails = lazy(() => import('./Statistics/StatisticsDetails/StatisticsDetails'));
const DetailsCategories = lazy(() => import('./Menu/Categories/DetailsCategories'));
const SettingsSelection = lazy(() => import('./SettingsSelection/SettingsSelection'));
const SelectStatistics = lazy(() => import('./Statistics/SelectStatistics/SelectStatistics'));
const CashRegister = lazy(() => import("./CashRegister/CashRegister"))
const Statistics = lazy(() => import('./Statistics/Statistics'));
const Activities = lazy(() => import('./Activities/Activities'));
const Inventory = lazy(() => import('./Inventory/Inventory'))
const MyAccount = lazy(() => import('./MyAccount/MyAccount'));
const Settings = lazy(() => import('./Settings/Settings'));
const EditRole = lazy(() => import('./SettingsSelection/Roles/EditRole'));
const NewClub = lazy(() => import('./NewClub/NewClub'));
const Clubs = lazy(() => import('./SettingsSelection/Clubs/Clubs'));
const Roles = lazy(() => import('./SettingsSelection/Roles/Roles'));
const Menu = lazy(() => import('./Menu/Menu'));
const Club = lazy(() => import('./SettingsSelection/Club/Club'));
const Home = lazy(() => import('./Home/Home'));

export default function RoutesOwner() {
  const routesOwnew = useRoutes([
    {
      path: routes.owner.home,
      element: <Home />
    },
    {
      path: routes.owner.activities,
      element: <Activities />
    },
    {
      path: routes.owner.statistics,
      element: <SelectStatistics />
    },
    {
      path: `${routes.owner.statistics}/:id`,
      element: <Statistics />
    },
    {
      path: `${routes.owner.statisticsHistory}/:name/:type`,
      element: <StatisticsDetails />
    },
    {
      path: routes.owner.settingsSelection,
      element: <SettingsSelection />
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
      path: routes.owner.clubs,
      element: <Clubs />
    },
    {
      path: `${routes.owner.club}/:id`,
      element: <Club />
    },
    {
      path: routes.owner.newClub,
      element: <NewClub />
    },
    {
      path: routes.owner.allBartenders,
      element: <Roles role={"bartender"} />
    },
    {
      path: `${routes.owner.bartender}/:id`,
      element: <EditRole role={"bartender"} />
    },
    {
      path: routes.owner.newBartender,
      element: <EditRole role={"newBartender"} />
    },
    {
      path: routes.owner.allCashiers,
      element: <Roles role={"cashier"} />
    },
    {
      path: `${routes.owner.cashier}/:id`,
      element: <EditRole role={"cashier"} />
    },
    {
      path: routes.owner.newCashier,
      element: <EditRole role={"newCashier"} />
    },
    {
      path: routes.owner.unitManager,
      element: <EditRole role={"unitManager"} />
    },
    {
      path: `${routes.owner.menu}/:id`,
      element: <Menu />
    },
    {
      path: `${routes.owner.menu}/:id/details`,
      element: <DetailsCategories />
    },
    {
      path: `${routes.owner.cash}/:id`,
      element: <CashRegister />
    },
    {
      path: `${routes.owner.inventory}/:id`,
      element: <Inventory />
    },
    {
      path: '*',
      element: <Navigate to='/' />
    }
  ])
  return routesOwnew;
}