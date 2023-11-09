const CART_KEY = 'cart';

export const setCart = ({ product, quantity }) => {
  localStorage.setItem(CART_KEY, JSON.stringify({ product, quantity }));
};

export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : {};
};
