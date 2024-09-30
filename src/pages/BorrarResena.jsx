import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

function BorrarResena() {

    let {id} = useParams();

    let navegacion = useNavigate();

    const {VITE_URL_VIDEOJUEGOS} = import.meta.env;

    function noPorfa() {
        navegacion('/resenas')
    }

    function siPorfa() {
        
        axios.delete(VITE_URL_VIDEOJUEGOS+'/'+id).then( respuesta => {

            if (respuesta.data.borrado == 'Okay') {
                navegacion('/resenas')
            }

        });
    
    }

    return (
    <>
    
    <h2>¿Estás seguro que deseas borrar este registro?</h2>

    <button type="button" onClick={noPorfa}>NO</button>
    
        <button type="button" onClick={siPorfa}>Si...</button>

    </>
  )
}

export default BorrarResena