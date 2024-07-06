import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="w-414 h-532 border-2 border-gray-300 rounded-tl-34 opacity-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <span className="mr-2">Bandage</span>
            </div>
            <div className="ml-4">
              <FontAwesomeIcon icon={faSearch} className="text-gray-700" />
            </div>
            <div className="ml-4">
              <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700" />
            </div>
            <div className="ml-4">
              <FontAwesomeIcon icon={faBars} className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
