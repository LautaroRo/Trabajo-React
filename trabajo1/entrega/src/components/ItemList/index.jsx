import React from 'react'
import Item from '../Item'


const ItemList = ({productos}) => {
    return (
    <div style={{
        padding: 30,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    }}>
        {productos.map(producto => {
            return <Item product={producto}/>
        })}
    </div>
    )
}

export default ItemList


