import Layout from "components/layout/Layout";
import { AboutUs, Contact, Home, Works } from "pages";
import { useState } from "react";

function App() {
  const [inView, setInView] = useState()
  return (
    <Layout inView={inView}>
      <Home setInView={setInView} />
      <Works setInView={setInView} />
      <AboutUs setInView={setInView} />
      <Contact setInView={setInView} />
    </Layout>
  );
}

export default App;
