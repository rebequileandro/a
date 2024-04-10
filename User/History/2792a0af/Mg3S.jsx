import "./header.scss";
const Header = (props) => {
  return (
    <div className="header-container">
      <h3>{props.name}</h3>
    </div>
  );
};

export default Header;
