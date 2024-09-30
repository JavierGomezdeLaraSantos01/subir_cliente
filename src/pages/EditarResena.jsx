import React from 'react'
import { useRef,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function EditarResena() {
  
    let refNombre = useRef();
    let refPuntuacion = useRef();
    let refReview = useRef();

    let {id} = useParams();

    let {VITE_URL_VIDEOJUEGOS} = import.meta.env;

    let navigation = useNavigate();

    useEffect(()=>{

        axios.get(VITE_URL_VIDEOJUEGOS+'/queVideojuego/'+id).then(resultados =>{

            refNombre.current.value = resultados.data.nombre;
            refPuntuacion.current.value = resultados.data.puntuacion;
            refReview.current.value = resultados.data.review;

            

        });

    },[])

    function editarReview(e) {
        e.preventDefault();

        let datosAEnviar = {
            id_videojuegos: id,
            nombre: refNombre.current.value,
            puntuacion: refPuntuacion.current.value,
            review: refReview.current.value
        }

        axios.put(VITE_URL_VIDEOJUEGOS,datosAEnviar).then(respuesta => {

            if(respuesta.data.mensaje == 'Okay'){

                navigation('/resenas')

            }

        })

    }

    return (
    <>
    
        <form action="#" method="post" onSubmit={editarReview}>

        <label htmlFor="nom">Nombre del videojuego</label>
        <input type="text" name="nombre" id="nom" ref={refNombre}/> <br />
        <label htmlFor="punt">Puntuación: </label>
        <input type="text" name="puntuacion" id="punt" ref={refPuntuacion}/> <br />
        <label htmlFor="rev">Review: </label>
        <textarea name="review" id="rev" ref={refReview}></textarea> <br />
        <input type="submit" value="Editar" />

        </form>
    
    </>
  )
}

export default EditarResena