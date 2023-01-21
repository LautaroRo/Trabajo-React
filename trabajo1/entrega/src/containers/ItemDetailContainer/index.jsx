import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import juegos from "../../data/juegos.json"
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'


const ItemDetailContainer = () => {
    
    const [detail, setDetail] = useState({})

    const {id} = useParams()
    console.log(id)


    useEffect(()=>{
        
        const getProduct = async () =>{
            const docRef = doc(db, "juegos", id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const juegoDetail = {
                    id: docSnap.id,
                    ...docSnap.data()
                }
                setDetail(juegoDetail)
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }

        getProduct();

        /*--
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
        --*/
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