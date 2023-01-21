import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./estilos.css"
import productos from "../../data/juegos.json"
import ItemList  from '../../components/ItemList'
import { useParams } from 'react-router-dom'
import Ad from "../../components/Ad"
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"; 


const ItemListContainer = () => {

    
    const {categoryId} = useParams()
    console.log(db)

    
    const [products, setProducts] = useState([])
    const [botonAd, setBotonAd] = useState(true)

    useEffect(()=> {

        const getProducts = async () =>{
            let querySnapshot
            if(categoryId){
                const q = query(collection(db, "juegos"), where("category", "==", categoryId));
                querySnapshot = await getDocs(q);
            }
            else{
                querySnapshot = await getDocs(collection(db, "juegos"));
            }
            const productosFirebase = []
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            const juegos = {
                id: doc.id,
                ...doc.data()
            }
            productosFirebase.push(juegos)
            });
            setProducts(productosFirebase)


        }
        getProducts()

    /*--const promesa = new Promise((acc, rec) => {
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
    --*/

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