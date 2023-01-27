import React, { createContext } from 'react'
import { useState } from 'react'
import Swal from "sweetalert2" 
export const Shop = createContext()

const ShopProvider = ({children}) => {

  const [products, setProducts] = useState([])
  const addProduct = (product) => {
    const isInCart = isProductInCart(product.id)
    
    if(isInCart){
      
      const productosRepetidos = products.find(element => element.id === product.id)
      productosRepetidos.cantidad += product.cantidad
      setProducts([...products])

    }else{
      setProducts([...products, product])
    }
    


  }
  
  
  const countCart = () =>{
    
    let cantidadTotal = 0;
    for(const product of products){
      cantidadTotal += product.cantidad
    }
    return cantidadTotal
  }

  const Limpiar = () =>{
    setProducts([])
    Swal.fire({
      icon: 'success',
      title: 'Borrar todos los productos',
      text: 'Se eliminaron todos los productos',
      background: "black",
      color:"white"
    })
  }



  const Eliminar = (id) =>{
    console.log(id)
    const updateCart = products.filter(element => element.id !== id)
    setProducts(updateCart)

    Swal.fire({
      icon: 'success',
      title: 'Producto eliminado',
      text: 'Se elimino el producto seleccionado',
      background: "black",
      color:"white"
    })
  }


  const isProductInCart = (id) =>{

    return products.some(element => element.id === id)

  }

  return (
    <Shop.Provider value= {{products, addProduct,countCart, Limpiar,Eliminar,setProducts}}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider