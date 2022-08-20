import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items}) => {
  return (
    <>
        <div className="container-fluid contenedorCards animate__animated animate__fadeInUp">
            {items.map((item, indx) => (
                <Item key={indx} id={item.id} title={item.title} price={item.price} img={item.img} stock={item.stock}/>
                ))
            }
        </div>    
    </>
  )
}

export default ItemList