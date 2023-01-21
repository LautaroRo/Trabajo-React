import React from 'react'
import { useContext } from 'react'
import { Shop } from '../Context/ShopProvider'
import "./estilos.css"
import CartMap from '../../components/CartMap'

const Cart = () => {
  
  const {products} = useContext(Shop)
  return (
    <div>
      <div className='divCarro'>
        <h1 className='mensajeCarrito'>Hora de comprar</h1>
        <div className='divComprarProducto'>
        {products.map(item =>{
            return<CartMap item={item} key={item.id}></CartMap>
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart