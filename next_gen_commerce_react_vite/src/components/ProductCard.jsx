// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover mb-2" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-lg font-semibold">{product.price} TL</p>
    </div>
  );
};

export default ProductCard;
