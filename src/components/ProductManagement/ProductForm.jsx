import React, { useState } from 'react'

const ProductForm = ({ handleAddProducts }) => {

    const [error, setError] = useState('');

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if(productName.length <= 0){
        setError('Please write a product name');
        return
    } else if(price.length <= 0){
        setError("Please give product price");
        return;
    }else if(quantity <= 0){
        setError("Provide at least 1 as quantity");
        return;
    } else{
        setError('');
    }

    const newProduct = { productName, price, quantity };
    handleAddProducts(newProduct);
  };
  return (
    <div>
      <h2>Add new Product</h2>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="productName" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="price" />
        <br />
        <input type="text" name="quantity" placeholder="quantity" />
        <br />
        <input type="submit" value="Add Product" />
      </form>
      <p style={{textAlign: 'center', color: 'red'}}><small>{error}</small></p>
    </div>
  );
};

export default ProductForm