import "./layout.scss";
import Nav from "components/Nav/Nav";

const Layout = ({ children, inView }) => {
  return (
    <main className="layout">
      <Nav inView={inView} />
      {children}
    </main>
  );
};

export default Layout;
