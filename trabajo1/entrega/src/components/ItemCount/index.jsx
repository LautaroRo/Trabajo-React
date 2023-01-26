import React from "react";
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPlus, faX, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { Shop } from "../../containers/Context/ShopProvider";
import { Link } from "react-router-dom";


export default function(){


const {countCart} = useContext(Shop)
console.log(countCart)

return (

<div>
    <Link to="/cart" className="linkCarrito">
        <FontAwesomeIcon icon={faCartShopping} className="carrito"/>
        <span className="span">{countCart()}</span>
    </Link>
</div>
    );
}


