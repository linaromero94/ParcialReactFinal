export const TOGGLE_THEME = "TOGGLE_THEME";
export const SET_DENTISTS = "SET_DENTISTS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

const appReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case SET_DENTISTS:
      return {
        ...state,
        dentists: action.payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.id !== action.payload),
      };
    default:
      return state;
  }
};

export default appReducer;
