import React from "react";
import "./Home.scss";
import Searchbar from "../../components/Searchbar/Searchbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="content">
          <Card title="Total facturado clientes" />
          <Card title="Total facturado wedrink" />
          <Card title="Productos consumidos" />
          <Card title="Discotecas nuevas" />
          <Card title="Usuarios nuevos" />
          <Card title="Total descargas" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
