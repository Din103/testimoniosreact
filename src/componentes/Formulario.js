import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Formulario.css';

export default function Formulario() {
  const { register, handleSubmit, reset, watch } = useForm();
  const [imageBase64, setImageBase64] = useState('');
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const enviar = async (data) => {
    console.log('Datos enviados:', data);
    try {
      const dataWithImage = { ...data, imagen: imageBase64 };
      await addDoc(collection(db, 'testimonios'), dataWithImage);
      setMessage('Testimonio enviado exitosamente!');
      console.log('Testimonio enviado exitosamente!');
      reset();
      setImageBase64('');
    } catch (e) {
      console.error('Error añadiendo el documento: ', e);
      setMessage('Error al enviar el testimonio.');
    }
  };

  // Observar cambios en el campo 'nombre' del formulario para resetear el mensaje
  const watchedName = watch('nombre');
  useEffect(() => {
    if (watchedName) {
      setMessage('');
    }
  }, [watchedName]);

  return (
    <div className='container-formulario'>
      <h1>Introducir nuevo Testimonio</h1>
      {message && <p className='message'>{message}</p>}
      <form onSubmit={handleSubmit(enviar)}>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre</label>
          <input id='nombre' type='text' placeholder='Ingresa tu nombre' {...register('nombre')} />
        </div>
        <div className='form-group'>
          <label htmlFor='pais'>País</label>
          <input id='pais' type='text' placeholder='Ingresa tu país' {...register('pais')} />
        </div>
        <div className='form-group'>
          <label htmlFor='cargo'>Cargo</label>
          <input id='cargo' type='text' placeholder='Ingresa tu cargo' {...register('cargo')} />
        </div>
        <div className='form-group'>
          <label htmlFor='empresa'>Empresa</label>
          <input id='empresa' type='text' placeholder='Ingresa tu empresa' {...register('empresa')} />
        </div>
        <div className='form-group'>
          <label htmlFor='testimonio'>Testimonio</label>
          <input id='testimonio' type='text' placeholder='Ingresa tu testimonio' {...register('testimonio')} />
        </div>
        <div className='form-group'>
          <label htmlFor='imagen'>Subir Imagen</label>
          <input id='imagen' type='file' accept='image/*' onChange={handleImageChange} />
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
