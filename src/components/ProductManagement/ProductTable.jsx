import React from 'react'

const ProductTable = ({products}) => {
    
  return (
    <div>
        <h3>Products: {products.length}</h3>
        <table style={{width: '240px', margin: '0 auto', padding: '20px'}}>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.productName}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable