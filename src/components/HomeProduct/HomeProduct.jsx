import React from "react";
import "./HomeProduct.css";

const HomeProduct = () => {
  return (
    <>
    <div className="home-product-container">
      <div className="home-product-container-inner">
        <div className="product-img-main-container">
            <div className="organic-badge">
                100% <strong>Organic</strong>
            </div>
          <img
            src="./images/product.png"
            alt="grambahar"
            className="date-palm-jaggery-img"
          />
        </div>
        <div className="product-buying-options">
          <h2 className="product-title">Date Palm Jaggery</h2>
          <p className="prod-desc">Authentic Taste of Nature</p>

          <p className="product-price">
            <span id="offer-price">
              <span>&#8377;</span>299/-
            </span>
            <span id="regular-price">
              <span>&#8377;</span>
              <strike>500/-</strike>
            </span>
            <div className="review-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <div className="no-of-reviews">(857)</div>
          </p>
          <div className="product-cashback">
            Get cansback upto{" "}
            <i class="fa-sharp fa-solid fa-comments-dollar"></i>{" "}
            <span>&#8377;</span>150/-
          </div>
          <div className="product-type-container">
            <div className="choose-size">Choose Size</div>
            <div className="product-size size-active">250 Grams</div>
            <div className="product-size">500 Grams</div>
          </div>
          <div className="product-cart-section">
            <div className="product-quantity">Quantity</div>
            <div className="cart-quantity">
              <div className="plus">+</div>
              <div className="qty">1</div>
              <div className="minus">-</div>

            </div>
            <div className="cart-options">
                <div className="buy-now-btn">
                    BUY NOW
                </div>
                <div className="add-to-cart-btn">
                    Add to cart
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </>
  );
};

export default HomeProduct;
