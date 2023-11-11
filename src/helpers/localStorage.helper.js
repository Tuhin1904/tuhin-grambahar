const CART_KEY = 'cart';

export const setCart = ({ product, quantity }) => {
  localStorage.setItem(CART_KEY, JSON.stringify({ product, quantity }));
};

export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : {};
};

export const getLocalStorageUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : {};
};

export const isUserLoggedIn = () => {
  const user = getLocalStorageUser();
  return user && user?.token;
};

export const setLocalStorageUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};
