import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <>
        {items.map((item, indx) => (
            <Item key={indx} id={item.id} title={item.title} price={item.price} img={item.img}/>
            ))
        }    
    </>
  )
}

export default ItemList