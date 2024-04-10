import React from "react";
import "./home.scss";
import { Profile } from "@/components";
const Home = () => {
  return (
    <div className="home">
      <h2 className="heading-primary heading-primary--main">¡Hola!</h2>
      <Profile />
    </div>
  );
};

export default Home;
