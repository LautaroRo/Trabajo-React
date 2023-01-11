import React from 'react'
import "./estilos.css"

const Cart = ({producto}) => {
  console.log(producto)
  return (
    <div>
      <div className='divCarro'>
        <h1 className='mensajeCarrito'>Hora de comprar</h1>
        <div className='divComprarProducto'>
        </div>
      </div>
    </div>
  )
}

export default Cart