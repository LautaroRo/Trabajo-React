import React from 'react'
import "./estilos.css"

const Cart = ({producto}) => {
  console.log(producto)
  return (
    <div>
      <div className='divCarro'>
        <img src={producto.img}/>
      </div>
    </div>
  )
}

export default Cart