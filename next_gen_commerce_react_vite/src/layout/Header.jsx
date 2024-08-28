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
import Slider from "react-slick";
import HeaderHero from "../assets/header_girl.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <header className="bg-white border-b p-2">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
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

      <div className="relative bg-gradient-to-r from-[#A0E3E3] via-[#E8FCFC] to-[#23A6F0] rounded-[20px] container mx-auto mt-[40px] p-8">
        <Slider {...settings} className="relative h-[622px]">
          <div className="relative h-[622px]">
            <img
              src={HeaderHero}
              alt="header_girl"
              className="absolute top-[-40px] right-0 h-[580px] object-contain"
            />
            <div className="absolute top-1/4 left-10">
              <p className="text-sm text-blue-500">SUMMER 2020</p>
              <h1 className="text-4xl font-bold text-[#252B42]">
                NEW COLLECTION
              </h1>
              <p className="text-[#737373] mt-2">
                We know how large objects will act,
                <br /> but things on a small scale.
              </p>
              <button className="mt-4 bg-[#23A6F0] text-white py-2 px-6 rounded-full">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="relative h-[622px]">
            <img
              src={HeaderHero}
              alt="header_girl"
              className="absolute top-[-40px] right-0 h-[580px] object-contain"
            />
            <div className="absolute top-1/4 left-10">
              <p className="text-sm text-blue-500">SUMMER 2020</p>
              <h1 className="text-4xl font-bold text-[#252B42]">
                NEW COLLECTION
              </h1>
              <p className="text-[#737373] mt-2">
                We know how large objects will act,
                <br /> but things on a small scale.
              </p>
              <button className="mt-4 bg-[#23A6F0] text-white py-2 px-6 rounded-full">
                SHOP NOW
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;
