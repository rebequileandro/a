import './App.scss';
import { Cart } from './pages/Cart';
import { useMercadopago } from 'react-sdk-mercadopago';
function App() {
  const mercadopago = useMercadopago.v2('YOUR_PUBLIC_KEY', {
    locale: 'en-US'
});

useEffect(() => {
    if (mercadopago) {
        mercadopago.checkout({
            preference: {
                id: 'YOUR_PREFERENCE_ID'
            },
            render: {
                container: '.cho-container',
                label: 'Pay',
            }
        })
    }
}, [mercadopago])

  return (
    <div className="App">
     <div class="cho-container" />
    </div>
  );
}

export default App;
