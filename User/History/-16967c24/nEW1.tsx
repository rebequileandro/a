import "./back_button.scss";
import { useNavigate } from "react-router-dom";
import back from "assets/back.webp";

interface BackButtonInterface {
  onClick: () => void;
}
const BackButton: React.FC<BackButtonInterface> = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <button
      className="back-btn"
      onClick={() => {
        onClick ? onClick() : navigate(-1);
      }}
      title="Volver atrás"
    >
      <img
        className="back-btn__image"
        src={back}
        alt="volver"
        title="Volver atrás"
      />
    </button>
  );
};

export default BackButton;
