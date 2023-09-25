import React from 'react';
import classes from './Cartitems.module.css';
const CartItems = () => {
  return (
    <>
      <div className={classes.cart_item_container}>
        <div className={classes.cart_item_left}>
          <div className={classes.prod_image}>
            <img src={'./images/product-transparent.png'} alt="" />
          </div>
        </div>
        {/* this is the partision between two sections  */}
        <div className={classes.cart_item_right}>
          <div className={classes.title}>Date Palm Jaggery</div>
          <div className={classes.offer_box}>
            <div className={classes.box}>
              30% OFF
            </div>
            <div className={classes.offer}>
              Limited time deal
            </div>
          </div>
          <div className={classes.price_box}>
            <div className={classes.price}>299</div>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default CartItems;
