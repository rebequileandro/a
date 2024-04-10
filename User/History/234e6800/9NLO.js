import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import routes from '../../models/routes.models';

import Formpruebamp from './Checkout/Form-prueba-mp';
import OrderDetails from './OrderDetails/OrderDetails';
// import { getOrder } from '../../redux/slices/partyUser/order';
// import ORDER_STATUS from '../../models/order-stages.model';

const Faq = lazy(() => import('../global/FAQ/Faq'));
const Home_events_fiestero = lazy(() =>
  import('./Home-events-fiestero/Home_events_fiestero.jsx')
);
// const SearchClub = lazy(() => import('./SearchClub/SearchClub'));
const Marketplace = lazy(() => import('./Marketplace/Marketplace'));
const SectionDetails = lazy(() =>
  import('../../components/global/Products_Categories/SectionDetails.jsx')
);
const Cart = lazy(() => import('./Cart/Cart'));
const Checkout = lazy(() => import('./Checkout/Checkout'));
const QrCash = lazy(() => import('./Checkout/QrCash/QrCash'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const MyAccount = lazy(() =>
  import('../global/Settings/My_Account/My_Account')
);
const PersonalInformation = lazy(() =>
  import('../global/Settings/My_Account/Edit_My_Account/Personal_Information')
);
const MailAndNumber = lazy(() =>
  import('../global/Settings/My_Account/Edit_My_Account/Mail_And_Number')
);
const ChangePassword = lazy(() =>
  import('../global/Settings/My_Account/Edit_My_Account/Change_Password')
);
const Support = lazy(() => import('../global/Settings/Support/Support'));
const PrivacyPolicies = lazy(() =>
  import('../global/Settings/Privacy_Policies/Privacy_Policies')
);
const TermsAndConditions = lazy(() =>
  import('../global/Settings/Terms_And_Conditions/Terms_And_Conditions')
);
const MyActivities = lazy(() => import('./MyActivities/MyActivities'));
// const OrderDetails = lazy(() => import('./OrderDetails/OrderDetails'));
const Help = lazy(() => import('./Help/Help'));
const ComoPedir = lazy(() => import('./Help/ComoPedir/ComoPedir'));
const ContactUs = lazy(() => import('./Help/ContactUs/ContactUs'));
const BrowseEvents = lazy(() =>
  import('./Home-events-fiestero/VerMas-events/VerMas_events')
);
// const { PAYMENT_PENDING } = ORDER_STATUS;
const Notifications = lazy(() =>
  import('../global/Notifications/Notifications')
);
const PaymentMethod = lazy(() =>
  import('./Checkout/Payment_Method/Payment_Method')
);
const PaymentMethodSettings = lazy(() =>
  import('../global/Settings/Payment_Method/Payment_Method_Settings')
);
const NewCard = lazy(() =>
  import('../global/Settings/Payment_Method/New_Card/New_Card')
);

const DeliveryMethods = lazy(() => import('./Checkout/DeliveryMethods/DeliveryMethods'));
const Points = lazy(() => import('./Points/Points'));

export default function RoutesPartyUser({ socket }) {
  // const order = useSelector(getOrder);
  // const dispatch = useDispatch();

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
      element: <Checkout socket={socket} />
    },
    {
      path: routes.partyUser.paymentMethod,
      element: <PaymentMethod />
    },
    {
      path: routes.partyUser.barPage,
      element: <DeliveryMethods />
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
      path: routes.global.faq,
      element: <Faq />
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
      path: routes.global.privacyPolicies,
      element: <PrivacyPolicies />
    },
    {
      path: routes.global.termsAndConditions,
      element: <TermsAndConditions />
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
      path: routes.global.support,
      element: <Support />
    },
    {
      path: routes.partyUser.paymentMethodSettings,
      element: <PaymentMethodSettings />
    },
    {
      path: routes.partyUser.newCard,
      element: <NewCard />
    },
    {
      path: routes.global.notifications,
      element: <Notifications />
    },
    {
      path: routes.partyUser.pointCharge,
      element: <Points action="charge" />
    },
    {
      path: routes.partyUser.pointReturn,
      element: <Points action="return" />
    },
    {
      path: '/formMp',
      element: <Formpruebamp />
    },
    {
      path: '*',
      element: <Navigate to="/" />
    }
  ]);
  return routesPartyUser;
}
