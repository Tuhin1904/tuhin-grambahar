import { useState } from 'react';
import HomeProductSwiper from '../home-product-swiper/HomeProductSwiper';
import { getAbsImageUrl } from '../../services';

function Rating({ rating, totalRating }) {
  return (
    <>
      <div className="review-stars">
        {Array.from({ length: Math.floor(rating) }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <i className="fa-solid fa-star" key={index} />
        ))}
        {rating - Math.floor(rating) > 0 ? <i className="fa-solid fa-star-half-stroke" /> : null}
        {Array.from({ length: 5 - Math.ceil(rating) }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <i className="fa-regular fa-star" key={index} />
        ))}
      </div>
      <div className="no-of-reviews">({totalRating})</div>
    </>
  );
}

function HomePageProduct({ products, product, onChangeProductHandler }) {
  const [cartItem, setCartItem] = useState(0);

  const addCartItem = () => {
    setCartItem(cartItem + 1);
  };

  const removeCartItem = () => {
    if (cartItem > 1) {
      setCartItem(cartItem - 1);
    }
  };

  return (
    <>
      <div className="home-product-container">
        <div className="home-product-container-inner">
          {/* this one is the main container for product image  */}
          <div className="product-img-main-container">
            <div className="organic-badge">
              100% <strong>Organic</strong>
            </div>
            <img src={getAbsImageUrl(product.images[0])} alt="grambahar" className="date-palm-jaggery-img" />
          </div>
          {/* second part for product buying options */}
          <div className="product-buying-options">
            <h2 className="product-title">{product?.name}</h2>
            <p className="prod-desc">{product?.subtitle}</p>

            <p className="product-price">
              <span id="offer-price">
                <span>&#8377;</span>
                {product?.sellingPrice}/-
              </span>
              <span id="regular-price">
                <span>&#8377;</span>
                <strike>{product?.mrp}/-</strike>
              </span>
              <Rating rating={product?.rating} totalRating={product?.totalRating} />
            </p>
            <div className="product-cashback">
              Get cash back upto <i className="fa-sharp fa-solid fa-comments-dollar" /> <span>&#8377;</span>150/-
            </div>
            <div className="product-type-container">
              <div className="choose-size">Choose Size</div>
              {products.map((item, itemIndex) => (
                <button
                  type="button"
                  onClick={() => {
                    setCartItem(1);
                    onChangeProductHandler(itemIndex);
                  }}
                  key={item.id}
                  className={`product-size ${item?.variant === product?.variant ? 'size-active' : ''}`}
                >
                  {item?.variant}
                </button>
              ))}
            </div>
            <div className="product-cart-section">
              <div className="product-quantity">Quantity</div>
              <div className="cart-quantity">
                <button type="button" className="minus" onClick={removeCartItem}>
                  -
                </button>
                <div className="qty">{cartItem}</div>
                <button type="button" className="plus" onClick={addCartItem}>
                  +
                </button>
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
        <div className="sm-home-product-image">
          <img src={getAbsImageUrl(product.images[0])} alt="grambahar" className="date-palm-jaggery-img" />
        </div>
        <HomeProductSwiper />
        <div className="sm-product-buying-options">
          <div className="sm-product-heading">{product?.name}</div>
          <div className="sm-prod_desc">{product?.subtitle}</div>
          <p className="product-price">
            <span id="offer-price">
              <span>&#8377;</span>
              {product?.sellingPrice}/-
            </span>
            <span id="regular-price">
              <span>&#8377;</span>
              <strike>{product?.mrp}/-</strike>
            </span>
            <Rating rating={product?.rating} totalRating={product?.totalRating} />
          </p>
          <div className="product-cashback">
            Get cansback upto <i className="fa-sharp fa-solid fa-comments-dollar" /> <span>&#8377;</span>150/-
          </div>
          <div className="product-type-container">
            <div className="sm-choose-size">CHOOSE SIZE</div>
            <br />
            {products.map((item, itemIndex) => (
              <button
                type="button"
                onClick={() => {
                  setCartItem(1);
                  onChangeProductHandler(itemIndex);
                }}
                key={item.id}
                className={`product-size ${item?.variant === product?.variant ? 'size-active' : ''}`}
              >
                {item?.variant}
              </button>
            ))}
          </div>
          <div className="product-cart-section sm-product-cart-section">
            <div className="product-quantity">Quantity</div>
            <div className="cart-quantity">
              <button type="button" className="minus" onClick={removeCartItem}>
                -
              </button>
              <div className="qty">{cartItem}</div>
              <button type="button" className="plus" onClick={addCartItem}>
                +
              </button>
            </div>
            <div className="cart-options">
              <div className="add-to-cart-btn">Add to cart</div>
              <div className="buy-now-btn">BUY NOW</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageProduct;
