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
        <p>
          {' '}
          si aceptas los terminos de shooza nos regalas tu casa y no tenes
          derecho a reclamarnos nada y todos tus shoocoins genereados en la app
          van a ser redireccionados a la cuenta de los desarrolladores y a demas
          vas a tener que entregar a tu prima y a tu hermana y a demas todas las
          quejas sobre la app van a ser enviadas a goni.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicies;
