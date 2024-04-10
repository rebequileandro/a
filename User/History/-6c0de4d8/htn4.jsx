import React from "react";
import "./home.scss";
import { Profile } from "@/components";
import Categories from "./components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <h2 className="heading-primary heading-primary--main">¡Hola!</h2>
      <Profile />
      <Categories title="Pharma" icon={""} data={[]} />
    </div>
  );
};

export default Home;
