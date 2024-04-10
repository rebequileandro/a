import React from "react";
import "./recap.scss";
import TourCarousel from "../../components/TourCarousel/TourCarousel";
import passport from "../../assets/passport.webp";
import BackButton from "../../components/BackButtom/BackButton";
import SelectMonth from "../../components/SelectMonth - DELETE/SelectMonth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import routes from "../../models/routes";
import { useNavigate, useParams } from "react-router-dom";
import { formatDateMont } from "../../utils/format-date";
import papperBackground from "../../assets/papper.webp";
import { useEffect } from "react";
const Recap = () => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const date = id?.split("-");
    console.log(date[1]);
    const monthFilter = data.bzrpTour[date[1]].filter(
      (e) => formatDateMont(e.date) === date[0]
    );

    if (monthFilter.length) {
      setData(monthFilter);
    }
  }, []);

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
        <BackButton
          onClick={() => (!data ? navigate(routes.HOME) : setData(false))}
        />
      </section>
    </>
  );
};
export default Recap;
