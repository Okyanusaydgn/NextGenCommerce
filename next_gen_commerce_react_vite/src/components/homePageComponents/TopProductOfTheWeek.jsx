import React from "react";
import { Link } from "react-router-dom";
import cardContent1 from "../../assets/cardContent1.png";
import cardContent2 from "../../assets/cardContent2.png";
import cardContent3 from "../../assets/cardContent3.png";

const products = [
  {
    id: 1,
    img: cardContent1,
    link: "/product/1",
  },
  {
    id: 2,
    img: cardContent2,
    link: "/product/2",
  },
  {
    id: 3,
    img: cardContent3,
    link: "/product/3",
  },
];

const TopProductOfTheWeek = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="hidden md:grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Link to={products[0].link} className="relative">
            <img
              src={products[0].img}
              alt={`Product ${products[0].id}`}
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.slice(1).map((product) => (
            <Link to={product.link} key={product.id} className="relative">
              <img
                src={product.img}
                alt={`Product ${product.id}`}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-4">
        {products.map((product) => (
          <Link to={product.link} key={product.id} className="relative">
            <img
              src={product.img}
              alt={`Product ${product.id}`}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopProductOfTheWeek;
