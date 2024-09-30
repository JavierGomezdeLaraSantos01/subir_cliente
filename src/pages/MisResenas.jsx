import React from 'react'
import axios from 'axios'
import { useEffect,useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import { UsuarioContext } from '../contexto/UsuarioContext';
function MisResenas() {

    const [resenas,setResenas] = useState([]);

    const {usuario} = useContext(UsuarioContext);

    const {VITE_URL_VIDEOJUEGOS} = import.meta.env;

    useEffect(()=>{

      axios.get(VITE_URL_VIDEOJUEGOS+'/'+usuario).then(resultado =>{

        setResenas(resultado.data);
        

      })

    },[])

  return (
    <>
    <h2>Estas son sus reseñas: </h2>

      <Link to={'/nuevaResena'}>Crear Reseña</Link>

      {resenas.map( resena => {

       return <div key={resena.id_videojuegos}> 
        
        <h3>Nombre: {resena.nombre}</h3>

        <p>Review: </p>

        <pre>{resena.review}</pre>


        <p>Puntuación: {resena.puntuacion}</p>

        <Link to={'/editarResena/'+resena.id_videojuegos}>Editar mi reseña</Link>
        <Link to={'/borrarResena/'+resena.id_videojuegos}>BORRAR mi reseña</Link>

        </div>
      })}

    </>
  )
}

export default MisResenas