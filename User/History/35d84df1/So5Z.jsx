import React from "react";
import "./recap.scss";
import TourCarousel from "../../components/TourCarousel/TourCarousel";
import passport from "../../assets/passport.webp";
import BackButton from "../../components/BackButtom/BackButton";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { formatDateMont } from "../../utils/format-date";
import papperBackground from "../../assets/papper.webp";
import { useEffect } from "react";
import data from "../../models/data";

const Recap = () => {
  const [month, setMonth] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const date = id?.split("-");
    console.log(date[1]);
    const monthFilter = data.bzrpTour[date[1]].filter(
      (e) => formatDateMont(e.date) === date[0]
    );

    if (monthFilter.length) {
      setMonth(monthFilter);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${
          month ? formatDateMont(month[0].date) : "Material Exclusivo"
        } | Bizarrap`}</title>
        <meta
          name="description"
          content="En esta sección podrás encontrar una recopilación de los shows de Bizarrap"
        />
      </Helmet>
      <section className="bizarrap-tour layout-primary">
        {month && (
          <div className="bizarrap-tour__title-container">
            <div className="bizarrap-tour__title-wrapper-relative">
              <img
                src={papperBackground}
                alt="background"
                className="bizarrap-tour__title-background"
              />
              <h1 className="bizarrap-tour__title">
                {formatDateMont(month[0].date)}
              </h1>
            </div>
          </div>
        )}
        {month?.length && (
          <>
            <TourCarousel months={month} />
            <img
              title="Pasaporte Bizarrap"
              src={passport}
              className="bizarrap-tour__passport-tour"
              alt="Pasaporte Bizarrap"
            />
          </>
        )}
        <BackButton onClick={() => navigate(-1)} />
      </section>
    </>
  );
};
export default Recap;
