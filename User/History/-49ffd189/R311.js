import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import routes from '../../models/routes.models';
const DetailsCategories = lazy(() => import('./Menu/Categories/DetailsCategories'));
const StatisticsDetails = lazy(() => import('./Statistics/StatisticsDetails/StatisticsDetails'));
const CashRegister = lazy(() => import("./CashRegister/CashRegister"))
const Statistics = lazy(() => import('./Statistics/Statistics'));
const Inventory = lazy(() => import('./Inventory/Inventory'))
const EditRole = lazy(() => import('./SettingsSelection/Roles/EditRole'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const MyAccount = lazy(() => import('../global/Settings/My_Account/My_Account'));
const Roles = lazy(() => import('./SettingsSelection/Roles/Roles'));
const Menu = lazy(() => import('./Menu/Menu'));
const Club = lazy(() => import('./SettingsSelection/Club/Club'));

export default function RoutesOwner() {
    const routesManager = useRoutes([
        {
            path: `${routes.owner.statistics}/:id`,
            element: <Statistics />
        },
        {
            path: `${routes.owner.statisticsHistory}/:name/:type`,
            element: <StatisticsDetails />
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
            path: `${routes.owner.club}/:id`,
            element: <Club />
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
    return routesManager;
}