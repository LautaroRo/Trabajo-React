import React, { useEffect } from "react";
import { useState } from "react";
import "./estilos.css"
import { Link } from "react-router-dom";




const ItemDetail = ({detail}) => {
  

  const {precio} = detail
  
  const [closeBoton, setcloseBoton] = useState(0)
  const [precioFinal, Final] = useState(0)
  const [cont, carrito] = useState(1)
  const [block, bloquear] = useState(false)
  
  const agregar = () =>{  
    carrito(cont + 1)
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
                <button onClick={cantidad} className="botonComprar">Comprar</button>
              </div>
            </div>
            :
            <button>
              <Link to="/cart">
              go cart
              </Link>
            </button>

        }



        </div>
      
    </div>
  )
  
}

export default ItemDetail