import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "./estilos.css"
import { Link } from "react-router-dom";





const Item = ({product}) => {
  return (
    <div>

      <main className='productos'>
        <article className="filaProductos">
            <img className='imagenes'src={product.img} alt={product.id} />
            <h3 className="h3Producto">{product.nombre}</h3>
            <Link to={`/detail/${product.id}`} ><FontAwesomeIcon icon={faCartShopping} className="boton"/></Link>
        </article>
        </main>


    </div>



  )
}

export default Item