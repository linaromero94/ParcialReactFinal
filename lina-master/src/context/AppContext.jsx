import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

export const initialState = {
  theme: "light",
  dentists: [],
  favorites: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const setDentists = (dentists) => {
    dispatch({ type: "SET_DENTISTS", payload: dentists });
  };

  const addFavorite = (dentist) => {
    dispatch({ type: "ADD_FAVORITE", payload: dentist });
  };

  const removeFavorite = (id) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{ state, dispatch, toggleTheme, setDentists, addFavorite, removeFavorite }}
    >
      {children}
    </AppContext.Provider>
  );
};
