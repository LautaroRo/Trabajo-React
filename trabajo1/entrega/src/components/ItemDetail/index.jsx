import React, { useEffect } from "react";
import { useState } from "react";
import "./estilos.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Shop } from "../../Context/ShopProvider";




const ItemDetail = ({detail}) => {
  
  const {addProduct} = useContext(Shop)

  const {precio} = detail
  
  const [closeBoton, setcloseBoton] = useState(0)
  const [precioFinal, Final] = useState(0)
  const [cont, carrito] = useState(1)
  const [block, bloquear] = useState(false)
  
  const agregar = () =>{  
    if(cont < detail.Stock)carrito(cont + 1)
  }

  const quitar = () =>{

      if(!block){
          carrito(cont -1)
      }
      
  }

  /*--const finalizar = () =>{
    carrito(cont - cont + 1)
    Final(cont - cont)
    alert("Compra exitosa")
    
}--*/


const cantidad = () =>{
  console.log(cont)
  setcloseBoton(cont)
  addProduct({...detail,cantidad: cont})
}


const VerificarPrecio = () =>{
  setcloseBoton(cont)
}


const VerPrecio = () =>{
    Final(cont * precio)
}


  useEffect(()=>{
      if(cont < 2){
          bloquear(true)
      }
      
      else if(cont > 0){
          bloquear(false)
      }

  })

  return (
    <div>
    {
      detail.Stock === 0
      ?
      <div>
        <h1 className="h1Nohay"> Disculpen, se han agotados las copias del producto.</h1>
        <div className="botonVolver">
        <Link to="/"><button className="botonV">Volver</button></Link>
        </div>
      </div>
      :
      <div className="divPreCompra">
      <div className="h1Comprar">
        <h1 className="h1MensajeComprar">Selecciona la cantidad que deseas!!!!!</h1>
      </div>
      <div className="divProductoElegido">
        <h3 className='detailT'>{detail.nombre}</h3>
        <p className="descripcion">{detail.descripcion}</p>
        
        <img src={detail.img} className="imgComprar"></img>
        {

          closeBoton === 0 
          ?
            <div className="botonesComprar">
              <div className="posicionBotones">
                <button onClick={agregar} className="botonSumar">+</button>
                <span className="spanCarrito">{cont}</span>
                <button onClick={quitar} className="botonRestar">-</button>
                      
              </div>
              <div className="botonesVer">
                <button onClick={VerPrecio} className="botonVer">Ver precio</button>
                <p className="verPrecio">{precioFinal}</p>
                <button className="botonComprar" onClick={VerificarPrecio}>Comprar</button>
              </div>
            </div>
            :
            <button className="BotonIrAcart" onClick={cantidad}>
              <Link className="dentroDelBoton" to="/cart">
              go cart
              </Link>
            </button>

        }



        </div>
      
    </div>
    }

    
    </div>
  )
  
}

export default ItemDetail