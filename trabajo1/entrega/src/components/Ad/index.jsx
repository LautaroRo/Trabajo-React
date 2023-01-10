import React from 'react'
import "./estilos.css"
const Ad = ({children}) => {
    return (
        <div className='divContainer'>
            <div className='Ad'>
                {children}
            </div>
        </div>
    )
}

export default Ad