import React from "react";
import "./home.scss";
import { Profile } from "@/components";
import Categories from "./components/Categories/Categories";
import ROUTES from "@/models/routes.models";
import { Peopple, Robot, Pharma, Game } from "@/components/SVG";
import fakeDataPharma from "./pharma.json";
import CardModal from "../../components/CardModal/CardModal";
const Home = () => {
  return (
    <>
      <div className="home">
        <h2 className="heading-primary heading-primary--main">¡Hola!</h2>
        <Profile />
        <div className="home__spacer" />
        <Categories
          title="Pharma"
          Icon={Pharma}
          data={fakeDataPharma}
          more
          slider
        />
        <Categories
          title="Juega con MedBot"
          Icon={Game}
          data={[
            {
              title: "Foro & Comunidad",
              text: "Comparte con otros colegas.",
              icon: Peopple,
              link: "",
            },
            {
              title: "Simulador Clínico",
              text: "Explora diferentes escenarios.",
              icon: Robot,
              link: ROUTES.CLINICAL_SIMULATOR,
            },
          ]}
        />
      </div>
      <CardModal />
    </>
  );
};

export default Home;
