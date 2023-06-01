import React, { useState } from 'react';

const Form = ({ setShow, user, setUser }) => {
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name.length > 2 && user.color.length > 5 && user.name.indexOf(" ") !== 0) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
      setShow(false);
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const buttonStyle = {
    backgroundColor: 'darkgoldenrod',
    border: 'none',
    padding: '10px',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Ingrese su nombre:</label>
        <input
          placeholder="Tu Nombre"
          type="text"
          onChange={(event) => setUser({ ...user, name: event.target.value })}
          style={inputStyle}
        />
        <label style={labelStyle}>Ingrese su color favorito:</label>
        <input
          placeholder="Color en código"
          type="text"
          onChange={(event) => setUser({ ...user, color: event.target.value })}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Enviar
        </button>
      </form>
      {err && <h3>Por favor, verifica que la información sea correcta</h3>}
    </div>
  );
};

export default Form;
