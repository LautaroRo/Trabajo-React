import React from 'react'
import ComprarMap from '../ComprarMap'
import { Shop } from '../../containers/Context/ShopProvider'
import { useContext } from 'react'

const Comprar = () => {
const {products} = useContext(Shop)

return (
    <div>
        {products.map( item =>{
            return <ComprarMap item={item} key={item.id}></ComprarMap>
        })}
    </div>
)
}

export default Comprar