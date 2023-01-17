import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../containers/Context/ShopProvider'
import "./estilos.css"
import { Link } from "react-router-dom";

const CartMap = ({item}) => {
  const {Eliminar, Limpiar} = useContext(Shop)
  return (
    
    <div className='divProductosCart'>
      <div className='fotoYh1'>
      <h1 className='h1Carrito'>
      {item.nombre}
      </h1>
      <img className="imgCarrito"src={item.img}></img>
      </div>
      <h2>{item.cantidad}</h2>
      <button onClick={() => Eliminar(item.id)}>eliminar</button>
      <button onClick={Limpiar}>
        Borrar todos los productos
        </button>
      <button>
      <Link to="/Comprar">
        Ir a comprar
      </Link>
        </button>
    </div>
    
  )
}

export default CartMap