import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  recap: [],
};

const reducer = (state, action) => {
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
