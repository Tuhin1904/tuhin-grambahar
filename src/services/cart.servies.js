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
