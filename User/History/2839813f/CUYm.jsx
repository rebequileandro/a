import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { ACTION_TYPE } from "../models/action.type.models";

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  recap: {},
  nextDates: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.RECAP: {
      const objetoResultado = action.value.reduce((resultado, objeto) => {
        for (const clave in objeto) {
          if (objeto.hasOwnProperty(clave)) {
            resultado[clave] = objeto[clave];
          }
        }
        return resultado;
      }, {});
      return {
        ...state,
        recap: objetoResultado,
      };
    }
    case ACTION_TYPE.NEXT_DATES: {
      return {
        ...state,
        nextDates: action.value,
      };
    }
  }
  return state;
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ recap: state.recap, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
