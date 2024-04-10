import "./footer.scss";
import heart from "../../assets/heart.png";
import line from "../../assets/line.svg";

const Footer = () => {
  return (
    <div className="footer layout">
      <img src={heart} alt="heart" className="footer__heart" />
      <h2 className="footer__title">¡Gracias</h2>
      <h2 className="footer__title">por tu</h2>
      <h2 className="footer__title">visita!</h2>

      <img src={line} alt="line" className="footer__line" />
    </div>
  );
};

export default Footer;
