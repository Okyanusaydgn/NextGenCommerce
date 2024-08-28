import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ShopHeader from './components/shopPageComponents/ShopHeader';
import "../src/App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
          <Footer />
        </Route>
        
        
        <Route path="/shop" component={ShopHeader} />
      </Switch>
    </div>
  );
}

export default App;
