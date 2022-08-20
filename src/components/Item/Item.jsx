import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = (props) => {

  const onAdd = (contador) => {
    console.log(`Eligió ${contador} de ${title}`)
  }

  const {id, title, price, stock, img} = props
  
  
  return (
        <div className="card m-2 cardStyle">
          <img src={img} className="card-img-top imgStyle" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">Precio: ${price}</p>
            <p className="card-text"><small className="text-muted">Id del producto: {id}</small></p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />             
          </div>
          <div className="card-footer">
            <p className="card-text"><small className="text-muted">Stock disponible: {stock}</small></p>
          </div>
        </div>  
    
  )
}

export default Item