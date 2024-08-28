import React from 'react';
import { Link } from 'react-router-dom';
import shoppage1 from "../../assets/shoppage1.png";
import shoppage2 from "../../assets/shoppage2.png";
import shoppage3 from "../../assets/shoppage3.png";
import shoppage4 from "../../assets/shoppage4.png";
import shoppage5 from "../../assets/shoppage5.png";
import shoppagecard1 from "../../assets/shop_page/shoppagecard1.png";
import shoppagecard2 from "../../assets/shop_page/shoppagecard2.png";
import shoppagecard3 from "../../assets/shop_page/shoppagecard3.png";
import shoppagecard4 from "../../assets/shop_page/shoppagecard4.png";
import shoppagecard5 from "../../assets/shop_page/shoppagecard5.png";
import shoppage6 from "../../assets/shop_page/shoppage6.png";
import shoppage7 from "../../assets/shop_page/shoppage7.png";
import shoppage8 from "../../assets/shop_page/shoppage8.png";
import shoppage9 from "../../assets/shop_page/shoppage9.png";
import shoppage10 from "../../assets/shop_page/shoppage10.png";
import shoppage11 from "../../assets/shop_page/shoppage11.png";
import shoppage12 from "../../assets/shop_page/shoppage12.png";
import ShopProductCard from '../shopPageComponents/ShopProductCard';
import Clients from '../homePageComponents/Clients';
import Footer from '../../layout/Footer';
const Shop = () => {
  const items = [
    { id: 1, title: 'CLOTHS', image: shoppage1, itemCount: 5 },
    { id: 2, title: 'CLOTHS', image: shoppage2, itemCount: 5 },
    { id: 3, title: 'CLOTHS', image: shoppage3, itemCount: 5 },
    { id: 4, title: 'CLOTHS', image: shoppage4, itemCount: 5 },
    { id: 5, title: 'CLOTHS', image: shoppage5, itemCount: 5 },
  ];

  const products = [
    { id: 1, title: 'Graphic Design', image: shoppagecard1, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 2, title: 'Graphic Design', image: shoppagecard2, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 3, title: 'Graphic Design', image: shoppagecard3, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 4, title: 'Graphic Design', image: shoppagecard4, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 5, title: 'Graphic Design', image: shoppagecard5, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 6, title: 'Graphic Design', image: shoppage6, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 7, title: 'Graphic Design', image: shoppage7, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 8, title: 'Graphic Design', image: shoppage8, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 9, title: 'Graphic Design', image: shoppage9, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 10, title: 'Graphic Design', image: shoppage10, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 11, title: 'Graphic Design', image: shoppage11, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
    { id: 12, title: 'Graphic Design', image: shoppage12, price: '6.48', oldPrice: '16.48', colors: ['#23856D', '#FFC107', '#DC3545', '#28A745'] },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shop</h1>

      {/* Mevcut Items Bölümü */}
      <div className="grid grid-cols-1 gap-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-2">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/shop/${item.id}`}
            className="block rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[332px] h-[300px] lg:w-[205px] lg:h-[223px] object-cover mx-auto"
            />
            <div className="p-2 text-center">
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.itemCount} Items</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Ürünler Bölümü */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ShopProductCard 
              key={product.id} 
              image={product.image} 
              title={product.title} 
              price={product.price} 
              oldPrice={product.oldPrice} 
              colors={product.colors} 
            />
          ))}
        </div>
      </div>

      {/* Sayfalama */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button className="px-3 py-1 border rounded-md">First</button>
        <button className="px-3 py-1 border rounded-md">1</button>
        <button className="px-3 py-1 border rounded-md">2</button>
        <button className="px-3 py-1 border rounded-md">3</button>
        <button className="px-3 py-1 border rounded-md">Next</button>
      </div>

      {/* Clients Section */}
      <Clients/>
      <Footer/>
    </div>
  );
};

export default Shop;
