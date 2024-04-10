import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';

const TermsAndConditions = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title={'  Términos y condiciones'} />
      <div></div>
    </>
  );
};

export default TermsAndConditions;
