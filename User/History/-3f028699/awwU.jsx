import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';

const PrivacyPolicies = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        title={'Políticas de privacidad'}
        backbutton={() => navigate(-1)}
      />
      <div>PrivacyPolicies</div>
    </>
  );
};

export default PrivacyPolicies;
