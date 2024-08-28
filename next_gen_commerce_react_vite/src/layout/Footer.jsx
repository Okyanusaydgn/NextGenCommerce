import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        {/* Sosyal medya ikonları ve başlık */}
        <div className="flex flex-col px-8 py-9 mb-8 md:flex-row md:justify-between md:px-36">
          <h2 className="text-2xl font-bold mb-4 md:mb-0 text-center md:text-left">Bandage</h2>

          <div className="flex justify-center space-x-4">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="text-[#23A6F0]"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="text-[#23A6F0]"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="text-[#23A6F0]"
              />
            </a>
          </div>
        </div>

        {/* Bilgi listeleri */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 md:text-left">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Company Info</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600">
                  Business Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  User Analytic
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600">
                  IOS & Android
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Watch a Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Subscribe
            </button>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Alt kısım */}
        <div className="mt-8 text-gray-600 bg-[#FAFAFA] py-8 text-center">
          <p className="block whitespace-nowrap font-bold text-xs md:text-xs md:font-normal">Made With Love By</p>
          <p className="block whitespace-nowrap font-bold text-xs md:text-xs md:font-normal">Finland All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
