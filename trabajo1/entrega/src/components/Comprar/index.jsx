import React from 'react'
import ComprarMap from '../ComprarMap'
import { Shop } from '../../containers/Context/ShopProvider'
import { useContext } from 'react'
import "./estilos.css"
import { Link } from 'react-router-dom'

const Comprar = () => {
const {products} = useContext(Shop)

return (
    <>
    {
        products.length === 0
        ?
        <div className='botonVolver'>
            <Link to="/"><button className='botonV'>volver</button></Link>
        </div>
        
        :
        <div className='divFormulario'>
        {products.map( item =>{
            return <ComprarMap item={item} key={item.id}></ComprarMap>
        })}
        </div>
    }

    </>

)
}

export default Comprar