import React from 'react'

const ProductForm = ({ handleAddProducts }) => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

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
    </div>
  );
};

export default ProductForm