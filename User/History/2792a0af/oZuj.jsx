import "./header.scss";
const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-container__profile-wrapper">
        <div className="header-container__profile-image-container">
          <img
            className="profile-image"
            src="https://3dvf.com/wp-content/uploads/2023/03/2023-03-23_110450.png"
            alt="user"
          />
        </div>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default Header;
