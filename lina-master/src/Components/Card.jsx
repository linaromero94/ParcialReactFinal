import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardWrapper } from "./styles/CardWrapper";
import { AppContext } from "../context/AppContext";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(AppContext);
  const { theme } = state;

  const handleAddToFavorite = () => {
    dispatch({ type: "ADD_FAVORITE", payload: dentist });
  };

  const cardStyles =
    theme === "light"
      ? {
          backgroundColor: "#f2f2f2",
          color: "#333",
        }
      : {
          backgroundColor: "#333",
          color: "#f2f2f2",
        };
  return (
    <CardWrapper styles={cardStyles}>
      <h2>{dentist.name}</h2>
      <p>{dentist.username}</p>
      <button onClick={handleAddToFavorite}>Add FAV</button>
      <Link to={`/dentist/${dentist.id}`}>See Details</Link>
    </CardWrapper>
  );
};

export default Card;
