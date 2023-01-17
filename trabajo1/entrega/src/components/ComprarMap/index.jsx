import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Shop } from '../../containers/Context/ShopProvider'



const ComprarMap = ({item}) => {
    const PrecioFinal = item.cantidad * item.precio
    const [MontoFinal, SetMontoFinal] = useState(0)
    const {Eliminar}= useContext(Shop)
return (
    <div>

            {

                PrecioFinal > MontoFinal
                ?
                <form onSubmit={event => {
                    event.preventDefault()
                    SetMontoFinal(event.target.Monto.value)}
                    }>
                    <img src={item.img}></img>
                    <button>comrpar</button>
                    <h2>{PrecioFinal}</h2>
                    <input type="number" name='Monto'></input>
                    <button type='submit' onClick={() => Eliminar(item.id)}></button>
                </form>
                
                :
                null

            }
        

        
    </div>
)
}

export default ComprarMap