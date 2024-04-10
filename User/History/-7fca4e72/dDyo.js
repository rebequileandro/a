import useScript from '../../../hooks/useScript'
export const mercadoPago = () => {
    const { MercadoPago } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );
    const mp = new MercadoPago('PUBLIC_KEY');

    mp.checkout({
        preference: {
        id: 'YOUR_PREFERENCE_ID'
        },
        render: {
        container: '.cho-container',
        label: 'Pagar com Mercado Pago',
        type: 'wallet',
    }
  });
}