import React, { useEffect, useState } from "react";
import { deliverOrder, updateStatus } from "../../redux/store/slices/order";

import { ORDER_STATUS } from "../../redux/store/slices/order";
import { StatusPopUp } from "../StatusPopUp/StatusPopUp";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { REACT_APP_SOCKET } = process.env;
const { REACT_APP_API } = process.env
const { ORDER_CONFIRMED, IN_PREPARATION, ORDER_READY, GET_READY } =
  ORDER_STATUS;

export const SocketReques = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  useEffect(() => {
    const socket = io(REACT_APP_SOCKET, {
      transports: ["websocket", "polling", "flashsocket"],
    });

    console.log(socket);

    socket.emit("join_room", user.id);

    console.log("SOCKET");
    
    socket.on("server:pagado", (data) => {
      console.log("RECIBIDOOOOOOOOOOOOOOOOOOOOOOOOOO", data);
      dispatch(updateStatus(ORDER_CONFIRMED));
      fetch(`${REACT_APP_API}/webpush/new-message`, {
        method: 'POST',
        body: JSON.stringify({
          title: "Pagaste tu pedido",
          message: "Continúa divirtiéndote y te avisaremos cuando estemos preparando tu pedido 🎉"
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    });

    socket.on("server:enpreparacion", (res) => {
      dispatch(updateStatus(IN_PREPARATION));
      const minutes = res.minutos;
      const now = new Date();
      const nowTimestamp = now.getTime();
      const milliseconds = minutes * 60000;
      fetch(`${REACT_APP_API}/webpush/new-message`, {
        method: 'POST',
        body: JSON.stringify({
          title: "¡Tu pedido está en preparación!",
          message: "Continúa divirtiéndote y nosotros te avisaremos cuando esté listo 🎉"
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    });

    socket.on("server:confirmandoretiro", () => {
      dispatch(updateStatus(ORDER_READY));
      fetch(`${REACT_APP_API}/webpush/new-message`, {
        method: 'POST',
        body: JSON.stringify({
          title: "¡Tu pedido está listo! 🍸🍻",
          message: "Acercate a la barra para retirarlo"
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    });

    socket.on("server:pedidoentregado", () => {
      navigate("/");
      dispatch(deliverOrder());
      fetch(`${REACT_APP_API}/webpush/new-message`, {
        method: 'POST',
        body: JSON.stringify({
          title: "¡Tu pedido ha sido entregado! 🎉",
          message: ""
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    });
  }, []);

  return <></>;
};
