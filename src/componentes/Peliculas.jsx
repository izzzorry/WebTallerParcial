import React, { useState } from 'react';
import Modal from './Modal'; // Asegúrate de que la ruta de importación sea correcta
import Encabezado from "./Encabezado";
import './Peliculasestilo.css';
import Footer from "./Footer";
import datos from "../datos/datos.json"; // Ruta ajustada

export function Peliculas() {
  const [selectedMovie, setSelectedMovie] = useState(null); // Estado para la película seleccionada

  // Filtrar, ordenar y limitar los resultados
  const peliculas = datos.entries.filter(pelicula => 
    pelicula.programType === 'movie' && pelicula.releaseYear >= 2010
  ).sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20);

  // Función para manejar el clic en el título de una película
  const handleMovieClick = (pelicula) => {
    setSelectedMovie(pelicula);
  };

  return (
    <>
      <Encabezado />
      <div className="body">
        {peliculas.length > 0 ? (
          <ul>
            {peliculas.map(pelicula => (
              <li key={pelicula.title}>
                <img src={pelicula.images['Poster Art'].url} alt={`Poster de ${pelicula.title}`} />
                {/* Agregamos un evento de clic al título */}
                <p onClick={() => handleMovieClick(pelicula)} style={{cursor: 'pointer'}}>{pelicula.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron películas.</p>
        )}
        {/* Renderizado condicional del Modal */}
        {selectedMovie && <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
      </div>
      <Footer />
    </>
  );
}

export default Peliculas;

