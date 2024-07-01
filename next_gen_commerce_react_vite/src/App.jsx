// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import HomePageDesktop from './pages/HomePageDesktop';
import HomePageMobile from './pages/HomePageMobile';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow container mx-auto p-4">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/PageDesktop" element={<HomePageDesktop />} />
            <Route path="/PageMobile" element={<HomePageMobile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
