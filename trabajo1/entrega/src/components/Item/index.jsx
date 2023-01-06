import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus, faX, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import "./estilos.css"
import { Link } from "react-router-dom";





const Item = ({product}) => {
  return (
    <div>

      <main className='productos'>
        <article className="filaProductos">
            <h3>{product.categoria}<button className="mas"><FontAwesomeIcon icon={faPlus}/></button></h3>
            <img className='imagenes'src={product.img} alt={product.id} />
            <h3>{product.nombre}</h3>
            <Link to={`/detail/${product.id}`} ><FontAwesomeIcon icon={faCartShopping} className="boton"/></Link>
            
        </article>
        </main>


    </div>



  )
}

export default Item