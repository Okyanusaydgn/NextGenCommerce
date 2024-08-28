import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faHeart,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// ShopHeader bileşenini burada tanımlıyoruz
const ShopHeader = () => {
  const [cartCount, setCartCount] = useState(1);
  const [wishlistCount, setWishlistCount] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b p-4">
      {/* Green Section - Visible on Desktop Only */}
      <div className="hidden md:flex justify-center items-center bg-[#23856D] text-white px-8 py-2 space-x-8">
        <div className="flex items-center space-x-4">
          <span>📞 (225) 555-0118</span>
          <span>✉️ michelle.rivera@example.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Follow Us:</span>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex justify-center items-center mt-4 space-x-40">
        <Link to="/" className="text-2xl font-bold text-[#252B42]">
          Bandage
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-[#737373] text-lg">
            Home
          </Link>
          <Link to="/shop" className="text-[#737373] text-lg">
            Shop
          </Link>
          <Link to="/about" className="text-[#737373] text-lg">
            About
          </Link>
          <Link to="/blog" className="text-[#737373] text-lg">
            Blog
          </Link>
          <Link to="/contact" className="text-[#737373] text-lg">
            Contact
          </Link>
          <Link to="/pages" className="text-[#737373] text-lg">
            Pages
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="text-[#23A6F0] text-lg">
            <FontAwesomeIcon icon={faUser} /> Login / Register
          </a>
          <a href="#" className="text-[#23A6F0] relative text-lg">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="#" className="text-[#23A6F0] relative text-lg">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </a>
          <a href="#" className="text-[#23A6F0] relative text-lg">
            <FontAwesomeIcon icon={faHeart} />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
              {wishlistCount}
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex justify-between items-center md:hidden mt-4">
        <Link to="/" className="text-2xl font-bold text-[#252B42]">
          Bandage
        </Link>
        <button onClick={toggleMenu} className="text-2xl text-[#252B42]">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <nav className="flex flex-col items-center space-y-4 text-xl">
            <Link to="/" className="text-[#252B42]">
              Home
            </Link>
            <Link to="/shop" className="text-[#737373]">
              Shop
            </Link>
            <Link to="/about" className="text-[#737373]">
              About
            </Link>
            <Link to="/blog" className="text-[#737373]">
              Blog
            </Link>
            <Link to="/contact" className="text-[#737373]">
              Contact
            </Link>
            <Link to="/pages" className="text-[#737373]">
              Pages
            </Link>
          </nav>
          <div className="flex flex-col space-y-4 items-center mt-4">
            <a href="#" className="text-[#23A6F0] text-xl">
              <FontAwesomeIcon icon={faUser} /> Login / Register
            </a>
            <a href="#" className="text-[#23A6F0] text-xl">
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <a href="#" className="text-[#23A6F0] relative text-xl">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            </a>
            <a href="#" className="text-[#23A6F0] relative text-xl">
              <FontAwesomeIcon icon={faHeart} />
              <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            </a>
            <div className="text-center mt-8">
              <h1 className="text-2xl font-bold">Shop</h1>
              <nav className="text-sm mt-1">
                <Link to="/" className="text-gray-600">
                  Home
                </Link>
                <span className="mx-2 text-gray-600">{">"}</span>
                <span className="text-gray-400">Shop</span>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Breadcrumb */}
      <div className="hidden md:flex justify-between items-center mt-4">
        <h1 className="text-3xl font-bold" style={{ marginLeft: '220px' }}>Shop</h1>
        <nav className="text-base mt-1" style={{ marginRight: '100px' }}>
          <Link to="/" className="text-gray-600">
            Home
          </Link>
          <span className="mx-2 text-gray-600">{">"}</span>
          <span className="text-gray-400">Shop</span>
        </nav>
      </div>
    </header>
  );
};

// ShopPage bileşenini burada tanımlıyoruz
import Shop from "./shop"; // Shop bileşeninin bulunduğu yolu belirtin

const ShopPage = () => {
  return (
    <>
      <ShopHeader />
      <Shop />
    </>
  );
};

export default ShopPage;
