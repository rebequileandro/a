import Lottie from "lottie-react";
import bear from "../assets/lottie-files/bear.json";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__text">404</h2>
      <Lottie animationData={bear} className="not-found__animation" />
    </div>
  );
};

export default NotFound;
