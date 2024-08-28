import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import modelgirl1 from "../../assets/modelgirl1.png";
import modelgirl2 from "../../assets/modelgirl2.png";
import modelgirl3 from "../../assets/modelgirl3.png";
import modelgirl4 from "../../assets/modelgirl4.png";
import modelgirl5 from "../../assets/modelgirl5.png";
import modelgirldp1 from "../../assets/modelgirldp1.png";
import modelgirldp2 from "../../assets/modelgirldp2.png";
import modelgirldp3 from "../../assets/modelgirldp3.png";
import modelgirldp4 from "../../assets/modelgirldp4.png";
import modelgirldp5 from "../../assets/modelgirldp5.png";
import modelgirldp6 from "../../assets/modelgirldp6.png";
import modelgirldp7 from "../../assets/modelgirldp7.png";
import modelgirldp8 from "../../assets/modelgirldp8.png";

const desktopProducts = [
  { id: 1, img: modelgirldp1, link: "/product/11" },
  { id: 2, img: modelgirldp2, link: "/product/12" },
  { id: 3, img: modelgirldp3, link: "/product/13" },
  { id: 4, img: modelgirldp4, link: "/product/14" },
  { id: 5, img: modelgirldp5, link: "/product/15" },
  { id: 6, img: modelgirldp6, link: "/product/16" },
  { id: 7, img: modelgirldp7, link: "/product/17" },
  { id: 8, img: modelgirldp8, link: "/product/18" },
  { id: 9, img: modelgirldp1, link: "/product/19" }, 
  { id: 10, img: modelgirldp2, link: "/product/20" } 
];

const mobileProducts = [
  { id: 1, img: modelgirl1, link: "/product/21" },
  { id: 2, img: modelgirl2, link: "/product/22" },
  { id: 3, img: modelgirl3, link: "/product/23" },
  { id: 4, img: modelgirl4, link: "/product/24" },
  { id: 5, img: modelgirl5, link: "/product/25" },
];

const ProductGallery = () => {
  const [desktopVisible, setDesktopVisible] = useState(10);
  const [mobileVisible, setMobileVisible] = useState(5);

  const handleLoadMoreDesktop = () => {
    setDesktopVisible((prev) => Math.min(prev + 5, desktopProducts.length));
  };

  const handleLoadMoreMobile = () => {
    setMobileVisible((prev) => Math.min(prev + 2, mobileProducts.length));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">BESTSELLER PRODUCTS</h1>
      <p className="text-center text-gray-600 mb-4">Problems trying to resolve the conflict between</p>
      
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        {desktopProducts.slice(0, desktopVisible).map((product) => (
          <Link to={product.link} key={product.id} className="relative">
            <img
              src={product.img}
              alt={`Product ${product.id}`}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
      {desktopVisible < desktopProducts.length && (
        <button
          onClick={handleLoadMoreDesktop}
          className="hidden md:block mt-4 mx-auto py-2 px-4 bg-blue-600 text-white font-semibold rounded"
        >
          Load More Products
        </button>
      )}

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-4">
        {mobileProducts.slice(0, mobileVisible).map((product) => (
          <Link to={product.link} key={product.id} className="relative">
            <img
              src={product.img}
              alt={`Product ${product.id}`}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
      {mobileVisible < mobileProducts.length && (
        <button
          onClick={handleLoadMoreMobile}
          className="md:hidden mt-4 mx-auto py-2 px-4 bg-blue-600 text-white font-semibold rounded"
        >
          Load More Products
        </button>
      )}
    </div>
  );
};

export default ProductGallery;
