import Lottie from "lottie-react";
import bear from "../assets/lottie-files/bear.json";
const NotFound = () => {
  return (
    <div className="not-found">
      <Lottie animationData={bear} className="not-found__animation" />
    </div>
  );
};

export default NotFound;
