import "./Interests.scss";

import { ReactComponent as IconDrinks } from "../../assets/icons/icon_drinks.svg";
import { ReactComponent as IconGenres } from "../../assets/icons/icon_genres.svg";
import Lottie from "lottie-react";
import TagSelector from "./TagSelector/TagSelector";
import { getCurrentUser } from "../../redux/store/slices/user";
import getDrinks from "./getDrinks";
import getGenres from "./getGenres";
import loadingAnimation from "../../assets/loading.json";
import { logInUser } from "../../redux/store/slices/user";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

function Interests() {
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch(logInUser);
  const genres = getGenres();
  const drinks = getDrinks();

  const [userGenres, setUserGenres] = useState([]);
  const [userDrinks, setUserDrinks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState("genres");

  const handleStepChange = (e) => {
    e.preventDefault();
    if (userGenres.length < 3)
      setError("Selecciona al menos 3 tipos de fiesta.");
    else setStep("drinks");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDrinks.length < 3) setError("Selecciona al menos 3 bebidas");
    else {
      (async () => {
        setLoading(true);
        const rawResponse = await fetch(
          process.env.REACT_APP_API + "/fiestero/setting/" + currentUser.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              partiesTypeOfParty: userGenres,
              drinkTypeOfParty: userDrinks,
            }),
          }
        );

        const data = await rawResponse.json();

        if (data._id) {
          setLoading(false);
          dispatch(logInUser(data));
        } else {
          alert("Hubo un error al registrar tus intereses");
        }
      })();
    }
  };

  return (
    <div className="interests">
      {step === "genres" ? (
        <div className="interests-card genres">
          <div className="image">
            <IconGenres />
          </div>
          <h1>¿Qué tipo de fiestas te gustan?</h1>
          <TagSelector
            elements={genres}
            state={userGenres}
            setState={setUserGenres}
            setError={setError}
          />

          {error && <p className="error">*{error}</p>}
          <a href="/" className="btn btn--primary" onClick={handleStepChange}>
            Aceptar
          </a>
        </div>
      ) : (
        <div className="interests-card genres">
          <div className="image">
            <IconDrinks />
          </div>
          <h1>¿Qué tipo de bebidas te gustan?</h1>
          <TagSelector
            elements={drinks}
            state={userDrinks}
            setState={setUserDrinks}
            setError={setError}
          />
          {error && <p className="error">*{error}</p>}

          <div className="submit-wrapper">
            <button
              className={
                loading ? "btn btn--primary loading" : "btn btn--primary"
              }
              onClick={handleSubmit}
            >
              Aceptar
            </button>
            {loading && (
              <Lottie
                animationData={loadingAnimation}
                className="loading-animation"
                loop={true}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Interests;
