import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 6) {
      setError("Por favor, ingrese un nombre válido");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingrese un correo electrónico válido");
      return;
    }
    // Aquí puedes hacer lo que quieras con los datos del formulario, como enviarlos a una API o enviarlos por correo electrónico
    setSuccessMessage(`Gracias ${name}, te contactaremos lo antes posible vía email`);
    setName("");
    setEmail("");
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Correo electrónico:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type='submit'>Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default ContactForm;
