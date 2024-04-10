import "./sass/css/boilerplate.css";
import "./sass/fonts/fonts.scss";
import "./sass/css/global_styles.scss";
import { BrowserRouter } from "react-router-dom";
import {
  deliverOrder,
  getOrder,
  updateIntervalID,
} from "./redux/store/slices/order";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ORDER_STATUS } from "./redux/store/slices/order";

import { getCurrentClub } from "./redux/store/slices/club";
import { getCurrentUser } from "./redux/store/slices/user";
import { orderTimeout } from "./redux/store/slices/order";
import { updateTimeLeft } from "./redux/store/slices/order";
import RootRouter from "./pages";
const { PAYMENT_PENDING } = ORDER_STATUS;

function App() {
  const currentUser = useSelector(getCurrentUser);
  const currentClub = useSelector(getCurrentClub);
  const [categoryType, setCategoryType] = useState("");
  const order = useSelector(getOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    order?.forEach((ord) => {
      if (ord?.status === PAYMENT_PENDING) {
        const { timestamp } = ord;

        const intervalID = setInterval(() => {
          const newNow = new Date().getTime();
          const timeLeft =
            orderTimeout - Math.floor((newNow - timestamp) / 1000);

          if (timeLeft >= 0) {
            dispatch(updateTimeLeft({ timeLeft, id: ord.id }));
          } else if (timeLeft < 0) {
            dispatch(deliverOrder(ord.id));
            clearInterval(intervalID);
          }
        }, 1000);

        dispatch(updateIntervalID({ id: ord.id, intervalID }));
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </div>
  );
}
export default App;
