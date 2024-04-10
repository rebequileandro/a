import React, { lazy, useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import routes from '../../models/routes.models';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/slices/global/user';
import { httpGetClubById } from '../../redux/slices/partyUser/club';
import { setMethod } from '../../redux/slices/partyUser/checkout';
import cashIcon from '../../assets/icons/Checkout/cash.svg';

const Pos = lazy(() => import('./Pos/Pos'));
const Home = lazy(() => import('./Home/Home'));
const Faq = lazy(() => import('../global/FAQ/Faq'));
const Settings = lazy(() => import('../global/Settings/Settings'));
const CartCashier = lazy(() => import('./Pos/Cart/CartCashier'));
const CheckoutCashier = lazy(() => import('./Pos/Checkout/CheckoutCashier'));
const PaymentMethod = lazy(() =>
  import('./Pos/Checkout/PaymentMethod/PaymentMethodCashier')
);
const CheckoutFinalForm = lazy(() =>
  import('./Pos/Checkout/FinalForm/CheckoutFinalForm')
);
const MarketplaceSection = lazy(() =>
  import('../../components/global/Products_Categories/SectionDetails')
);
const MyAccount = lazy(() =>
  import('../global/Settings/My_Account/My_Account')
);
const PrivacyPolicies = lazy(() =>
  import('../global/Settings/Privacy_Policies/Privacy_Policies')
);
const TermsAndConditions = lazy(() =>
  import('../global/Settings/Terms_And_Conditions/Terms_And_Conditions')
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
const ChargePoint = lazy(() => import('./ChargePoint/ChargePoint'));
const ReturnPoint = lazy(() => import('./ReturnPoints/ReturnPoints'));
const Orders = lazy(() => import('./Orders/Orders'));


export default function RoutesCashier({ socket }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(httpGetClubById(currentUser.idParty));
    dispatch(setMethod({ name: 'cash', icon: cashIcon }));
  }, []);

  const routesCashier = useRoutes([
    {
      path: routes.cashier.home,
      element: <Home socket={socket} />
    },
    {
      path: routes.cashier.orders,
      element: <Orders socket={socket} />
    },
    {
      path: routes.cashier.pos,
      element: <Pos />
    },
    {
      path: routes.cashier.marketplaceSection,
      element: <MarketplaceSection />
    },
    {
      path: routes.cashier.cart,
      element: <CartCashier />
    },
    {
      path: routes.cashier.checkout,
      element: <CheckoutCashier socket={socket} />
    },
    {
      path: routes.cashier.checkoutFinalForm,
      element: <CheckoutFinalForm socket={socket} />
    },
    {
      path: routes.global.settings,
      element: <Settings />
    },
    {
      path: routes.cashier.paymentMethod,
      element: <PaymentMethod />
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
      path: `${routes.cashier.chargePoints}/:id`,
      element: <ChargePoint />
    },
    {
      path: `${routes.cashier.returnPoints}/:id`,
      element: <ReturnPoint />
    },
    {
      path: '*',
      element: <Navigate to="/" />
    }
  ]);
  return routesCashier;
}
