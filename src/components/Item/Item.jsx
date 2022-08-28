import React from 'react'

import './Item.css'
import { useNavigate } from 'react-router-dom';

const Item = (props) => {

  

  const {id, title, price, stock, img} = props
  const nav = useNavigate()
  
  return (
        <div className="card m-2 cardStyle">
          <img src={img} className="card-img-top imgStyle" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">Precio: ${price}</p>
            <p className="card-text"><small className="text-muted">Id del producto: {id}</small></p>
                         
          </div>
          <div className="card-footer">
            <p className="card-text"><small className="text-muted">Stock disponible: {stock}</small></p>
            <button className="btn btn-light" onClick={()=> nav(`item/${id}`)}>MÁS INFO</button>
          </div>
        </div>  
    
  )
}

export default Item