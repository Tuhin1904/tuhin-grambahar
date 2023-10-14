import axios from 'axios';
import { SERVER_BASE_URL } from '.';

const getBestSellerProduct = async () => {
  return await axios.get(`${SERVER_BASE_URL}quick/bestseller/product`);
};
