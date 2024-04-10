import "./header.scss";
import video from "assets/video.svg";
import dots from "assets/elipsis.svg";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-container__profile-wrapper">
        <div className="header-container__profile-image-container">
          <img
            className="header-container__profile-image"
            src="https://3dvf.com/wp-content/uploads/2023/03/2023-03-23_110450.png"
            alt="user"
          />
        </div>
        <div className="header-container__profile-data">
          <h3 className="header-container__profile-data__name">{props.name}</h3>
          <p className="header-container__profile-data__status">
            {props.status}
          </p>
        </div>
      </div>
      <div className="header-container__options-container">
        <button>
          <img src={video} alt="call" />
        </button>
        <button>
          <img src={dots} alt="options" />
        </button>
      </div>
    </div>
  );
};

export default Header;
