// components/ProductDetail.jsx
import React from 'react';

const ProductDetail = ({ product, addToCart }) => {
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductDetail;
