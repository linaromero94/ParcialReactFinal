import React, { useReducer } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Dentist from "./pages/Dentist";
//import Favorites from "./pages/Favorites";
import { AppContextProvider } from "./context/AppContext";
import appReducer from "./reducers/appReducer";
import Favorites from "./pages/Favorites";

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
    <div>
      <AppContextProvider
        value={{
          theme: state.theme,
          data: state.data,
          favorites: state.favorites,
          handleThemeChange: handleThemeChange,
          handleAddFavorite: handleAddFavorite,
        }}
      >
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/dentist/:id' element={<Dentist />} />
            <Route exact path='/contacto' element={<Contact />} />
            <Route exact path='/favs' element={<Favorites />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
