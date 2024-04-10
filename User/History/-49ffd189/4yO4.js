import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
const DetailsCategories = lazy(() => import('./Menu/Categories/DetailsCategories'));
const StatisticsDetails = lazy(() => import('./Statistics/StatisticsDetails/StatisticsDetails'));
const SettingsSelection = lazy(() => import('./SettingsSelection/SettingsSelection'));
const SelectStatistics = lazy(() => import('./Statistics/SelectStatistics/SelectStatistics'));
const CashRegister = lazy(() => import("./CashRegister/CashRegister"))
const Statistics = lazy(() => import('./Statistics/Statistics'));
const Activities = lazy(() => import('./Activities/Activities'));
const MyAccount = lazy(() => import('../global/MyAccount/MyAccount'));
const Inventory = lazy(() => import('./Inventory/Inventory'))
const EditRole = lazy(() => import('./SettingsSelection/Roles/EditRole'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const NewClub = lazy(() => import('./NewClub/NewClub'));
const Clubs = lazy(() => import('./SettingsSelection/Clubs/Clubs'));
const Roles = lazy(() => import('./SettingsSelection/Roles/Roles'));
const Menu = lazy(() => import('./Menu/Menu'));
const Club = lazy(() => import('./SettingsSelection/Club/Club'));
const Home = lazy(() => import('./Home/Home'));

export default function RoutesOwner() {
    const routes = useRoutes([
        {
            path: '/:id',
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
            path: '/settings/club/:id',
            element: <Club />
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