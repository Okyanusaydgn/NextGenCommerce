import React from 'react';
import Clients from '../components/homePageComponents/Clients';
import TopProductOfTheWeek from '../components/homePageComponents/TopProductOfTheWeek';
import ProductGallery from '../components/homePageComponents/ProductGallery';

const HomePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <Clients />
      </div>
      <div className="mt-8"> 
        <TopProductOfTheWeek />
      </div>
      <div>
        <ProductGallery />
      </div>
    </div>
  );
};

export default HomePage;
