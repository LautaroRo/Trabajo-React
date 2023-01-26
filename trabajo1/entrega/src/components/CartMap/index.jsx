import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../containers/Context/ShopProvider'
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
      <img className="imgCarrito"src={item.img}></img>
      </div>

      <h2 className='h2Cantidad'>Cantidad: {item.cantidad}</h2>
      <button className='botonCartForm' onClick={() => Eliminar(item.id)}>eliminar</button>
      <button className='botonCartForm' onClick={Limpiar}>
        Borrar todos los productos
        </button>
      <button className='botonCartForm'>
      <Link className="linkDecoration" to="/Comprar">
        Ir a comprar
      </Link>
        </button>
      </form>
    
  )
}

export default CartMap