import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoutesOwner from './owner-manager/indexOwner';
import RoutesManager from './owner-manager/indexManager';
import RoutesPartyUser from './partyUser';
import RoutesBartender from './bartender';
import RoutesCashier from './cashier';
import { getCurrentUser } from '../redux/slices/global/user';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Loading } from '../components/global/Loader/Loader';
import Login from './global/Login/Login';
import LoginWithEmail from './global/Login/LoginWithEmail/LoginWithEmail';
import ForgotPassword from './global/Login/ForgotPassword/ForgotPassword';
import routes from '../models/routes.models';
import { SocketReques } from '../components/partyUser/Socket/SocketReques';
import VerificationPage from './global/Login/VerificationPage/VerificationPage';
import ChangePasswordForm from './global/Login/ForgotPassword/ChangePasswordForm/ChangePasswordForm';
import { subscriptionNotification } from '../redux/slices/global/notifications';
import { urlBase64ToUint8Array } from '../utils/urlBase64';
import TermsAndConditions from './global/Settings/Terms_And_Conditions/Terms_And_Conditions';
import PrivacyPolicies from './global/Settings/Privacy_Policies/Privacy_Policies';

export default function RootRouter({ socket }) {
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [readedPrivacyPolicy, setReadedPrivacyPolicy] = useState(false);
  useEffect(() => {
    (async () => {
      if (currentUser) {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            process.env.REACT_APP_PUBLIC_VAPID_KEY
          )
        });
        dispatch(
          subscriptionNotification(currentUser._id, subscription)
        );
      }
    })();
  }, [currentUser]);

  useEffect(() => {
    if (window.localStorage.getItem('idOrderMercadoPago')) {
      navigate(routes.partyUser.checkout);
    }
  }, []);
  console.log("USER ACTIVATION", navigator.userActivation)
  return (
    <>
      {!currentUser ? (
        <Routes>
          <Route
            path={`${routes.global.setTeamPassword}/:idUser`}
            element={<ChangePasswordForm />}
          />
          <Route path={routes.global.login} element={<Login />} />
          <Route
            path={routes.global.loginWithEmail}
            element={
              <LoginWithEmail
                readedPrivacyPolicy={readedPrivacyPolicy}
                setReadedPrivacyPolicy={setReadedPrivacyPolicy}
              />
            }
          />
          <Route
            path={routes.global.forgotPassword + '/:method'}
            element={<ForgotPassword />}
          />
          <Route
            path={routes.global.updatePassword + '/:idUser/:token/'}
            element={<ChangePasswordForm />}
          />
          <Route
            path={routes.global.termsAndConditions}
            element={
              <TermsAndConditions
                setReadedPrivacyPolicy={setReadedPrivacyPolicy}
              />
            }
          />
          <Route
            path={routes.global.privacyPolicies}
            element={
              <PrivacyPolicies
                setReadedPrivacyPolicy={setReadedPrivacyPolicy}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : currentUser.rol === 'fiestero' ? (
        <Suspense fallback={<Loading />}>
          {currentUser.emailValidated === 'true' ||
            currentUser.smsValidated === 'true' ? (
            <RoutesPartyUser socket={socket} />
          ) : (
            <VerificationPage
              email={currentUser.email}
              tel={currentUser.phone[0]}
            />
          )}
          <SocketReques socket={socket} />
        </Suspense>
      ) : currentUser.rol === 'organizador' ? (
        <Suspense fallback={<Loading />}>
          <RoutesOwner />
        </Suspense>
      ) : currentUser.rol === 'unitManager' ? (
        <Suspense fallback={<Loading />}>
          <RoutesManager />
        </Suspense>
      ) : currentUser.rol === 'bartender' ? (
        <Suspense fallback={<Loading />}>
          <RoutesBartender socket={socket} />
        </Suspense>
      ) : (
        currentUser.rol === 'cashier' && (
          <Suspense fallback={<Loading />}>
            <RoutesCashier socket={socket} />
          </Suspense>
        )
      )}
    </>
  );
}
