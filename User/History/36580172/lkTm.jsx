import './PaymentMethodOption.scss';

export default function PaymentMethodOption({
  method,
  selectedMethod,
  setMethod,
  description
}) {
  const checked = selectedMethod.name === method.name ? 'checked' : '';

  const onClick = () => setMethod(method);

  return (
    <div className={'payment-method-option ' + checked} onClick={onClick}>
      <img
        src={method.icon}
        className="payment-method-option__image"
        alt={method.name}
        loading="lazy"
      />
      <div className="content">
        <h3 className="heading-secondary-main--upper label-method">
          {method.label}
        </h3>
        {description && (
          <p className="payment-method-option__description">{description}</p>
        )}
      </div>
      <div className="label-method__div"></div>
    </div>
  );
}
