import React, { createContext } from 'react'
import { useState } from 'react'

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
  }

  const Eliminar = (id) =>{
    console.log(id)
    const updateCart = products.filter(element => element.id !== id)
    setProducts(updateCart)
  }


  

  const isProductInCart = (id) =>{

    return products.some(element => element.id === id)

  }


  return (
    <Shop.Provider value= {{products, addProduct,countCart, Limpiar,Eliminar}}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider