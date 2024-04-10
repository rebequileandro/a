import "./footer.scss";
import image from "../../assets/image-11.webp";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__image-container">
        <img src={image} alt="parrillada" />
      </div>
      <div>
        <div className="footer__title-container ">
          <h2 className="footer__title">Hacé tu reserva</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
