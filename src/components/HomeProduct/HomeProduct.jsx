import React from 'react';
import './HomeProduct.css';
import HomeProductSwiper from '../home-product-swiper/HomeProductSwiper';
import { useState } from 'react';

const HomeProduct = () => {
  const [cart_prodtct_qty, setCartProductQty] = useState(0)
  const [weight250_active,set_weight250_active] = useState(false)
  const [weight500_active,set_weight500_active] = useState(false)
  const [prod_weight,set_prod_weight] = useState(250)
  const handelCartAdd = ()=>{
   const data = cart_prodtct_qty +1 ;
   setCartProductQty(data);
  }

  const handelCartDelete = ()=>{
    if(cart_prodtct_qty>0){
      const data = cart_prodtct_qty-1;
      setCartProductQty(data)
    }
  }
  const handelWeightButton = (weight)=>{
    set_prod_weight(weight)
    if(prod_weight==weight){
      set_weight250_active(true)
      set_weight500_active(false)
    }
    else{
      set_weight250_active(false)
      set_weight500_active(true)
    }
    
  }
  const prod_weight250_active = ["sm-product-size",weight250_active==true?"sm-size-active":" "].join(" ")
  const prod_weight500_active = ["sm-product-size",weight500_active==true?"sm-size-active":" "].join(" ")

  return (
    <>
      <div className="home-product-container">
        <div className="home-product-container-inner">
          {/* this one is the main container for product image  */}
          <div className="product-img-main-container">
            <div className="organic-badge">
              100% <strong>Organic</strong>
            </div>
            <img src="./images/product.png" alt="grambahar" className="date-palm-jaggery-img" />
          </div>
          {/* second part for product buying options */}
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
              Get cansback upto <i class="fa-sharp fa-solid fa-comments-dollar"></i> <span>&#8377;</span>150/-
            </div>
            <div className="product-type-container">
              <div className="choose-size">Choose Size</div>
              <div className="product-size size-active">250 Grams</div>
              <div className="product-size">500 Grams</div>
            </div>
            <div className="product-cart-section">
              <div className="product-quantity">Quantity</div>
              <div className="cart-quantity">
                <div className="plus" onClick={handelCartAdd}>+</div>
                <div className="qty">{cart_prodtct_qty}</div>
                <div className="minus" onClick={handelCartDelete}>-</div>
              </div>
              <div className="cart-options">
                <div className="buy-now-btn">BUY NOW</div>
                <div className="add-to-cart-btn">Add to cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* this code is for smaller devices  */}
      <div className="home-product-container-sm">
        {/* <div className="sm-home-product-image">
          <img src="./images/product.png" alt="grambahar" className="sm-date-palm-jaggery-img" />
        </div> */}
        <HomeProductSwiper/>
        <div className="sm-product-buying-options">
          <div className="sm-product-heading">Date Palm Jaggery</div>
          <div className="sm-prod_desc">Authentic Taste of Nature</div>
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
              Get cansback upto <i class="fa-sharp fa-solid fa-comments-dollar"></i> <span>&#8377;</span>150/-
            </div>
            <div className="product-type-container">
              <div className="sm-choose-size">Choose Size</div>
              {/* <div className="sm-product-size sm-size-active">250 Grams</div>
              <div className="sm-product-size">500 Grams</div> */}
              <div className={prod_weight250_active}  onClick={()=>handelWeightButton(250)}>{prod_weight}</div>
              <div className={prod_weight500_active} onClick={()=>handelWeightButton(500)}>{prod_weight}</div>
            </div>
            <div className="product-cart-section">
              <div className="product-quantity">Quantity</div>
              <div className="cart-quantity">
                <div className="plus" onClick={handelCartAdd}>+</div>
                <div className="qty">{cart_prodtct_qty}</div>
                <div className="minus" onClick={handelCartDelete}>-</div>
              </div>
              <div className="cart-options">
                <div className="buy-now-btn">BUY NOW</div>
                <div className="add-to-cart-btn">Add to cart</div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
