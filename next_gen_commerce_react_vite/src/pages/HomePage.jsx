import React from 'react';
import Clients from '../components/homePageComponents/Clients';
import TopProductOfTheWeek from '../components/homePageComponents/TopProductOfTheWeek';
import ProductGallery from '../components/homePageComponents/ProductGallery';
import FeaturedProducts from '../components/homePageComponents/FeaturedProduct';
import ServiceHighlights from '../components/homePageComponents/ServiceHighlights';
import FeaturedPosts from '../components/homePageComponents/FeaturedPost';

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
      <div>
        <FeaturedProducts/>
      </div>
      <div>
        <ServiceHighlights/>
      </div>
      <div>
        <FeaturedPosts/>
      </div>
    </div>
  );
};

export default HomePage;
