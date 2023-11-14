import axios from 'axios';
import { SERVER_BASE_URL } from '.';

export const getBestSellerProduct = async () => {
  const res = await axios.get(`${SERVER_BASE_URL}quick/bestseller/product`);
  return res.data;
};

export const getBestSellerProductWithReviews = async () => {
  const res = await axios.get(`${SERVER_BASE_URL}quick/bestseller/product?reviews=true`);
  return res.data;
};
