import React from "react";


const ProductCard = ({product}) => {
    return (
        <div className="border border-gray-300 p-4 rounded-md shadow-md mb-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <span className="text-gray-900 font-bold"> {product.price} TL</span>
        </div>
    );
}

export default ProductCard;
