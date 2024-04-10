import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Loading } from '../../components/global/Loader/Loader';
const MyAccount = lazy(() => import('../global/MyAccount/MyAccount'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const NewClub = lazy(() => import('./NewClub/NewClub'));
const Activities = lazy(() => import('./Activities/Activities'));
const DetailsCategories = lazy(() => import('./Menu/Categories/DetailsCategories'));
const Menu = lazy(() => import('./Menu/Menu'));
const Club = lazy(() => import('./OrganizerSettings/Club/Club'));
const Clubs = lazy(() => import('./OrganizerSettings/Clubs/Clubs'));
const OrganizerSettings = lazy(() => import('./OrganizerSettings/OrganizerSettings'));
const EditRole = lazy(() => import('./OrganizerSettings/Roles/EditRole'));
const Roles = lazy(() => import('./OrganizerSettings/Roles/Roles'));
const SelectStatistics = lazy(() => import('./Statistics/SelectStatistics/SelectStatistics'));
const Statistics = lazy(() => import('./Statistics/Statistics'));
const StatisticsDetails = lazy(() => import('./Statistics/StatisticsDetails/StatisticsDetails'));
const Home = lazy(() => import('./Home/Home'));
const Inventory = lazy(() => import('./Inventory/Inventory'))
const CashRegister = lazy(() => import("./CashRegister/CashRegister"))

export default function RoutesOwner() {
    const routes = useRoutes([
        {
            path: '/:id',
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
            path: '/settings/club/:id',
            element: (
                <Suspense fallback={<Loading />}>
                    <Club />
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
            path: '/settings/cashier/:id',
            element: (
                <Suspense fallback={<Loading />}>
                    <EditRole role={"cashier"} />
                </Suspense>
            )
        },
        {
            path: '/settings/cashier/new',
            element: (
                <Suspense fallback={<Loading />}>
                    <EditRole role={"newCashier"} />
                </Suspense>
            )
        },
        {
            path: '/settings/menu/:id',
            element: (
                <Suspense fallback={<Loading />}>
                    <Menu />
                </Suspense>
            )
        },
        {
            path: '/settings/menu/:id/details',
            element: (
                <Suspense fallback={<Loading />}>
                    <DetailsCategories />
                </Suspense>
            )
        },
        {
            path: '/settings/cash/:id',
            element: (
                <Suspense fallback={<Loading />}>
                    <CashRegister />
                </Suspense>
            )
        },
        {
            path: '/settings/inventory/:id',
            element: (
                <Suspense fallback={<Loading />}>
                    <Inventory />
                </Suspense>
            )
        },
        {
            path: '*',
            element: <Navigate to='/' />
        }
    ])
    return routes
}