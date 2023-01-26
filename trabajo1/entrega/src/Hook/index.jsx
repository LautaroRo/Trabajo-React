import { useEffect, useState } from "react"
import { db } from '../firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore"; 
const HookFirebase = (categoryId) => {

    const [products, setProducts] = useState([])
    const [error, SetError] = useState("")

    useEffect(()=> {
        try{
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
        }
        catch(error){
            SetError(error.message)
        }
        }, [categoryId])
        
            

        

return [products, error]

}

export default HookFirebase