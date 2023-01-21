import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Shop } from '../../containers/Context/ShopProvider'
import ReactPlayer from "react-player"
import "./estilos.css"




const ComprarMap = ({item}) => {
    const PrecioFinal = item.cantidad * item.precio
    const [MontoFinal, SetMontoFinal] = useState(0)
    const {Eliminar}= useContext(Shop)

return (
    <div className='divFormulario'>
            <form className="formulario" onSubmit={event => {
                    event.preventDefault()
                    SetMontoFinal(event.target.Monto.value)}
                    }>
                    <div className="video" style={{width:"100%", height:"100%", padding:"40px"}}>
                    <ReactPlayer 
                    url={item.video}
                    width="700px"
                    height="400px"
                    controls
                    />
                    </div>
                    <h2 className='precioFinal'>{PrecioFinal}</h2>
                    <input type="number" name='Monto' className='inputFormulario'></input>
                    <button type='submit' className="botonFormulario">Verificar Precio</button>
            </form>
            {
                PrecioFinal > MontoFinal
                ?
                null
                :
                <button onClick={() => Eliminar(item.id)}> Comprar</button>
            }
    </div>
)
}

export default ComprarMap