import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import Loading from "../components/Loading";

const Dentist = () => {
  const [dentist, setDentist] = useState({});
  const { theme } = useContext(AppContext);
  const { id } = useParams();

  const fetchDentist = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setDentist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDentist();
  }, [id]);

  if (Object.keys(dentist).length === 0) {
    return <Loading />;
  }
  return (
    <div
      className={`container-fluid py-5 ${
        theme === "light" ? "bg-light" : "bg-dark text-white"
      }`}
    >
      <div className='container'>
        <h1>{dentist.name}</h1>
        <hr />
        <p>
          <strong>Email:</strong> {dentist.email}
        </p>
        <p>
          <strong>Phone:</strong> {dentist.phone}
        </p>
        <p>
          <strong>Website:</strong> {dentist.website}
        </p>
      </div>
    </div>
  );
};

export default Dentist;
