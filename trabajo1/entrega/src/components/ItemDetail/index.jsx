import React from 'react'


const ItemDetail = ({detail}) => {
    console.log(detail)
  return (
    <div>
      {detail.nombre}
    </div>
  )
}

export default ItemDetail