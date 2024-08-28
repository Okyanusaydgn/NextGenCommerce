import React from "react";
import markUp from "../../assets/markUp.png";
import bookSymbol from "../../assets/bookSymbol.png";
import bookSymbol2 from "../../assets/bookSymbol2.png";

const ServiceHighlights = () => {
  return (
    <div className="flex justify-center items-center h-auto mt-20"> {/* Margin-top artırıldı */}
      <div className="container mx-auto p-4 flex flex-col items-center">
        <div className="text-center mb-8">
          <h3 className="text-blue-500 text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0.1px' }}>
            Featured Products
          </h3>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '700', lineHeight: '50px', letterSpacing: '0.2px' }}>
            THE BEST SERVICES
          </h2>
          <p className="text-gray-500 mb-4" style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '400', lineHeight: '20px', letterSpacing: '0.2px' }}>
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex flex-row justify-center space-x-6"> {/* Boşluk artırıldı */}
          <div className="text-center w-[150px] h-[150px] md:w-[300px] md:h-[300px]"> {/* İkon boyutu artırıldı */}
            <img
              src={bookSymbol}
              alt="Easy Wins"
              className="mx-auto mb-4 w-full h-full object-contain"
            />
          
          </div>
          <div className="text-center w-[150px] h-[150px] md:w-[300px] md:h-[300px]"> {/* İkon boyutu artırıldı */}
            <img
              src={bookSymbol2}
              alt="Concrete"
              className="mx-auto mb-4 w-full h-full object-contain"
            />
        
          </div>
          <div className="text-center w-[150px] h-[150px] md:w-[300px] md:h-[300px]"> {/* İkon boyutu artırıldı */}
            <img
              src={markUp}
              alt="Hack Growth"
              className="mx-auto mb-4 w-full h-full object-contain"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
