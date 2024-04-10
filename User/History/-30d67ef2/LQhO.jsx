import "./layout.scss";
import Nav from "components/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
