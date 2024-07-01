// src/App.jsx
import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import HomePageDesktop from './pages/HomePageDesktop';
import HomePageMobile from './pages/HomePageMobile';



function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow container mx-auto p-4">
          <Switch>
            <Route exact path="/" > <HomePage/> 
            <Route  path="/page-desktop" > <HomePageDesktop/></Route>
            <Route  path="/page-mobile" > <HomePageMobile/> </Route>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
