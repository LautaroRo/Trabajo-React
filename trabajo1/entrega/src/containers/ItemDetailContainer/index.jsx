import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import juegos from "../../data/juegos.json"


const ItemDetailContainer = () => {
    
    const [detail, setDetail] = useState({})

    const {id} = useParams()
    console.log(id)


    useEffect(()=>{
        const getProducts = () => {

            const promesa = new Promise((acc,rej)=>{
                setTimeout(()=>{
                    acc(juegos)
                },2000)
            })
    
            promesa
            .then(response=>{
                if(id){
                    console.log(response)
                    const JuegoFiltrado = response.find(elemente=> elemente.id.toString() === id)
                    console.log(JuegoFiltrado)
                    setDetail(JuegoFiltrado)
                }

            })
    
            .catch(error=>{
                alert("error")
            })
        }

        getProducts()
    },[id])



    return (
        <div>
            <div>
            {
            Object.keys(detail).length === 0
            ? <h2>Loading</h2>
            : <ItemDetail detail={detail}></ItemDetail>     
            }
            </div>
        </div>
    )
}

export default ItemDetailContainer