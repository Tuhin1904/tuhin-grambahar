import React from 'react'
import classes from './Cart.module.css'
import CartItems from '../../components/Cart/CartItems'
import { Icon } from '@iconify/react';
const Cart = () => {
  const subTotal = 500;
  return (
    <div className={classes.container}>
      <div className={classes.message}>
        MESSAGES ABOUT ITEMS IN YOUR CART
      </div>
      <div className={classes.subtotal}>
       Subtotal is = <span className={classes.subtotal_value}> {subTotal} <sup style={{fontSize:"0.8rem"}}>00</sup> /-</span>  INR
      </div>
      <div className={classes.free_delivery}> <Icon icon="mdi:tick-decagram" style={{fontSize:"1.6rem",marginRight:"10px",color:"#edb911"}}/> Congratulations Your Order is elegible for free delivery</div>

      <div className={classes.proceed_btn}>Proceed to checkout</div>
    <CartItems/>

    </div>
  )
}

export default Cart;