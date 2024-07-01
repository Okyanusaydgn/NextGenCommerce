import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-between">
        <ul className="flex space-x-4">
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="/products">Ürünler</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
