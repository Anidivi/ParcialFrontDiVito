import React from 'react';

const Card = ({ name, color }) => {
  const cardStyle = {
    backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '20px',
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const colorStyle = {
    display: 'inline-block',
    backgroundColor: color,
    padding: '5px',
    color: '#ffffff',
    borderRadius: '3px',
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>Hola {name}!</h2>
      <h2>Sabemos que tu color favorito es el</h2>
      <span style={colorStyle}>{color}</span>
    </div>
  );
};

export default Card;
