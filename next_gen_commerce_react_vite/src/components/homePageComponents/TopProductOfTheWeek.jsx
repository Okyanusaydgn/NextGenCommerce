import React from "react";
import cardContent1 from "../../assets/cardContent1.png";
import cardContent2 from "../../assets/cardContent2.png";
import cardContent3 from "../../assets/cardContent3.png";

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative" style={{ width: '612px', height: '572px' }}>
          <img src={cardContent1} alt="Top Product" className="w-full h-full object-cover" />
          <div className="absolute bg-[#2D8BC0] bg-opacity-75 text-center flex flex-col items-center justify-center"
                 style={{ width: '347px', height: '173px', top: '116px', left: '-1px', padding: '40px 51px 29px 36px', gap: '5px' }}>
              <h2 className="text-white font-bold">Top Product Of the Week</h2>
              <a href="#" className="text-white font-bold border border-white py-2 px-4 rounded hover:bg-white hover:text-[#2D8BC0]">
                Explore Items
              </a>
            </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative" style={{ width: '557px', height: '289px' }}>
            <img src={cardContent2} alt="Top Product" className="w-full h-full object-cover" />
            <div className="absolute bg-[#2D8BC0] bg-opacity-75 text-center flex flex-col items-center justify-center"
                 style={{ width: '347px', height: '173px', top: '116px', left: '-1px', padding: '40px 51px 29px 36px', gap: '5px' }}>
              <h2 className="text-white font-bold">Top Product Of the Week</h2>
              <a href="#" className="text-white font-bold border border-white py-2 px-4 rounded hover:bg-white hover:text-[#2D8BC0]">
                Explore Items
              </a>
            </div>
          </div>
          <div className="relative" style={{ width: '557px', height: '261px' }}>
            <img src={cardContent3} alt="Top Product" className="w-full h-full object-cover" />
            <div className="absolute bg-[#2D8BC0] bg-opacity-75 text-center flex flex-col items-center justify-center"
                 style={{ width: '360px', height: '153px', top: '108px', left: '-1px', padding: '28px 64px 23px 36px', gap: '5px' }}>
              <h2 className="text-white font-bold">Top Product Of the Week</h2>
              <a href="#" className="text-white font-bold border border-white py-2 px-4 rounded hover:bg-white hover:text-[#2D8BC0]">
                Explore Items
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
