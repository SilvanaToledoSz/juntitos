import React from 'react'
import logo from '../Navbar/logo.png'

const ItemListContainer = ({bienvenida}) => {
  return (
    <>
        <h1 className='text-center mt-5'>{bienvenida}</h1>
        <img className='text-center mx-auto d-block' style={{width:'200px'}} src={logo} alt="logo" />
    </>
  )
}

export default ItemListContainer