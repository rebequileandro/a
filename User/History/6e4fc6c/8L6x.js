import React, { lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useRoutes } from 'react-router-dom';
import { getCurrentClub } from '../../redux/slices/partyUser/club';
import routes from '../../models/routes.models';
import OrderDetails from './OrderDetails/OrderDetails';
import {
  deliverOrder,
  getOrder,
  orderTimeout,
  ORDER_STATUS,
  updateIntervalID,
  updateTimeLeft
} from '../../redux/slices/partyUser/order';
const Home_events_fiestero = lazy(() => import('./Home-events-fiestero/Home_events_fiestero.jsx'))
const SearchClub = lazy(() => import('./SearchClub/SearchClub'));
const Marketplace = lazy(() => import('./Marketplace/Marketplace'));
const SectionDetails = lazy(() =>
  import('../../components/global/Products_Categories/SectionDetails.jsx')
);
const Cart = lazy(() => import('./Cart/Cart'));
const Checkout = lazy(() => import('./Checkout/Checkout'));
const QrCash = lazy(() => import('./Checkout/QrCash/QrCash'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const MyAccount = lazy(() => import('../global/Settings/My_Account/My_Account'));
const PersonalInformation = lazy(() => import('../global/Settings/My_Account/Edit_My_Account/Personal_Information'))
const MailAndNumber = lazy(() => import("../global/Settings/My_Account/Edit_My_Account/Mail_And_Number"))
const MyActivities = lazy(() => import('./MyActivities/MyActivities'));
// const OrderDetails = lazy(() => import('./OrderDetails/OrderDetails'));
const Help = lazy(() => import('./Help/Help'));
const ComoPedir = lazy(() => import('./Help/ComoPedir/ComoPedir'));
const ContactUs = lazy(() => import('./Help/ContactUs/ContactUs'));
const BrowseEvents = lazy(() => import("./Home-events-fiestero/VerMas-events/VerMas_events"))
const { PAYMENT_PENDING } = ORDER_STATUS;
const Notifications = lazy(() => import('../global/Notifications/Notifications'))

export default function RoutesPartyUser() {
  const order = useSelector(getOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    order?.forEach((ord) => {
      if (ord?.status === PAYMENT_PENDING) {
        const { timestamp } = ord;

        const intervalID = setInterval(() => {
          const newNow = new Date().getTime();
          const timeLeft =
            orderTimeout - Math.floor((newNow - timestamp) / 1000);

          if (timeLeft >= 0) {
            dispatch(updateTimeLeft({ timeLeft, id: ord.id }));
          } else if (timeLeft < 0) {
            dispatch(deliverOrder(ord.id));
            clearInterval(intervalID);
          }
        }, 1000);

        dispatch(updateIntervalID({ id: ord.id, intervalID }));
      }
    });
  }, []);

  const currentClub = useSelector(getCurrentClub);

  const routesPartyUser = useRoutes([
    {
      path: routes.partyUser.home,
      element: <Home_events_fiestero />
    },
    {
      path: routes.partyUser.browseEvents,
      element: <BrowseEvents />
    },
    {
      path: routes.partyUser.marketplace,
      element: <Marketplace />
    },
    {
      path: routes.partyUser.marketplaceSection,
      element: <SectionDetails />
    },
    {
      path: routes.partyUser.cart,
      element: <Cart />
    },
    {
      path: routes.partyUser.checkout,
      element: <Checkout />
    },
    {
      path: `${routes.partyUser.checkout}/:id/:order`,
      element: <QrCash />
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
      path: routes.partyUser.activities,
      element: <MyActivities />
    },
    {
      path: routes.partyUser.order,
      element: <OrderDetails />
    },
    {
      path: `${routes.partyUser.order}/:id`,
      element: <OrderDetails />
    },
    {
      path: routes.global.help,
      element: <Help />
    },
    {
      path: routes.global.indications,
      element: <ComoPedir />
    },
    {
      path: routes.global.contact,
      element: <ContactUs />
    },
    {
      path: routes.global.notifications,
      element: <Notifications />
    },
    {
      path: '*',
      element: <Navigate to="/" />
    }
  ]);
  return routesPartyUser;
}
