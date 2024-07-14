import React from "react";
import markUp from "../../assets/markUp.png";
import bookSymbol from "../../assets/bookSymbol.png";
import bookSymbol2 from "../../assets/bookSymbol2.png";

const ServiceHighlights = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-blue-500 p-4 md:p-8">
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold">Featured Products</h2>
        <h3 className="text-2xl font-bold">THE BEST SERVICES</h3>
        <p className="text-gray-500">Problems trying to resolve the conflict between</p>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full">
        <div className="text-center mb-8 md:mb-0 w-328 h-254">
          <img
            src={bookSymbol}
            alt="Easy Wins"
            className="mx-auto mb-4 w-full h-full object-contain"
          />
         
        </div>
        <div className="text-center mb-8 md:mb-0 w-328 h-254">
          <img
            src={bookSymbol2}
            alt="Concrete"
            className="mx-auto mb-4 w-full h-full object-contain"
          />
         
        </div>
        <div className="text-center w-328 h-254">
          <img
            src={markUp}
            alt="Hack Growth"
            className="mx-auto mb-4 w-full h-full object-contain"
          />
          
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
