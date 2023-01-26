import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./estilos.css"
import ItemList  from '../../components/ItemList'
import { useParams } from 'react-router-dom'
import Ad from "../../components/Ad"
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"; 
import HookFirebase from '../../Hook'


const ItemListContainer = () => {

    
    const {categoryId} = useParams()
    const [botonAd, setBotonAd] = useState(true)
    const [products,error] = HookFirebase(categoryId)


    useEffect(()=>{

        const escape = (event) =>{
            console.log(event)

            if(event.keyCode === 27){
                setBotonAd(false)
                window.removeEventListener("keydown", escape);
            }
        }

        window.addEventListener("keydown", escape)
        return () => {
            window.removeEventListener("keydown", escape);
        };
    })

    const cerrarBoton = (event) =>{
        event.preventDefault()
        setBotonAd(false)
    }

    return (
        <div style={{paddingBottom:330}}>
            {error && <h1>Oh oh hubo un error: {error}</h1>}
            <ItemList productos={products}></ItemList>
            {
                botonAd === true
                ?<Ad>
                <h2>Hola bienvenido!!!! En nuestra pagina podras encontrar los juegos que usted anda buscando de cualquier plataforma!!!!</h2>
                <button className='botonCerrar' onClick={cerrarBoton}>cerrar</button>             
                </Ad>
                :
                botonAd === false
            }

        </div>
        
    )
}


export default ItemListContainer