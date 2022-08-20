import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import logo from '../Navbar/logo.png'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {

    let products = [
      {id: 1,
      title: 'Bodys',
      price: 2000,
      img: 'https://mimoar.vtexassets.com/arquivos/ids/11441731-800-auto?v=637955755523500000&width=800&height=auto&aspect=true',
      stock: 3},
      {id: 2,
      title: 'Almohadon de lactancia',
      price: 2500,
      img: 'https://t3q7m8v4.stackpathcdn.com/uploads/productos_imagen_374-1.jpg',
      stock: 10},
      {id: 2,
      title: 'Ajuares',
      price: 4000,
      img: 'https://cartersarg.vtexassets.com/arquivos/ids/213023-800-auto?v=637715046808100000&width=800&height=auto&aspect=true',
      stock: 0}
    ]

    new Promise((resolve) => {
    
      setTimeout(()=> {
        resolve(products)
      }, 2000)
      
      }).then((data)=>{
        setItems(data)        
      }).finally(()=> {
        console.log('finalizado')        
      })
      

    
  },[])
  

  return (
    <div className='text-center'>
        <img className='mx-auto d-block m-4' style={{width:'150px'}} src={logo} alt="logo" />
        <h1 className='mt-5'>Catálogo de productos</h1>
        
        {items.length ? <ItemList items={items} /> : 
        
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
    </div>
  )
}

export default ItemListContainer