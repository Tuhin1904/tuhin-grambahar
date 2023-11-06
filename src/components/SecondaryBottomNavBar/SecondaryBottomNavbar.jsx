import React from 'react';
import classes from './SecondaryBottomNavBar.module.css';
const SecondaryBottomNavbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        <div className={classes.add_to_cart}>Add To Cart</div>
        <div className={classes.buy_now}>Buy Now</div>
      </div>
    </div>
  );
};

export default SecondaryBottomNavbar;
