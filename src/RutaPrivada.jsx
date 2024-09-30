import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UsuarioContext } from './contexto/UsuarioContext'

function RutaPrivada( {ComponenteQueQuieroPintar }) {

    const {usuario} = useContext(UsuarioContext);

  return (
    <>
    {usuario == null ? <Navigate to={'/login'}/> : ComponenteQueQuieroPintar }
</>
  )

}

export default RutaPrivada