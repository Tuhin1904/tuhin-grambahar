import axios from 'axios';
import { SERVER_BASE_URL } from './index.js';
import { getAxiosHeaderWithAccessToken } from './auth.helper.js';

export const getMyCart = async () => {
  const res = await axios.get(`${SERVER_BASE_URL}user/account/cart`, getAxiosHeaderWithAccessToken());
  return res.data;
};

export const updateMyCart = async (products = []) => {
  const res = await axios.patch(
    `${SERVER_BASE_URL}user/account/cart`,
    {
      products,
    },
    getAxiosHeaderWithAccessToken(),
  );
  return res.data;
};

export const addToCart = async (productId, quantity) => {
  const cart = await getMyCart();
  const products = cart.products || [];
  const product = products.find((item) => item.product._id === productId);
  if (product) {
    product.quantity += quantity;
  } else {
    products.push({
      product: productId,
      quantity,
    });
  }
  const res = await updateMyCart(products);
  return res;
};

export const removeFromCart = async (productId) => {
  const cart = await getMyCart();
  const products = cart.products || [];
  const newProducts = products.filter((item) => item.product._id !== productId);
  const res = await updateMyCart(newProducts);
  return res;
};

export const updateQuantity = async (productId, quantity) => {
  const cart = await getMyCart();
  const products = cart.products || [];
  const product = products.find((item) => item.product._id === productId);
  if (product) {
    product.quantity = quantity;
  }
  const res = await updateMyCart(products);
  return res;
};

export const removeFromCartProductQuantity = async (productId, quantity) => {
  const cart = await getMyCart();
  const products = cart.products || [];
  const product = products.find((item) => item.product._id === productId);
  if (product) {
    product.quantity -= quantity;
    product.quantity = Math.max(0, product.quantity);
  }
  const res = await updateMyCart(products);
  return res;
};
