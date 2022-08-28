import React from 'react'
import { Link } from "react-router-dom";

const Categorias = () => {
  return (
    <>
    <div>Categorias</div>
        <ul>
                <li>
                    <Link to={`/category/cat1`}>Bodys</Link>
                </li>
                <li>
                    <Link to={`/category/cat3`}>Ajuares</Link>
                </li>
                <li>
                    <Link to={`/category/cat2`}>Accesorios</Link>
                </li>
            </ul>
    </>
    
    
  )
}

export default Categorias