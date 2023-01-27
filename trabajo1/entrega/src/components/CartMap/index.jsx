import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Context/ShopProvider'
import "./estilos.css"
import { Link } from "react-router-dom";

const CartMap = ({item}) => {
  const {Eliminar, Limpiar} = useContext(Shop)
  return (

    <form className='divProductosCart'>
      <div>
        <h1 className='h1Carrito'>
        {item.nombre}
      </h1>
      <img className="imgCarrito" src={item.img}></img>
      </div>

      <h2 className='h2Cantidad'>Cantidad: {item.cantidad}</h2>
      <button className='botonCartFormEliminar' onClick={() => Eliminar(item.id)}>Eliminar</button>
      <button className='botonCartFormBorrar' onClick={Limpiar}>
        Borrar todos los productos
        </button>
      
      <Link className="linkDecoration" to="/Comprar">
      <button className='botonCartForm'>
        Ir a comprar
        </button>
      </Link>
        
      </form>
    
  )
}

export default CartMap