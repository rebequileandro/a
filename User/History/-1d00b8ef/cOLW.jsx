import React, { useEffect, useState } from "react";
import "./home.scss";
import sunglasses from "../../assets/sunglasses.webp";
import cap from "../../assets/bzrp-cap-home.webp";
import Logo from "../../components/Logo/Logo";
import bizarrapp from "../../assets/bizarrapp.webp";
import opOne from "../../assets/op-1.webp";
import AudioplayerPopup from "../../components/AudioplayerPopup/AudioplayerPopup";
import quevedo from "../../assets/audio/quevedo_extra.mp3";
import { Helmet } from "react-helmet-async";
import CountriesPopup from "../../components/CountriesPopup/CountriesPopup";
import BzrpTourBtn from "./components/Bzrp-tour/BzrpTourBtn";
import ExclusiveMaterial from "./components/ExclusiveMaterialBtn/ExclusiveMaterialBtn";
import Spotify from "../../components/SVG/Spotify";
import X from "../../components/SVG/X";
import Instagram from "../../components/SVG/Instagram";
import YouTube from "../../components/SVG/YouTube";
import { Link } from "react-router-dom";
import routes from "../../models/routes";
import LG from "./components/LG/LG";
import LiveTour2024 from "./components/LiveTour2024/LiveTour2024";

const Home = ({ capPopup }) => {
  const [loadFirstAnimation, setLoadFirstAnimation] = useState(false);
  const [onTouch, setOnTouch] = useState(false);
  const [onTouchFirst, setOnTouchFirst] = useState(false);
  const [state, setState] = useState(false);
  const [logoOut, setLogoOut] = useState(false);
  const [transitionOne, setTransitionOne] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [logo, setLogo] = useState(false);
  // const [glow, setGlow] = useState(false);

  const [audioplayer, setAudioplayer] = useState(false);
  const [countries, setCountries] = useState(capPopup);

  useEffect(() => {
    if (!loadFirstAnimation) {
      if (state) {
        setTimeout(() => {
          setLoadFirstAnimation(true);
        }, 5000);
      } else {
        setState(true);
      }
    }
  }, []);

  const onClick = () => {
    // if (!logoOut) {
    if (!onTouchFirst) {
      setOnTouchFirst(true);
      setTimeout(() => {
        window.sessionStorage.setItem("visited", true);
        setOnTouch(!onTouch);
      }, 500);
    }
    // else {
    //   setOnTouch(!onTouch);
    //   window.sessionStorage.setItem("visited", true);
    // }
    // }
    // setTimeout(() => {
    //   setLogo(true);
    // }, 1000);
  };

  useEffect(() => {
    const device =
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i);
    device ? setIsMobile(device[0]) : setIsMobile(false);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setGlow(true);
  //     setTimeout(() => {
  //       setGlow(false);
  //     }, 1000);
  //   }, 7000);
  // }, []);

  useEffect(() => {
    if (JSON.parse(window.sessionStorage.getItem("visited"))) {
      setOnTouch(true);
      setOnTouchFirst(true);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Bizarrap</title>
        <meta
          name="description"
          content="Encuentra contenido exclusivo, últimos shows, próximas fechas y muchos más sobre Bizarrap."
        />
      </Helmet>
      <main className={`home layout-primary ${transitionOne && "home--out"}`}>
        <h1 className="home__h1">Bizarrap</h1>
        {/* <img
          title="Gafas Bizarrap"
          className={`home__image-one ${onTouch && "home__image-one--show"}`}
          src={sunglasses}
          alt="Gafas Bizarrap"
        /> */}
        <LG show={onTouch} />
        <div className="home__image-wrapper-cap">
          <button
            // className="home__cap-button"
            className={`home__cap-button ${
              onTouch && "home__cap-button--show"
            }`}
            onClick={() => setCountries(true)}
          >
            <img
              title="Gorra Bizarrap"
              className={`home__image-cap`}
              src={cap}
              alt="Gorra Bizarrap"
            />
            <span className="home__cap-button--text">¡CONSEGUILA ACÁ!</span>
          </button>
        </div>
        <a
          href={
            isMobile === "Android" || !isMobile
              ? "https://play.google.com/store/apps/details?id=com.enigma.bzrp&hl=es_AR&gl=US"
              : "https://apps.apple.com/us/app/bizarrapp/id6443452982"
          }
          target="_blank"
          rel="noopener noreferrer"
          className={`home__bizarrapp ${onTouch && "home__bizarrapp--show"} ${
            !onTouch && onTouchFirst ? "home__bizarrapp--hidden" : null
          }`}
        >
          <div className="home__bizarrapp-image-wrapper">
            <img
              title="Bizarrapp"
              className="home__bizarrapp--img"
              src={bizarrapp}
              alt="bizarrapp"
            />
            <h2 className="home__bizarrapp--txt">BIZARRAPP</h2>
          </div>
        </a>
        <BzrpTourBtn show={onTouch} />
        {/* {!onTouchFirst && (
          <div className="home__image-logo" onClick={onClick}>
            <Logo glow={glow} />
          </div>
        )} */}
        <ExclusiveMaterial show={onTouch} />
        <footer
          className={`home__rrss  ${onTouch && "home__rrss--show"} ${
            !onTouch && onTouchFirst ? "home__rrss--hidden" : null
          }`}
        >
          <img
            title="#52"
            className="home__rrss-image"
            src={opOne}
            alt="Teenage Engineering OP-1"
            onClick={() => setAudioplayer(true)}
          />
          <div
            className="home__rrss-icons-container"
            title="Redes sociales Bizarrap"
          >
            <div className="home__rrss-icon-wrapper">
              <a
                href="https://open.spotify.com/artist/716NhGYqD1jl2wI1Qkgq36"
                target="_blank"
                className="home__rrss-spotify"
                rel="noopener noreferrer"
                title="Spotify"
              >
                <Spotify />
              </a>
            </div>
            <div className="home__rrss-icon-wrapper">
              <a
                href="https://twitter.com/bizarrap"
                target="_blank"
                className="home__rrss-twitter"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <X />
              </a>
            </div>
            <div className="home__rrss-icon-wrapper">
              <a
                href="https://www.instagram.com/bizarrap/"
                target="_blank"
                className="home__rrss-instagram"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <Instagram />
              </a>
            </div>
            <div className="home__rrss-icon-wrapper">
              <a
                href="https://www.youtube.com/@Bizarrap"
                target="_blank"
                className="home__rrss-youtube"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <YouTube />
              </a>
            </div>
          </div>
        </footer>
        <AudioplayerPopup
          isOpen={audioplayer}
          setIsOpen={setAudioplayer}
          audio={quevedo}
        />
        <CountriesPopup isOpen={countries} setIsOpen={setCountries} />
      </main>
      {!JSON.parse(window.sessionStorage.getItem("visited")) && (
        <LiveTour2024 isVisible={!onTouchFirst} setClosed={onClick} />
      )}
    </>
  );
};
export default Home;
