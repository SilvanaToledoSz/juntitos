import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {

  const onAdd = (contador) => {
    console.log(`Eligió ${contador} de ${title}`)
  }

  const {id, price, title, img, stock} = item

  return (
  
      <div className='containter-fluid'>
        <h1 className='text-center m-5'>{title}</h1>
        <div className='row'>
          <div className="col-2">
          </div>
          <div className="col-4 colItem">
            <img src={img} className="imgItem" alt={title}/>
          </div>
          <div className="col-4 colItemDet text-center">
            
            <div>ID del producto: {id}</div>
            <div>Precio: {price}</div>
            <div>Stock: {stock}</div>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
      
   
  )
}

export default ItemDetail
