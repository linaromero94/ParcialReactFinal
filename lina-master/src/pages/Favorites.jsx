import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";

const Favorites = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <div className='container my-4'>
      <h2 className='text-center mb-4'>Dentistas Favoritos</h2>
      {state.favorites.length > 0 ? (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {state.favorites.map((dentist) => (
            <div className='col' key={dentist.id}>
              <Card dentist={dentist} />
            </div>
          ))}
        </div>
      ) : (
        <div className='alert alert-info text-center' role='alert'>
          No hay dentistas agregados a favoritos
        </div>
      )}
    </div>
  );
};

export default Favorites;
