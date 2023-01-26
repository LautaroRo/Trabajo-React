import React from 'react'
import { useContext } from 'react'
import { Shop } from "../../Context/ShopProvider"
import "./estilos.css"
import CartMap from '../../components/CartMap'
import { Link } from 'react-router-dom'

const Cart = () => {
  
  const {products} = useContext(Shop)
  return (

    <div>
      {
        products.length === 0
        ?
        <div className='divNoHay'>
          <h1 className='h1NoHay'>No hay juegos en el carrito</h1>
          <Link to="/"><button className='botonNo'>volver al carrito</button></Link>
        </div>
        
        :
        <div className='divComprarProducto'>
        {products.map(item =>{
            return<CartMap item={item} key={item.id}></CartMap>
          })}
        </div>
      }

    </div>
    
  )
}

export default Cart