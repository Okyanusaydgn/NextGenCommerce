
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import "../src/App.css";
function App() {
  return (
    <div >
      <Header />
      <div >
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
