import React from 'react';
import './HomePage.css';

import HomeProduct from '../../components/HomeProduct/HomeProduct';
import HeroBottom from '../../components/HeroSectionBottom/HeroBottom';
import FAQ from '../../components/FAQ/FAQ';

import CustomSwiper from '../../components/CustomSwiper/CustomSwiper';
import HomeProductDescription from '../../components/HomeProdDescription/HomeProductDescription';
import AllReviews from '../../components/Review/AllReviews';
import SecondaryBottomNavbar from '../../components/SecondaryBottomNavBar/SecondaryBottomNavbar';

function HomePage() {
  return (
    <>
      <CustomSwiper />
      <HomeProduct />
      <HomeProductDescription />
      <HeroBottom />
      <div className="home-page-container">
        <div className="grambahar-product-story-container">
          <div className="grambahar-farmer-image-xl">
            <img src="images/grambahar-cartoon.jpg" alt="a" className="grambahar-cartoon" />
          </div>
          <div className="grambahar-farmer-image">
            {/* <img src="images/grambahar-cartoon.jpg" alt="a" className="grambahar-cartoon" /> */}
          </div>
          <div className="grambahar-product-story">
            <div className="story-title">Why Choose GramBahar?</div>
            <div className="line" />
            <div className="story">
              Grambahar.com brings you ORGANIC date palm jaggery, loaded with essential nutrients. It is high in iron
              which helps in treating anemia by increasing the hemoglobin level. It also contains magnesium, calcium,
              phosphorus, and potassium. Our local farmers climb tall date palm trees, tap it for its fresh sap and hang
              their earthen pots into which the sap (neera) trickles all night long. The pots are removed during early
              dawn hours, filtered through a layered seive and then boiled for many hours at controlled temperature in
              tin or steel flat vessels fixed on firewood pits - also called a mud oven. This product contains no
              additives, adulterated sugar, artificial preservatives, synthetic fillers or binders. 100% natural and
              100% ORGANIC.
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <AllReviews />
      <SecondaryBottomNavbar/>
      {/* <Footer />
      <BottomNavBar /> */}
    </>
  );
}

export default HomePage;
