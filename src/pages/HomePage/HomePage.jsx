import React from "react";
import './HomePage.css';
import HomeProduct from '../../components/HomeProduct/HomeProduct'
import HeroBottom from "../../components/HeroSectionBottom/HeroBottom";
const HomePage = () => {
  return (
    <>
    <HomeProduct/>
    <HeroBottom/>
    {/* this section contains the image  */}
      {/* <div className="grambahar-cartoon-container">
        <img src="images/grambahar-cartoon.jpg" alt="a" className="grambahar-cartoon"/>
        <div className="grambahar-home-page-title">
              Gram<span id="grambahar-home-bahar">Bahar</span> - "The taste of 90's"  <br />
              <span className="grambahar-home-page-subtitle">
                Taste the authentic taste of Date Palm Jaggery as it is, which will bring you back the memories of your Grandmother.
              </span>
        </div>

      </div> */}
      {/* the image sections ends here  */}
      <div className="home-page-container">
        <div className="grambahar-product-story-container">
          <div className="grambahar-farmer-image">
          <img src="images/grambahar-cartoon.jpg" alt="a" className="grambahar-cartoon"/>
          </div>
          <div className="grambahar-product-story">
            <div className="story-title">
              Why Choose GramBahar?
            </div>
            <div className="line">
              
            </div>
            <div className="story">
            Grambahar.com brings you ORGANIC date palm jaggery, loaded with essential nutrients. It is high in iron which helps in treating anemia by increasing the hemoglobin level. It also contains magnesium, calcium, phosphorus, and potassium.
Our local farmers climb tall date palm trees, tap it for its fresh sap and hang their earthen pots into which the sap (neera) trickles all night long. The pots are removed during early dawn hours, filtered through a layered seive and then boiled for many hours at controlled temperature in tin or steel flat vessels fixed on firewood pits - also called a mud oven.

This product contains no additives, adulterated sugar, artificial preservatives, synthetic fillers or binders. 100% natural and 100% ORGANIC.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
