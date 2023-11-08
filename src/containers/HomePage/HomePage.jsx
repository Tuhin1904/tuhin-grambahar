import React from 'react';
import './HomePage.css';

import HomeProduct from '../../components/Lagacy/HomeProduct/HomeProduct';
import HeroBottom from '../../components/Lagacy/HeroSectionBottom/HeroBottom';
import FAQ from '../../components/Lagacy/FAQ/FAQ';
import CustomSwiper from '../../components/Lagacy/CustomSwiper/CustomSwiper';
import AllReviews from '../../components/Lagacy/Review/AllReviews';
import SecondaryBottomNavbar from '../../components/Lagacy/SecondaryBottomNavBar/SecondaryBottomNavbar';

function HomePage({ productDescription }) {
  return (
    <>
      <CustomSwiper />
      <HomeProduct />
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
              Grambahar.com brings you Natural date palm jaggery, loaded with essential nutrients. It is high in iron
              which helps in treating anemia by increasing the hemoglobin level. It also contains magnesium, calcium,
              phosphorus, and potassium. Our local farmers climb tall date palm trees, tap it for its fresh sap and hang
              their earthen pots into which the sap (neera) trickles all night long. The pots are removed during early
              dawn hours, filtered through a layered seive and then boiled for many hours at controlled temperature in
              tin or steel flat vessels fixed on firewood pits - also called a mud oven. This product contains no
              additives, adulterated sugar, artificial preservatives, synthetic fillers or binders. 100% natural and
              100% Narutal.
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <AllReviews />
      <SecondaryBottomNavbar />
      {/* <Footer />
      <BottomNavBar /> */}
    </>
  );
}

export default HomePage;


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
