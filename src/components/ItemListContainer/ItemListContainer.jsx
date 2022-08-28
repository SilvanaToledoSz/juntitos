import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import logo from '../Navbar/logo.png'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const {category} = useParams()

  useEffect(() => {

    let products = [
      {id: 1,
      title: 'Bodys',
      price: 2000,
      img: '../imgs/id1.jpg',
      stock: 3,
      category: 'cat1'},
      {id: 2,
      title: 'Almohadon de lactancia',
      price: 2500,
      img: '../imgs/id2.jpg',
      stock: 10,
      category: 'cat2'},
      {id: 3,
      title: 'Ajuares',
      price: 4000,
      img: '../imgs/id3.jpg',
      stock: 0,
      category: 'cat3'}
    ]

    new Promise((resolve) => {
      let productsFiltered = []

      setTimeout(()=> {
        productsFiltered = category ? products.filter((element) => element.category == category) : products 
        resolve(productsFiltered)
        console.log(productsFiltered)
        
      }, 2000)
      
      }).then((data)=>{
        setItems(data)
                
      }).finally(()=> {
        console.log('finalizado')        
      })
      

    
  },[category])
  

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