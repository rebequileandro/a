import React from "react";
import "./home.scss";
import { Profile } from "@/components";
import Categories from "./components/Categories/Categories";

const Home = () => {
  const game = [
    {
      title: "Foro & Comunidad",
      text: "Comparte con otros colegas.",
      icon: "",
    },
    {
      title: "Simulador Clínico",
      text: "Explora diferentes escenarios.",
      icon: "",
    },
  ];
  return (
    <div className="home">
      <h2 className="heading-primary heading-primary--main">¡Hola!</h2>
      <Profile />
      <div className="home__spacer" />
      <Categories
        title="Pharma"
        icon="/assets/home/pharma_icon.svg"
        data={[]}
        more
        slider
      />
      <Categories
        title="Juega con MedBot"
        icon="/assets/home/game_icon.svg"
        data={[]}
      />
    </div>
  );
};

export default Home;
