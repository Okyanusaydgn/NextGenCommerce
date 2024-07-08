// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <h2 >{product.name}</h2>
      <p>{product.description}</p>
      <p >{product.price} TL</p>
    </div>
  );
};

export default ProductCard;





