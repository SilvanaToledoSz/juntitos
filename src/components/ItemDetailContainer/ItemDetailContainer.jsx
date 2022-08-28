import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const {id} = useParams()
  
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
    
      setTimeout(()=> {
        resolve(products.find((element)=>element.id == id))
      }, 1000)
      
      }).then((data)=>{
        setItem(data)      

      }).finally(()=> {
        console.log("finalizado")
      })
    

  }, [id])
  


  return (
    <>

      <ItemDetail item={item}/> 
    
    </>
  )
}

export default ItemDetailContainer