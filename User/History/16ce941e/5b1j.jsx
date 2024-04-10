import Lottie from "lottie-react";
import bear from "../assets/lottie-files/bear.json";
const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <h2>404</h2>
        <Lottie animationData={bear} className="not-found__animation" />
      </div>
    </div>
  );
};

export default NotFound;
