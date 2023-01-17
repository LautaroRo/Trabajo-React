import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./estilos.css"
import productos from "../../data/juegos.json"
import ItemList  from '../../components/ItemList'
import { useParams } from 'react-router-dom'
import Ad from "../../components/Ad"


const ItemListContainer = () => {

    
    const {categoryId} = useParams()

    console.log(categoryId)
    const [products, setProducts] = useState([])
    const [botonAd, setBotonAd] = useState(true)

    useEffect(()=> {

    const promesa = new Promise((acc, rec) => {
        setTimeout(() => {
            acc(productos);
        }, 3000);
    });

    promesa

    .then(products => {
        
    if (categoryId) {
        const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
        console.log(productosFiltradosPorCategoria)
            setProducts(productosFiltradosPorCategoria)
    } else {
        setProducts(products)
    }
    })
    .catch((err) => {
        alert("Hubo un error")
    });


    }, [categoryId])

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