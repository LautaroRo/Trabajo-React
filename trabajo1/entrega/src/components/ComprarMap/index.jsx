import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Shop } from "../../Context/ShopProvider"
import ReactPlayer from "react-player"
import "./estilos.css"
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase/config'
import { doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2"




const ComprarMap = ({item}) => {
    const {Eliminar} = useContext(Shop)
    const PrecioFinal = item.cantidad * item.precio
    const [MontoFinal, SetMontoFinal] = useState(0)
    const {setProducts,products}= useContext(Shop)
    const [Email1, setEmail1] = useState("")
    const [Email2, setEmail2] = useState("")
    const [Nombre, setNombre] = useState("")
    const [Numero, setNumero] = useState(0)




const generarObject = async () =>{

    let timerInterval
    Swal.fire({
    title: 'Confirmando Compra',
    html: 'Espere unos segundos....',
        timer: 1000,
        timerProgressBar: true,
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })
    try{
        
        const order = 
        {
            Nombre : Nombre,
            Id : item.id,
            Titulo : item.nombre,
            Cantidad: parseInt(item.cantidad),
            PrecioFinal: parseInt(PrecioFinal),
            MontoIngresado: parseInt(MontoFinal),
            Email: Email1,
            Telefono: Numero
        }
        console.log(order)
        
        for(const productCart of products){
            
        const productRef =  doc(db, "juegos", productCart.id);
        await updateDoc(productRef, {
        Stock: productCart.Stock - productCart.cantidad
        });

        }

        const docRef = await addDoc(collection(db, "order"),order)
        console.log(docRef)

        const updateCart = products.filter(element => element.id !== item.id)
        setProducts(updateCart)
        Swal.fire({
            title:"Compra Finalizada",
            text:`Muchas gracias por comprar en StoreGames. El id del producto es ${item.id}`,
            icon:"success",
            background:"black",
            color:"white"
        })

    }
    catch(error){
        console.log(error)
    }
}
console.log(Email1)
console.log(Email2)

return (

<>
{
    item.precio > 1
    ?<div className='divFormulario'>
    <form className="formulario" onSubmit={event => {
            event.preventDefault()
            SetMontoFinal(event.target.Monto.value)
            setNombre(event.target.Nombre.value)
            setEmail1(event.target.email1.value)
            setEmail2(event.target.email2.value)
            setNumero(event.target.NumeroDeTelefono.value)
            }
            }>
            <div className="video" style={{width:"100%", height:"100%", padding:"40px"}}>
            <ReactPlayer 
            url={item.video}
            width="700px"
            height="400px"
            controls
            />
            </div>
            <h2 className='precioFinal'>{PrecioFinal}$</h2>
            <input type="number" placeholder='ingrese su monto' name='Monto' className='inputFormulario'></input>
            <input name="Nombre" className="inputFormulario" placeholder='ingrese su nombre' type="text" required></input>
            <input type="email" placeholder='ingrese un email' className="inputFormulario" name="email1" required/>
            <input type="email" className="inputFormulario" placeholder='ingrese el mismo email' name="email2" required />
            <input type="number" className="inputNumero" placeholder='numero de telefono (min10)' name="NumeroDeTelefono"required/>
            <button type='submit' className="botonFormularioVerificar">Verificar Precio</button>
            <button className="Eliminar" onClick={() => Eliminar(item.id)}>Eliminar</button>
    </form>
    {
        PrecioFinal < MontoFinal && Email1 === Email2 && Numero.length > 9
        ?
        <button className='comprarForm' onClick={() => generarObject(item.id)}>Comprar</button>
        :
        null
        
    }


</div>

:
<div className='divFormulario'>
    <form className="formulario" onSubmit={event => {
            event.preventDefault()
            setNombre(event.target.Nombre.value)
            setEmail1(event.target.email1.value)
            setEmail2(event.target.email2.value)
            setNumero(event.target.NumeroDeTelefono.value)
            }
            }>
            <div className="video" style={{width:"100%", height:"100%", padding:"40px"}}>
            <ReactPlayer 
            url={item.video}
            width="700px"
            height="400px"
            controls
            />
            </div>
            <h2 className='precioFinal'>{PrecioFinal}$</h2>
            <input name="Nombre" className="inputFormulario" placeholder='ingrese su nombre' type="text" required></input>
            <input type="email" placeholder='ingrese un email' className="inputFormulario" name="email1" required/>
            <input type="email" className="inputFormulario" placeholder='ingrese el mismo email' name="email2" required />
            <input type="number" className="inputNumero" placeholder='numero de telefono (min10)' name="NumeroDeTelefono"required/>
            <button type='submit' className="botonFormulario">Verificar Precio</button>
            <button className="Eliminar" onClick={() => Eliminar(item.id)}>Eliminar</button>
    </form>
    {
        Email1 === Email2 && Numero.length > 9
        ?
        <button className='comprarForm' onClick={() => generarObject(item.id)}>Comprar</button>
        :
        null
        
        
    }


</div>
}

</>


        

)
}


export default ComprarMap