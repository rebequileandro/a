import { useState } from "react";
import image from "./assets/background.webp";
function App() {
  const [user, setUser] = useState(false);

  return (
    <>
      <img src={image} alt="ims" />
    </>
  );
}

export default App;
