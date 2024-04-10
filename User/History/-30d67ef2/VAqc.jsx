import "./layout.scss";
import Nav from "components/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Nav />
      {children}
    </main>
  );
};

export default Layout;
