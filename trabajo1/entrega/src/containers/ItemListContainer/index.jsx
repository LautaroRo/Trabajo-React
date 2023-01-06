import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./estilos.css"
import productos from "../../data/juegos.json"
import ItemList  from '../../components/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {


    const {categoryId} = useParams()

    console.log(categoryId)
    const [products, setProducts] = useState([])

    
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
    return (
        <div >
            <ItemList productos={products}></ItemList>
        </div>
        
    )
}


export default ItemListContainer