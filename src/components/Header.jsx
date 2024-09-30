import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from '../contexto/UsuarioContext'
function Header() {

  const { usuario } = useContext(UsuarioContext)

  
  
  return (
    <>
    <header>
        <ul>

        <li><Link to={'/'}> Inicio </Link></li>

        { usuario == null? <li><Link to={'/login'}>Login</Link></li>: <><li>Bienvenido/a {usuario}</li></>}

        {usuario != null ? <li><Link to={'/logout'}>Cerrar Sesion</Link></li>: <></>}

        {usuario != null ? <li><Link to={'/resenas'}>Mis reseñas</Link></li>: <></>}

        <li><Link to={'/todas'}>Ver reseñas</Link></li>

        </ul>
    </header>
    </>
  )
}

export default Header