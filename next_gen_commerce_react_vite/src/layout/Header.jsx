import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faCartShopping,
  faHeart,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeaderHero from "../assets/header_girl.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-white border-b p-2">
        <div className="px-4 py-2 flex justify-between">
          <Link to="/" className="text-xl font-bold text-[#252B42]">
            Bandage
          </Link>

          <div className="md:hidden flex space-x-4">
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <nav className={`md:flex ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-4 mt-2">
              <li>
                <Link to="/" className="block text-[#737373] text-[14px]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="block text-[#737373] text-[14px]">
                  Shop <FontAwesomeIcon icon={faChevronDown} />
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-[#737373] text-[14px]">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-[#737373] text-[14px]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-[#737373] text-[14px]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-[#737373] text-[14px]">
                  Pages
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[#23A6F0] text-[14px]">
              <FontAwesomeIcon icon={faUser} /> Login / Register
            </a>
            <a href="#" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <a href="#" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <a href="#" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faHeart} />
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center md:hidden">
        <Link to="/" className="block py-2 text-[#737373]">
          Home
        </Link>
        <Link to="/product" className="block py-2 text-[#737373]">
          Product
        </Link>
        <Link to="/pricing" className="block py-2 text-[#737373]">
          Pricing
        </Link>
        <Link to="/contact" className="block py-2 text-[#737373]">
          Contact
        </Link>
      </div>
      <div className="flex items-center mx-auto justify-center">
        <img src={HeaderHero} alt="header_girl" />
      </div>
    </div>
  );
};

export default Header;
