import React from "react";
import "./Home.scss";
import Searchbar from "../../components/Searchbar/Searchbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <>
      <Sidebar active={"home"} />
      <div className="home-container">
        <Searchbar />
        <div className="content">
          <Card title="Total facturado clientes" />
          <Card title="Total facturado wedrink" />
          <Card title="Productos consumidos" />
          <Card title="Discotecas nuevas" />
          <Card title="Usuarios nuevos" />
          <Card title="Total descargas" />
        </div>
      </div>
    </>
  );
};

export default Home;
