import axios from 'axios';
import { SERVER_BASE_URL } from './index.js';
import { getAxiosHeaderWithAccessToken } from './auth.helper.js';

export const getMyOrders = async () => {
  const res = await axios.get(`${SERVER_BASE_URL}user/account/me/orders`, getAxiosHeaderWithAccessToken());
  return res.data;
};

export const getMyOrderById = async (orderId) => {
  const res = await axios.get(`${SERVER_BASE_URL}user/account/me/order/${orderId}`, getAxiosHeaderWithAccessToken());
  return res.data;
};

export const createMyOrder = async ({ cartId, addressId }) => {
  const res = await axios.patch(
    `${SERVER_BASE_URL}user/account/cart`,
    {
      products,
    },
    getAxiosHeaderWithAccessToken(),
  );
  return res.data;
};
