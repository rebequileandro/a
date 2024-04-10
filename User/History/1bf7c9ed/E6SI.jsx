import React from "react";
import WhatIsWeDrink from "./WhatIsWeDrink/WhatIsWeDrink";
import "./functionalities.scss";
import Points from "./Points/Points";

const Functionalities = () => {
  return (
    <section id="functionalities" className="wedrink-container">
      <WhatIsWeDrink />
      <Points />
    </section>
  );
};

export default Functionalities;
