import "./MyActivities.scss";

import Activities from "../../components/Activities/Activities";
import { GradientGreenBar } from "../../components/Gradient-Green-Bar/GradientGreenBar";
import { Header } from "../../components/global/Header/Header";
import LoadingAnim from "../../assets/loading.json";
import Lottie from "lottie-react";
import Tapbar from "../../components/Tapbar/Tapbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

// const activities = [
//   {
//     id: 1,
//     title: "Bresh",
//     description: "Compraste 2 fernet #13252",
//     amount: 2000,
//     imageURL: "/activities/bresh.jpg",
//     date: "22-06-2022",
//   },
//   {
//     id: 2,
//     title: "Bresh",
//     description: "Compraste 2 fernet #13252",
//     amount: 2000,
//     imageURL: "/activities/bresh.jpg",
//     date: "21-06-2022",
//   },
//   {
//     id: 3,
//     title: "Bresh",
//     description: "Compraste 2 fernet #13252",
//     amount: 2000,
//     imageURL: "/activities/bresh.jpg",
//     date: "10-06-2022",
//   },
//   {
//     id: 4,
//     title: "Bresh",
//     description: "Compraste 2 fernet #13252",
//     amount: 2000,
//     imageURL: "/activities/bresh.jpg",
//     date: "8-06-2022",
//   },
// ];

export default function MyActivities() {
  const currentClub = useSelector((state) => state.club);
  const cart = useSelector((state) => state.store.cart);
  const currentUser = useSelector((state) => state.user);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const rawResponse = await fetch(
        process.env.REACT_APP_API + "/activities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idClientePayment: currentUser.id,
            orderDelivered: "true",
          }),
        }
      );
      const content = await rawResponse.json();
      setActivities(content);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="my-activities">
      <Header notification cart/>
      <div className="body">
        <h1>Mis Actividades</h1>
        {loading ? (
          <Lottie
            animationData={LoadingAnim}
            loop={true}
            autoplay={true}
            className="loading-anim"
          />
        ) : (
          <Activities activities={activities} />
        )}
      </div>
        <Tapbar active="activities" />
    </div>
  );
}
