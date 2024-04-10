import React from "react";
import "./bzrp_tour.scss";
import TourCarousel from "../../components/TourCarousel/TourCarousel";
import passport from "../../assets/passport.webp";
import BackButton from "../../components/BackButtom/BackButton";
import SelectMonth from "../../components/SelectMonth - DELETE/SelectMonth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import routes from "../../models/routes";
import { useNavigate } from "react-router-dom";
import { formatDateMont } from "../../utils/format-date";
import papperBackground from "../../assets/papper.webp";
export const BzrpTour = () => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  // console.log(formatDateMont(data[0].date));
  return (
    <>
      <Helmet>
        <title>{`${
          data ? formatDateMont(data[0].date) : "Material Exclusivo"
        } | Bizarrap`}</title>
        <meta
          name="description"
          content="En esta sección podrás encontrar una recopilación de los shows de Bizarrap"
        />
      </Helmet>
      <section className="bizarrap-tour layout-primary">
        {data && (
          <div className="bizarrap-tour__title-container">
            <div className="bizarrap-tour__title-wrapper-relative">
              <img
                src={papperBackground}
                alt="background"
                className="bizarrap-tour__title-background"
              />
              <h1 className="bizarrap-tour__title">
                {formatDateMont(data[0].date)}
              </h1>
            </div>
          </div>
        )}
        {data?.length && (
          <>
            <TourCarousel months={data} />
            <img
              title="Pasaporte Bizarrap"
              src={passport}
              className="bizarrap-tour__passport-tour"
              alt="Pasaporte Bizarrap"
            />
          </>
        )}
        <SelectMonth month={data} setMonth={setData} />
        <BackButton
          onClick={() => (!data ? navigate(routes.HOME) : setData(false))}
        />
      </section>
    </>
  );
};
