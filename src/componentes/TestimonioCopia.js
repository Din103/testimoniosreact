//Testimonios.js
import React from 'react';

function TestimonioCopia(props) {
  return (
    <div className='contenedor-testimonio'>
      {/* para añadir imagen no necesita cierre. tiene que ir entre {} y se utiliza la función require */}
      {/* <img className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma'/> */}
           <img 
        className="imagen-testimonio"
        src={props.imagen}  // Si la imagen ya está en base64, solo necesitas pasarla como src
        alt={`Foto de ${props.nombre}`} 
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> <strong>{props.nombre}</strong>  en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa} </strong> </p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}

export default TestimonioCopia;
