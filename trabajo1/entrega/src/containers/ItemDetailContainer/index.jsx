import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'
import "./estilos.css"


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
    },[id])



    return (
        <div>
            <div>
            {
            Object.keys(detail).length === 0
            ?
            <div className='loading'>
                <h1>Loading</h1>
            </div>
            : <ItemDetail detail={detail}></ItemDetail>     
            }
            </div>
        </div>
    )
}

export default ItemDetailContainer