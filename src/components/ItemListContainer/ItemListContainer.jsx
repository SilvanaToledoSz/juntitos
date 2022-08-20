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
      img: '../imgs/id1.jpg'},
      {id: 2,
      title: 'Almohadon de lactancia',
      price: 2500,
      img: '../imgs/id2.jpg'},
      {id: 2,
      title: 'Ajuares',
      price: 4000,
      img: '../imgs/id3.jpg'}
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
    <>
        <h1 className='text-center mt-5'>Catálogo de productos</h1>
        <img className='text-center mx-auto d-block' style={{width:'200px'}} src={logo} alt="logo" />
        {items.length ? <ItemList items={items} /> : 
        
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
    </>
  )
}

export default ItemListContainer