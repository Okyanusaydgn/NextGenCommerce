import React from 'react';

const ShopProductCard = ({ image, title, price, oldPrice, colors }) => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-[450px] sm:h-[90px] md:h-[450px] overflow-hidden mb-4 "> {/* Yükseklik küçültüldü */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.85)' }} // Görüntüye hafif bir karartma uygulandı
        />
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-500 line-through">${oldPrice}</div>
        <div className="text-green-600 text-lg font-bold">${price}</div>
      </div>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <span
            key={index}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopProductCard;
