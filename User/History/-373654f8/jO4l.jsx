//green bar component, receives amount, price and action to perform
// actions: checkout, pay, sendOrder
import "./Gradient-Green-Bar.scss";

import React, { useEffect, useRef, useState } from "react";
import order, {
  ORDER_STATUS,
  deliverOrder,
  updateTimeLeft,
} from "../../redux/store/slices/order";
import { useLocation, useNavigate } from "react-router-dom";

import { NorthWest } from "@mui/icons-material";
import { StatusPopUp } from "../StatusPopUp/StatusPopUp";
import axios from "axios";
import { initOrder } from "../../redux/store/slices/order";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const { REACT_APP_SOCKET } = process.env;
const { REACT_APP_API } = process.env;

export const GradientGreenBar = ({ isAmount, action, method, fee, bar }) => {
  const socket = io(REACT_APP_SOCKET, {
    transports: ["websocket", "polling", "flashsocket"],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getCart = useSelector((state) => state.store.cart);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMercadoPago, setIsMercadoPago] = useState(false);
  const [progress, setProgress] = useState(0);
  const currentClub = useSelector((state) => state.club);
  const currentUser = useSelector((state) => state.user);
  const idOrder = Math.floor(Math.random() * 9999);

  useEffect(() => {
    //get the sum of the entire cart
    const getTotal = () => {
      let sumTotal = 0;
      getCart?.map((e) => (sumTotal = sumTotal + e.finalPriceDrink * e.amount));
      setTotal(sumTotal);
    };
    return getTotal();
  }, [getCart]);
  console.log(bar)
  const search = useLocation().search;
  const statusPayment = new URLSearchParams(search).get("status");
  const [cashOrder, setCashOrder] = useState({
    idOrder: idOrder,
    idClientePayment: currentUser.id || currentUser._id,
    nameClientePayment: currentUser.name,
    idOrganizerPayment: currentClub?.idOrganizer,
    imageParty: currentClub?.imageParty,
    namePartyPayment: currentClub?.nameParty,
    idParty: currentClub?._id,
    total: total,
    totalMinOrder: 5,
    nameBarra: bar,
    totalMinOrder: getCart.reduce((a, b) => a + b.time, 0),
    orderPayment: getCart.map((item) => {
      return {
        imageDrink: item.imageDrink,
        typeDrink: item.typeDrink,
        title: item.nameDrink,
        unit_price: item.finalPriceDrink,
        quantity: item.amount,
        receta: item?.receta,
      };
    }),
  });
  useEffect(() => {
    setCashOrder({
      ...cashOrder,
      total: total,
    });
  }, [total]);
  const handleClick = async () => {
    action === "cart" && navigate("/carrito");
    action === "pay" && navigate("/checkout");
    if (action === "sendOrder") {
      setProgress(100);
      if (method.name === "efectivo") {
        try {
          const response = await axios.post(
            `${REACT_APP_API}/payment/add`,
            cashOrder
          );
          setStatus(response);
          setIsOpen(true);
        } catch (error) {
          console.log(error);
          setStatus(error);
          setIsOpen(true);
        }
      }
      if (method.name === "mercado pago") {
        try {
          await axios
            .post(`${REACT_APP_API}/payment/add`, cashOrder)
            .then((response) => {
              window.localStorage.setItem("idOrder", response.data._id);
              axios
                .post(`${REACT_APP_API}/checkout/add`, {
                  accesstoken: currentClub.accessToken,
                  title: "WeDrink",
                  price: total,
                  comision: fee,
                })
                .then((response) => {
                  window.location.href = response.data.mercadopagoUrl;
                });
            });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  useEffect(() => {
    if (statusPayment) {
      if (statusPayment === "approved") {
        axios
          .put(
            `${REACT_APP_API}/cashier/${window.localStorage.getItem(
              "idOrder"
            )}`,
            {
              abandonedCartPayment: "false",
              qrRead: "true",
              paymentCompledPayment: "true",
            }
          )
          .then((response) => {
            socket.emit("cliente:pagocorrecto", {
              id: response.data._id,
            });
            socket.emit("cliente:pagado", {
              id: response.data._id,
              room: response.data.idClientePayment,
            });
            window.localStorage.setItem("idOrder", null);
            setStatus(response);
            setIsOpen(true);
            setIsMercadoPago(true);
          });
      } else {
        setIsOpen(true);
      }
    }
  }, []);
  const redirectStatusPopup = () => {
    if (status.status === 200) {
      const now = new Date().getTime();

      let intervalID;

      const orderStatus = isMercadoPago
        ? ORDER_STATUS.ORDER_CONFIRMED
        : ORDER_STATUS.PAYMENT_PENDING;

      if (orderStatus === ORDER_STATUS.PAYMENT_PENDING) {
        intervalID = setInterval(() => {
          const newNow = new Date().getTime();
          const timeLeft = 600 - Math.floor((newNow - now) / 1000);

          if (timeLeft >= 0) {
            dispatch(updateTimeLeft(timeLeft));
          } else if (timeLeft < 0) {
            dispatch(deliverOrder());
            clearInterval(intervalID);
          }
        }, 1000);
      }

      dispatch(
        initOrder({
          id: status.data._id,
          timestamp: now,
          intervalID,
          timeLeft: 600,
          number: status.data.idOrder,
          status: orderStatus,
          products: getCart.map((prod, id) => ({
            id,
            title: prod.nameDrink,
            quantity: prod.amount,
            image: prod.imageDrink,
          })),
        })
      );
      navigate(`/mi-pedido`);
      setIsMercadoPago(false);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div onClick={() => handleClick()} className="gradient-green-bar">
        <div>
          {isAmount && getCart.length !== 0 ? (
            <div className="amount">{getCart.length}</div>
          ) : null}
        </div>
        <div className="content">
          {action === "cart" ? (
            <span>Ver carrito</span>
          ) : action === "pay" ? (
            <span>Ir a pagar</span>
          ) : (
            <span>Enviar la orden</span>
          )}
        </div>
        <div className="content">
          {action === "pay" ? (
            <div>subtotal ${total}</div>
          ) : (
            <div>${total}</div>
          )}
        </div>
        <div className="progres_bar" style={{ width: `${progress}%` }} />
      </div>
      {isOpen && (
        <StatusPopUp
          status={status.status === 200 ? true : false}
          button={status.status === 200 ? false : "volver"}
          redirect={redirectStatusPopup}
          title={
            status.status === 200
              ? "tu pedido se ha generado"
              : "tu pedido no ha sido procesado"
          }
          description={
            method?.name === "efectivo" && status.status === 200
              ? "Paga tu pedido en caja para continuar con la compra"
              : status.status === 200
              ? "Cuando tu pedido este listo te avisaremos para que lo retires"
              : "Hubo un error al hacer la compra. Intentalo de nuevo"
          }
        />
      )}
    </>
  );
};
