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
      <div className="grambahar-cartoon-container">
        <img src="images/grambahar-cartoon.jpg" alt="a" className="grambahar-cartoon"/>
        <div className="grambahar-home-page-title">
              Gram<span id="grambahar-home-bahar">Bahar</span> - "The taste of 90's"  <br />
              <span className="grambahar-home-page-subtitle">
                Taste the authentic taste of Date Palm Jaggery as it is, which will bring you back the memories of your Grandmother.
              </span>
        </div>

      </div>
      {/* the image sections ends here  */}
    </>
  );
};

export default HomePage;
