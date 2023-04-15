import React, { useState } from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = (name, email) => {
    setFormSubmitted(true);
    setName(name);
    setEmail(email);
  };

  return (
    <div className='container'>
      <h2>Contacto</h2>
      {!formSubmitted && <ContactForm handleFormSubmit={handleFormSubmit} />}
      {formSubmitted && (
        <div>
          <p>Gracias {name}, te contactaremos cuanto antes vía mail.</p>
          <p>Correo electrónico: {email}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
