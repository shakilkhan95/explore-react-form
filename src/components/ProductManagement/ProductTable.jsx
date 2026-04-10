import React from 'react'

const ProductTable = ({products}) => {
    console.log(products)
  return (
    <div>
        <h3>Products: {products.length}</h3>
    </div>
  )
}

export default ProductTable