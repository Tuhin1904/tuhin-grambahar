import { useState } from 'react';
import { useRouter } from 'next/router';
import HomeProductSwiper from '../home-product-swiper/HomeProductSwiper';
import { getAbsImageUrl } from '../../../services';
import { updateMyCart } from '../../../services/cart.services';

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
  const [cartItem, setCartItem] = useState(1);
  const router = useRouter();

  // for updating handleCartItem
  const [addedCartItems, setAddedCartItems] = useState([]);

  const addCartItem = () => {
    setCartItem(cartItem + 1);
  };

  const removeCartItem = () => {
    if (cartItem > 1) {
      setCartItem(cartItem - 1);
    }
  };

  const handleAddToCart = async (e) => {
    console.log('product is ', product);
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      try {
        const updatedCartVal = [...addedCartItems, product];
        console.log('Items in the cart', updatedCartVal);

        const response = await updateMyCart(updatedCartVal);

        console.log('patch response is', response);
        setAddedCartItems(response.data);
      } catch (err) {
        console.log('error is==', err.message);
      }
    } else {
      router.replace('/login');
    }
  };

  return (
    <>
      <div className="home-product-container">
        <div className="home-product-container-inner">
          {/* this one is the main container for product image  */}
          <div className="product-img-main-container">
            <div className="organic-badge">
              100% <strong>Natural</strong>
            </div>
            <img src={getAbsImageUrl(product?.images?.[0])} alt="grambahar" className="date-palm-jaggery-img" />
          </div>
          {/* second part for product buying options */}
          <div className="product-buying-options">
            <h2 className="product-title">{product?.name}</h2>
            <p className="-mb-1 text-sm">{product?.short_description}</p>
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
                <button className="buy-now-btn classes" onClick={handleAddToCart}>
                  BUY NOW
                </button>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* this code is for smaller devices  */}
      <div className="home-product-container-sm">
        <div className="sm-home-product-image">
          <img src={getAbsImageUrl(product?.images?.[0])} alt="grambahar" className="date-palm-jaggery-img" />
        </div>
        <HomeProductSwiper />
        <div className="sm-product-buying-options">
          <div className="sm-product-heading">{product?.name}</div>
          <p className="text-sm">{product?.short_description}</p>
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
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to cart
              </button>
              <button className="buy-now-btn" onClick={handleAddToCart}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageProduct;
