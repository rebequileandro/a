//green bar component, receives amount, price and action to perform
// actions: checkout, pay, sendOrder
import "./Gradient-Green-Bar.scss";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StatusPopUp } from "../StatusPopUp/StatusPopUp";
const { REACT_APP_API } = process.env
export const GradientGreenBar = ({ isAmount, action, method}) => {
  const navigate = useNavigate();
  const getCart = useSelector((state) => state.store.cart);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const currentClub = useSelector((state) => state.club);
  const currentUser = useSelector((state) => state.user);
  const idOrder = Math.floor(Math.random()* 9999)

  useEffect(() => {
    //get the sum of the entire cart
    const getTotal = () => {
      let sumTotal = 0;
      getCart?.map((e) => (sumTotal = sumTotal + e.finalPriceDrink * e.amount));
      setTotal(parseInt(sumTotal) + Math.round((4 * parseInt(sumTotal)) / 100));
    };
    return getTotal();
  }, [getCart]);
  const [cashOrder, setCashOrder] = useState({
    idOrder: idOrder,
    idClientePayment: currentUser?.id,
    idOrganizerPayment: currentClub?.idOrganizer,
    namePartyPayment: currentClub?.nameParty,
    idParty: currentClub?._id,
    total: total,  
    orderPayment: getCart.map(item => {
      return {
        imageDrink: item.imageDrink,
        typeDrink: item.typeDrink,
        title: item.nameDrink,
        unit_price: item.finalPriceDrink,
        quantity: item.amount
      }
    })
  })
  
  useEffect(() => {
    setCashOrder({
      ...cashOrder,
      total: total
    })
  }, [total])
  const handleClick = async () => {
    action === "cart" && navigate("/cart");
    action === "pay" && navigate("/checkout");
    if (action === 'sendOrder') {
      if(method.name === 'efectivo') {
        try {
          await axios.post(`${REACT_APP_API}/payment/add`, cashOrder)
          .then(response => {
            setStatus(response)
            setIsOpen(true)
          })
        } catch (error) {
          setStatus(error)
          setIsOpen(true)
        }
      }
      if(method.name === 'mercado pago') {
          try {
            await axios.post(`${REACT_APP_API}/checkout/add`, {
              accesstoken: currentClub.accessToken,
              title: "WeDrink",
              price: total
            })
            .then(response => {
              window.location.href = response.data.mercadopagoUrl
              console.log(response)
            })
            .then(response => console.log(response))
          } catch (error) {
            console.log(error)
          }
      }
    }
  };
  console.log(currentClub.accessToken)
  const redirectStatusPopup = () => {
    if(status.status === 200) {
      navigate(`/checkout/${status.data._id}/${status.data.idOrder}`)
    }
    else {
      setIsOpen(false)
    }
  }
  
  return (
    <>
      <div onClick={() => handleClick()} className="gradient-green-bar">
        <div>
          {isAmount && getCart.length !== 0 ? (
            <div className="amount">{getCart.length}</div>
          ) : null}
        </div>
        <div>
          {action === "cart" ? (
            <span>Ver carrito</span>
          ) : action === "pay" ? (
            <span>Ir a pagar</span>
          ) : (
            <span>Enviar la orden</span>
          )}
        </div>
        <div>
          {action === "pay" ? <div>subtotal ${total}</div> : <div>${total}</div>}
        </div>
      </div>
      {isOpen && <StatusPopUp
        status={status.status === 200 ? true : false}
        button={status.status === 200 ? false : 'volver'}
        redirect={redirectStatusPopup}
        title={status.status === 200 ? "tu pedido se ha generado" : 'tu pedido no ha sido procesado'} 
        description={method?.name === 'efectivo' && status.status === 200 ? 
        'Paga tu pedido en caja para continuar con la compra' 
        : status.status === 200 ? "Cuando tu pedido este listo te avisaremos para que lo retires" 
        : 'Hubo un error al hacer la compra. Intentalo de nuevo'}/>}
    </>
  );
};
