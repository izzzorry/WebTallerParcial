import React from 'react';
import { Link } from 'react-router-dom';
import './Recuadroestilo.css';

function Recuadro({ categoria }) {
  // Definir la ruta basada en la categoría
  const ruta = categoria; 

  return (
    <div className="BigRecuadro">
      <Link to={`/${ruta}`} className="Cuadrado">
        <h1>{categoria}</h1>
        <img src="src/assets/Cinema.svg" alt="Cinema" />
      </Link>
      <h2>{categoria} Populares</h2>
    </div>
  );
}

export default Recuadro;
