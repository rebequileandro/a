import Layout from "components/layout/Layout";
import { AboutUs, Home, Works } from "pages";
import { useState } from "react";

function App() {
  const [inView, setInView] = useState()
  return (
    <Layout inView={inView}>
      <Home setInView={setInView} />
      <Works setInView={setInView} />
      <AboutUs setInView={setInView} />
    </Layout>
  );
}

export default App;
