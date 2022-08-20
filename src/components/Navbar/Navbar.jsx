import React from 'react'
import './Navbar.css'
import logo from './logo.png'
import NavbarItem from './NavbarItem/NavbarItem.jsx'
import Cartwidget from './Cartwidget/Cartwidget.jsx'

const Navbar = () => {

    const navbarItems = [
        {
            name:'Home',
            href:'#'
        },
        {
            name:'Categorías',
            href:'#'
        },
        {
            name:'Acerca de nosotros',
            href:'#'
        },
        {
            name:'Cómo comprar',
            href:'#'
        }
    ]
    
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/"><img src={logo} className="imgLogo" alt='Logo Juntitos' /></a>
            <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navBar navbar-collapse" id="navbarNav">
                <ul className="navbar-nav navBar">
                    {navbarItems.map((item, index) => (
                        <NavbarItem key={index} name={item.name} href={item.href}  />
                    ))
                    }                    
                </ul>
                <Cartwidget />                
            </div>
        </div>
    </nav>
  )
}

export default Navbar