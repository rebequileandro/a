import './App.scss';
import { Cart } from './pages/Cart';
import { useMercadopago } from 'react-sdk-mercadopago';
import { useEffect } from 'react';
function App() {
  const mercadopago = useMercadopago.v2('TEST-6986dc27-452c-4cc0-a4f1-0f27f7fa5dca', {
    locale: 'en-US'
});

useEffect(() => {
    if (mercadopago) {
        mercadopago.checkout({
            preference: {
                id: 'YOUR_PREFERENCE_ID'
            },
            render: {
                container: '.container',
                label: 'Pay',
            }
        })
    }
}, [mercadopago])

  return (
    <div className="App">
     <div class="container" />
    </div>
  );
}

export default App;
