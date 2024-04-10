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
import { useAppContext } from "../../context/AppProvider";
import { getAllRecap } from "../../services/recap.services";
import { ACTION_TYPE } from "../../models/action.type.models";

const Recap = () => {
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState("2023");

  const { recap, dispatch } = useAppContext();

  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const date = id?.split("-");
    setYear(date[date.length - 1]);
    const monthFilter = recap[date[1]]?.filter(
      (e) => formatDateMont(e.date) === date[0]
    );
    if (monthFilter?.length) {
      setMonth(monthFilter);
    }
  }, [recap]);

  // const getData = async () => {
  //   const result = await getAllRecap();
  //   // console.log(result);
  //   if (result.status === 200) {
  //     dispatch({
  //       type: ACTION_TYPE.RECAP,
  //       value: result.data.data,
  //     });
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <Helmet>
        <title>{`${
          month.length ? formatDateMont(month[0].date) : "Material Exclusivo"
        } | Bizarrap`}</title>
        <meta
          name="description"
          content="En esta sección podrás encontrar una recopilación de los shows de Bizarrap"
        />
      </Helmet>
      <section className="bizarrap-tour layout-primary">
        {month.length && (
          <div className="bizarrap-tour__title-container">
            <div className="bizarrap-tour__title-wrapper-relative">
              <img
                src={papperBackground}
                alt="background"
                className="bizarrap-tour__title-background"
              />
              <h1 className="bizarrap-tour__title">
                {formatDateMont(month[0].date)} - {year}
              </h1>
            </div>
          </div>
        )}
        {/* {month?.length && ( */}
        <>
          <TourCarousel months={month} />
          <img
            title="Pasaporte Bizarrap"
            src={passport}
            className="bizarrap-tour__passport-tour"
            alt="Pasaporte Bizarrap"
          />
        </>
        {/* )} */}
        <BackButton onClick={() => navigate(-1)} />
      </section>
    </>
  );
};
export default Recap;
