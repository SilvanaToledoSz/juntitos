import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const Item = (props) => {

  const onAdd = (contador) => {
    console.log(`Eligió ${contador} de ${title}`)
  }

  const {id, title, price, stock, img} = props
  
  return (
    <div>
      <span>{id}</span>
      <span><img src={img} /></span>
      <span>{title}</span>
      <span>{price}</span>
      <span>{stock}</span>    
      <ItemCount stock={15} initial={1} onAdd={onAdd} />   
    </div>
  )
}

export default Item