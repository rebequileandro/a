import "./OrderCard.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as Arrow } from "../../assets/icons/icon_arrow-gradient.svg";
import { Link } from "react-router-dom";
import { ORDER_STATUS } from "../../redux/store/slices/order";
import OrderReady from "./OrderReady/OrderReady";
import OrderStages from "./OrderStages/OrderStages";
import PaymentPending from "./PaymentPending/PaymentPending";
import { QrGenerator } from "../QrCode/QrGenerator/QrGenerator";
import { getOrder } from "../../redux/store/slices/order";
import { getOrderExists } from "../../redux/store/slices/order";
import { useSelector } from "react-redux";

const OrderCardSimple = ({ order, showDetails, index }) => {
  if (!order) return;

  let content;

  if (order.status === ORDER_STATUS.PAYMENT_PENDING) {
    content = {
      title: "Paga tu pedido en caja",
      description: "con el QR antes de que se cancele.",
      body: <PaymentPending showDetails={showDetails} order={order} />,
    };
  } else if (order.status === ORDER_STATUS.ORDER_READY) {
    content = {
      title: "¡Tu pedido está listo!",
      description: "",
      body: <OrderReady showDetails={showDetails} order={order} />,
    };
  } else if (
    order.status === ORDER_STATUS.ORDER_CONFIRMED ||
    order.status === ORDER_STATUS.GET_READY ||
    order.status === ORDER_STATUS.IN_PREPARATION
  ) {
    content = {
      title: "¡Sigue divirtiéndote!",
      description: "Te avisaremos cuando sea tu turno para retirar.",
      body: <OrderStages order={order} />,
    };
  }

  return (
    <div className="order-card">
      <h2 className="title">{content?.title}</h2>
      {content.description && (
        <p className="description">{content.description}</p>
      )}
      <div className="content-body">{content.body}</div>

      {!showDetails && (
        <Link className="see-details" to={"/mi-pedido/" + order.id}>
          Ver detalles <Arrow />
        </Link>
      )}

      {showDetails && (
        <div className="details">
          <div className="products">
            {order.products.map((prod) => (
              <div className="row" key={prod.id}>
                <div className="quantity-and-image">
                  <img src={prod.image} alt="" />
                  <div className="quantity">x{prod.quantity}</div>
                </div>
                <div className="title">{prod.title}</div>
              </div>
            ))}
          </div>
          <p className="order-number">N˚ de pedido #{order.number}</p>
          <p className="order-number" style={{ marginTop: 10 }}>
            Retira por: {order.bar}
          </p>
        </div>
      )}
    </div>
  );
};

export default function OrderCard({ order, showDetails }) {
  const orderExists = useSelector(getOrderExists);

  if (!orderExists) return;

  if (!order.length) {
    return <OrderCardSimple order={order} showDetails={showDetails} />;
  }

  if (order.length === 1)
    return <OrderCardSimple order={{ ...order[0], index: 1 }} />;

  return (
    <Swiper>
      {order.map((ord, index) => (
        <SwiperSlide key={ord.id}>
          <OrderCardSimple
            order={{ ...ord, index }}
            showDetails={showDetails}
            id={ord.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
