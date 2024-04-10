import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';

const PrivacyPolicies = ({ setReadedPrivacyPolicy }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setReadedPrivacyPolicy(true);
  }, []);

  return (
    <>
      <Header
        title={'Políticas de privacidad'}
        backbutton={() => navigate(-1)}
      />
      <div className="layout-primary">
        <p></p>
      </div>
    </>
  );
};

export default PrivacyPolicies;
