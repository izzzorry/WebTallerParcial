import React from 'react';
import './Peliculasestilo.css';

function Modal({ movie, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Año de lanzamiento: {movie.releaseYear}</p>
        <img src={movie.images['Poster Art'].url} alt={`Poster de ${movie.title}`} />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Modal;
