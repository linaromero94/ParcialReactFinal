import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Home = () => {
  const { state, setDentists } = useContext(AppContext);
  // call API

  const fetchDentists = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setDentists(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchDentists();
  }, []);
  return (
    <div className='container my-5'>
      <h1 className='mb-4'>Dentistas destacados</h1>
      <div className='row'>
        {state.dentists.map((dentist) => (
          <div key={dentist.id} className='col-12 col-md-6 col-lg-4 mb-4'>
            <Card dentist={dentist}>
              <Link to={`/dentist/${dentist.id}`} className='btn btn-primary'>
                Ver detalles
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
