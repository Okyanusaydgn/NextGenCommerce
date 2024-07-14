import React from 'react';
import featureProductGirl1 from "../../assets/featureProductGirl1.png";
import featureProductGirl2 from "../../assets/featureProductGirl2.png";

const FeaturedProducts = () => {
  return (
    <div className="border border-blue-500 p-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col md:w-1/2 md:order-2 bg-white p-4">
        <h3 className="text-blue-500 text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0.1px', textAlign: 'left' }}>
          Featured Products
        </h3>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '700', lineHeight: '50px', letterSpacing: '0.2px', textAlign: 'left' }}>
          We love what we do
        </h2>
        <p className="text-gray-700 mb-2" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textAlign: 'left' }}>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <p className="text-gray-700" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px', textAlign: 'left' }}>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-row items-center justify-center w-full md:w-1/2 md:order-1 md:space-x-2">
        <div className="w-[158.41px] h-[363.55px] md:w-[217px] md:h-[498px]">
          <img className="w-full h-full object-cover" src={featureProductGirl1} alt="Happy_girl1" />
        </div>
        <div className="w-[204.41px] h-[363.55px] md:w-[280px] md:h-[498px]">
          <img className="w-full h-full object-cover" src={featureProductGirl2} alt="Happy_girl2" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
