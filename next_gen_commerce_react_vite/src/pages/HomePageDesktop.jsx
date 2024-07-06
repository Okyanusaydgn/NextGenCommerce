// src/pages/HomePageDesktop.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import resim1 from '../Resimler/resim1.jpg';
import resim2 from '../Resimler/resim2.jpg';

const HomePageDesktop = () => {
  const products = [
    { id: 1, name: 'Ürün-1', description: 'Ürün 1 açıklaması', price: 100, imageUrl: resim1 },
    { id: 2, name: 'Ürün-2', description: 'Ürün 2 açıklaması', price: 150, imageUrl: resim2 }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Ana Sayfa (Desktop View)</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePageDesktop;
