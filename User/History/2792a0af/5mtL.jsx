import "./header.scss";
const Header = (props) => {
  return (
    <div className="header-container">
      <div>
        <img
          src="https://3dvf.com/wp-content/uploads/2023/03/2023-03-23_110450.png"
          alt="user"
        />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default Header;
