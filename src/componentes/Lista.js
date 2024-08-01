import TestimonioCopia from './TestimonioCopia';
import Testimonio from './Testimonio';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config'
import { useEffect, useState } from 'react';

export default function Lista() {
    const [testimonios, setTestimonios] = useState([]);
  
  useEffect(() => {
    const testimoniosRef = collection(db, 'testimonios');

    getDocs(testimoniosRef)
      .then((resp) => {
        setTestimonios(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };            
          })
        );
      })
      .catch((error) => {
        console.error("Error al obtener los testimonios: ", error);
      });
  }, []);
  return (
    <>
        
    <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

    {testimonios.map((testimonio) => (
      <TestimonioCopia
        key={testimonio.id}
        nombre={testimonio.nombre}
        pais={testimonio.pais}
        imagen={testimonio.imagen}
        cargo={testimonio.cargo}
        empresa={testimonio.empresa}
        testimonio={testimonio.testimonio}
      />
    ))}

    {/* Testimonios adicionales de ejemplo */}
    <Testimonio
      nombre='Shawn Wang'
      pais='Singapur'
      imagen='shawn'
      cargo='Ingeniero de Software'
      empresa='Amazon'
      testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
    />
    <Testimonio
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='sarah'
      cargo='Ingeniera de Software'
      empresa='ChatDesk'
      testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
    />
    <Testimonio
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='emma'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
    />  
  </>     
  )
  
}
