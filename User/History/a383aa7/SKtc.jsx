import { useState } from 'react';
import './VerificationPage.scss';
import VerificationMethods from './VerificationMethods/VerificationMethods';
import TwoFactorAuth from '../../../../components/global/TwoFactorAuth/TwoFactorAuth';
import logo from '../../../../assets/shooza.svg';
import { AnimatePresence, motion } from 'framer-motion';

export default function VerificationPage() {
  const [method, setMethod] = useState(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="verification-page layout-primary"
      >
        <img src={logo} alt="" className="verification-page__logo" />

        {!method ? (
          <VerificationMethods setMethod={setMethod} />
        ) : (
          <TwoFactorAuth method={method} setMethod={setMethod} />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
