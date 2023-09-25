import React from 'react';
import classes from './Cartitems.module.css';
import { Icon } from '@iconify/react';
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
            <div className={classes.box}>30% OFF</div>
            <div className={classes.offer}>Limited time deal</div>
          </div>
          <div className={classes.price_box}>
            <div className={classes.price}>
              <span style={{display:"inline"}}>
                <Icon icon="fa:rupee"  style={{fontSize:"15px",marginTop:"5px",color:"brown"}}/>
              </span>
              299
              <span style={{fontSize:"15px",marginTop:"1px",color:"brown"}}>
                00
              </span>
              <span className={classes.mrp}>
                M.R.P
              </span>
              <strike className={classes.mrp_price}>
              <Icon icon="fa:rupee" style={{fontSize:"1rem",marginTop:"1px",color:"rgb(30, 31, 31)",fontWeight:"100"}}/>
                500.00
               
              </strike>
            </div>
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
