import React from 'react'
import './Navbar.css'
import logo from './logo.png'
import NavbarItem from './NavbarItem/NavbarItem.jsx'
import Cartwidget from './Cartwidget/Cartwidget.jsx'
import { NavLink } from 'react-router-dom'
import jnavbar from './jnavbar.json'

const Navbar = () => {

    const navbarItems = ["Home", "Productos", "Categorías", "Carrito"]
    
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/"><img src={logo} className="imgLogo" alt='Logo Juntitos' /></a>
            <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navBar navbar-collapse" id="navbarNav">
         
                

                {
                    jnavbar.routes.map((ruta, index) => (
                        <NavLink key={index} to={ruta.to}>
                            {ruta.label}
                        </NavLink>
                    ))
                }
                <NavLink to={'/'}><Cartwidget /></NavLink>
               
                                
            </div>
        </div>
    </nav>
  )
}

export default Navbar