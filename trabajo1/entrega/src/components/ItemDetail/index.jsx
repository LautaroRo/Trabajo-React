import React, { useEffect } from "react";
import { useState } from "react";
import "./estilos.css"




const ItemDetail = ({detail}) => {
  console.log(detail);

  const {precio} = detail
  console.log(precio)
  
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

  const finalizar = () =>{
    carrito(cont - cont + 1)
    Final(cont - cont)
    alert("Compra exitosa")
    
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
        <h1 className="h1MensajeComprar">hora de comprar tu juego!!!!!</h1>
      </div>
      <div className="divProductoElegido">
        <h3 className='detailT'>{detail.nombre}</h3>
        <p className="descripcion">{detail.descripcion}</p>
        
        <img src={detail.img} className="imgComprar"></img>
        <div className="botonesComprar">
          <div className="posicionBotones">
            <button onClick={agregar} className="botonSumar">+</button>
            <span className="spanCarrito">{cont}</span>
            <button onClick={quitar} className="botonRestar">-</button>
            
          </div>
          <div className="botonesVer">
            <button onClick={VerPrecio} className="botonVer">Ver precio</button>
            <p className="verPrecio">{precioFinal}</p>
            <button onClick={finalizar} className="botonComprar">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default ItemDetail