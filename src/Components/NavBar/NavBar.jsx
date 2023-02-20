import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"


export const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to='/'>
        <span className='nav-logo'>Pro<span>Hardware</span></span>
      </Link> 
        <div className='nav-items'>
            <Link to='/categoria/procesadores'>Procesadores</Link>
            <Link to='/categoria/motherboard'>Motherboard</Link>
            <Link to='/categoria/tarjeta-de-video'>Tarjetas de video</Link>
            <Link to='/categoria/ram'>Memorias Ram</Link>
            <Link to='/categoria/almacenamiento'>Almacenamiento</Link>
            <span><CartWidget/></span>
        </div>
    </div>
  )
}
