import React, { useState } from 'react';
import Modal from './Modal';
import Encabezado from "./Encabezado";
import './Peliculasestilo.css'; 
import Footer from "./Footer";
import datos from "../datos/datos.json";

export function Series() {
  const [selectedSeries, setSelectedSeries] = useState(null); // Estado para la serie seleccionada

  // Filtrar, ordenar y limitar los resultados a series
  const series = datos.entries.filter(serie => 
    serie.programType === 'series' && serie.releaseYear >= 2010
  ).sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20);

  // Función para manejar el clic en el título de una serie
  const handleSeriesClick = (serie) => {
    setSelectedSeries(serie);
  };

  return (
    <>
      <Encabezado />
      <div className="body">
        {series.length > 0 ? (
          <ul>
            {series.map(serie => (
              <li key={serie.title}>
                <img src={serie.images['Poster Art'].url} alt={`Poster de ${serie.title}`} />
                {/* Evento de clic en el título */}
                <p onClick={() => handleSeriesClick(serie)} style={{cursor: 'pointer'}}>{serie.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron series.</p>
        )}
        {/* Renderizado condicional del Modal */}
        {selectedSeries && <Modal movie={selectedSeries} onClose={() => setSelectedSeries(null)} />}
      </div>
      <Footer />
    </>
  );
}

export default Series;
