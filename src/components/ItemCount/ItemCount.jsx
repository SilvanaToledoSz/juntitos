import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const sumaCont = () => {
      if (contador < stock ) { setContador(contador + 1) }
    }
    function restarCont(){
      if (contador > initial) {setContador(contador - 1)}
    } 
    

  return (
    <div className='container-fluid'>
      <div className='container-fluid contadorContent'>
          <button type="button" className='btnOperacion btn btn-secondary' disabled={stock === 0} onClick={restarCont}>-</button>
          <span className='cantidadProd text-center'>{contador}</span>
          <button type="button" className='btnOperacion btn btn-secondary' disabled={stock === 0} onClick={sumaCont}>+</button>
      </div>
      <div className='container-fluid btnCarrito'>
          <button type="button" className="btn btn-light" disabled={stock === 0} onClick={()=>{onAdd(contador)}}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount