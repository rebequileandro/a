import "./footer.scss";
import heart from "../../assets/heart.png";
const Footer = () => {
  return (
    <div className="footer layout">
      <img src={heart} alt="heart" className="footer__image" />
    </div>
  );
};

export default Footer;
