import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const DentistDetail = () => {
  const { id } = useParams();
  const { dentists } = useContext(AppContext);
  const dentist = dentists.find((d) => d.id === Number(id));

  return (
    <div>
      <h2>Detalle del dentista</h2>
      {dentist ? (
        <div>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </div>
      ) : (
        <p>Dentista no encontrado</p>
      )}
    </div>
  );
};

export default DentistDetail;
