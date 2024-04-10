import "./OrderDetails.scss";

import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/global/Header/Header";
import OrderCard from "../../components/OrderCard/OrderCard";
import { getOrder } from "../../redux/store/slices/order";
import { useSelector } from "react-redux";

export default function OrderDetails() {
  const orders = useSelector(getOrder);
  const { id } = useParams();

  let order = orders.find((ord) => ord.id === id);

  const navigate = useNavigate();
  return (
    <div className="order-details">
      <Header backbutton={() => navigate("/")} />
      <div className="body">
        {order ? <OrderCard order={order} showDetails={true} /> : navigate("/")}
      </div>
    </div>
  );
}
