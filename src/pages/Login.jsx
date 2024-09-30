import React from 'react'
import { useState,useRef,useContext } from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Login() {

  const redireccionar = useNavigate()

  const { login } = useContext(UsuarioContext);

  const [error,setError] = useState('');

  const usuarioRef = useRef();
  const contraRef = useRef();

  function checkearUsuario(e) {
    e.preventDefault();

    let objetoAMandar = {

      usuario: usuarioRef.current.value,
      contrasena: contraRef.current.value

    }

    axios.post('https://subir-server-rose.vercel.app/usuarios',objetoAMandar).then( datos => {

      if (datos.data.mensajeError == 'Usuario no encontrado') {

        setError('Usuario no encontrado');

      }else{

        login(datos.data.nombre);
        redireccionar('/')

      }
      

    })

  }

  return (
    <>
    {error}

    <form action="#" method="post" onSubmit={checkearUsuario}>

      <label htmlFor="usu">Nombre de usuario:</label>
      <input type="text" name="usuario" id="usu" ref={usuarioRef}/> <br />

      <label htmlFor="pass">Contraseña: </label>
      <input type="password" name="password" id="pass" ref={contraRef}/> <br />

      <input type="submit" value="Iniciar Sesion" />

    </form>
    </>
  )
}

export default Login