import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Dentist from "./pages/Dentist";
import Favorites from "./pages/Favorites";
import AppContext from "./context/AppContext";
import appReducer from "./reducers/appReducer";

function App() {
  const initialState = {
    theme: "light",
    data: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleThemeChange = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  const handleAddFavorite = (dentist) => {
    dispatch({ type: "ADD_FAVORITE", payload: dentist });
  };

  return (
    <AppContext.Provider
      value={{
        theme: state.theme,
        data: state.data,
        favorites: state.favorites,
        handleThemeChange: handleThemeChange,
        handleAddFavorite: handleAddFavorite,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/dentist/:id' component={Dentist} />
          <Route exact path='/favs' component={Favorites} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
