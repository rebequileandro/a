import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
const { REACT_APP_MP_CLIENT_ID, REACT_APP_MP_REDIRECT } = process.env;

const TermsAndConditions = () => {
  const code = new URLSearchParams(search).get('code');

  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = `https://auth.mercadopago.com.ar/authorization?client_id=${REACT_APP_MP_CLIENT_ID}&response_type=code&platform_id=mp&redirect_uri=${REACT_APP_MP_REDIRECT}`;
  };
  console.log(code);
  return (
    <>
      <Header
        title={'Términos y condiciones'}
        backbutton={() => navigate(-1)}
      />
      <div className="layout-primary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          tellus in quam luctus, eu fermentum nulla lacinia. Proin id eleifend
          tortor. Quisque nec elit interdum, sollicitudin libero nec, porttitor
          nibh. Ut vel risus vitae nulla vehicula scelerisque. Pellentesque
          tellus tellus, semper non tellus eget, ultrices blandit nulla. Donec
          et libero nisi. Suspendisse rutrum vitae magna in aliquam. Proin
          tincidunt, justo vehicula pharetra vehicula, sem nulla finibus mauris,
          nec consectetur erat nibh rutrum est. Phasellus pharetra odio non ante
          eleifend, quis tincidunt arcu pulvinar. Phasellus fringilla tempor
          enim, et gravida sapien viverra vel. Proin in dictum nibh.
          <br />
          Pellentesque vulputate accumsan luctus. Nullam eu scelerisque metus.
          Suspendisse posuere elementum ligula at dictum. Fusce tristique
          vulputate nunc, vitae ultricies odio tristique at. Curabitur at mi
          placerat, accumsan diam a, semper mi. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Aliquam feugiat elementum lorem, et
          sodales sem. Sed pulvinar metus nec pulvinar suscipit. Mauris vel
          tristique mauris, nec pulvinar turpis. Maecenas suscipit rutrum nisl,
          at tempus leo consequat a. Maecenas dapibus suscipit velit vel tempor.
          Phasellus a massa non lorem maximus sollicitudin. Morbi blandit
          ligula.
          <br />
          <br />
          Pellentesque vulputate accumsan luctus. Nullam eu scelerisque metus.
          Suspendisse posuere elementum ligula at dictum. Fusce tristique
          vulputate nunc, vitae ultricies odio tristique at. Curabitur at mi
          placerat, accumsan diam a, semper mi. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Aliquam feugiat elementum lorem, et
          sodales sem. Sed pulvinar metus nec pulvinar suscipit. Mauris vel
          tristique mauris, nec pulvinar turpis. Maecenas suscipit rutrum nisl,
          at tempus leo consequat a. Maecenas dapibus suscipit velit vel tempor.
          Phasellus a massa non lorem maximus sollicitudin. Morbi blandit ligula
          velit, id pretium magna semper id. Pellentesque vulputate accumsan
          luctus. Nullam eu scelerisque metus. Suspendisse posuere elementum
          ligula at dictum. Fusce tristique vulputate nunc, vitae ultricies odio
          tristique at. Curabitur at mi placerat, accumsan diam a, semper mi.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam
          feugiat elementum lorem, et sodales sem. Sed pulvinar metus nec
          pulvinar suscipit. Mauris vel tristique mauris, nec pulvinar turpis.
          Maecenas suscipit rutrum nisl, at tempus leo consequat a. Maecenas
          dapibus suscipit velit vel tempor. Phasellus a massa non lorem maximus
          sollicitudin. Morbi blandit ligula velit, id pretium magna semper id.
        </p>
        <button onClick={handleClick}>conect mp</button>
      </div>
    </>
  );
};

export default TermsAndConditions;
